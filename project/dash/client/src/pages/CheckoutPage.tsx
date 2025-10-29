import { useStripe, Elements, PaymentElement, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, ArrowLeft, X } from 'lucide-react';
import { useLocation } from 'wouter';

if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
  console.warn('Missing VITE_STRIPE_PUBLIC_KEY - payment features will not work');
}

const stripePromise = import.meta.env.VITE_STRIPE_PUBLIC_KEY 
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
  : null;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [, setLocation] = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + '/checkout',
      },
      redirect: 'if_required',
    });

    if (error) {
      toast({
        title: "Payment Failed",
        description: error.message,
        variant: "destructive",
      });
      setIsProcessing(false);
    } else {
      setPaymentSuccess(true);
      toast({
        title: "Payment Successful",
        description: "Thank you for your purchase!",
      });
      setIsProcessing(false);
    }
  };

  if (paymentSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
        <p className="text-muted-foreground mb-6">
          Thank you for your purchase. Your order is being processed.
        </p>
        <Button
          onClick={() => setLocation('/')}
          data-testid="button-return-home"
        >
          Return to Home
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <Button
        type="submit"
        disabled={isProcessing || !stripe || !elements}
        className="w-full"
        data-testid="button-submit-payment"
      >
        {isProcessing ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          'Pay Now'
        )}
      </Button>
    </form>
  );
};

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [, setLocation] = useLocation();

  useEffect(() => {
    apiRequest("POST", "/api/create-payment-intent", { amount: 99.99 })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setClientSecret(data.clientSecret);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError('Failed to initialize payment. Please try again.');
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen py-12 px-4" data-testid="page-checkout">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => setLocation('/')}
            className="mb-4"
            data-testid="button-back-home"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold mb-2">Checkout</h1>
          <p className="text-muted-foreground">Complete your purchase securely</p>
        </motion.div>

        <GlassCard className="p-8" elevated>
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
              <p className="text-sm text-muted-foreground">Initializing secure payment...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-6">
                <X className="w-12 h-12 text-destructive" />
              </div>
              <h2 className="text-xl font-bold mb-2">Payment Error</h2>
              <p className="text-muted-foreground mb-6">{error}</p>
              <Button
                onClick={() => setLocation('/')}
                data-testid="button-error-return"
              >
                Return to Home
              </Button>
            </div>
          )}

          {!isLoading && !error && clientSecret && (
            stripePromise ? (
              <div>
                <div className="mb-6 p-4 glass-elevated rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Service Package</span>
                    <span className="font-semibold">Premium Plan</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Amount</span>
                    <span className="text-2xl font-bold text-primary">$99.99</span>
                  </div>
                </div>

                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <CheckoutForm />
                </Elements>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-6">
                  <X className="w-12 h-12 text-destructive" />
                </div>
                <h2 className="text-xl font-bold mb-2">Payment Not Available</h2>
                <p className="text-muted-foreground mb-6">Payment processing is not configured. Please contact support.</p>
                <Button
                  onClick={() => setLocation('/')}
                  data-testid="button-config-error-return"
                >
                  Return to Home
                </Button>
              </div>
            )
          )}
        </GlassCard>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Secure payment processing powered by Stripe
          </p>
        </div>
      </div>
    </div>
  );
}
