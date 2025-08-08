import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Heart, ShoppingBag, Star, ChevronDown, Truck, Shield, RotateCcw } from 'lucide-react';
import { api } from '../lib/api';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { useStore } from '../lib/store';
import { formatPrice } from '../lib/utils';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showCare, setShowCare] = useState(false);
  const [showMaterials, setShowMaterials] = useState(false);

  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useStore();

  const { data: product } = useQuery({
    queryKey: ['product', id],
    queryFn: () => api.products.getById(id!),
    enabled: !!id,
  });

  if (!product) {
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-heading text-champagne mb-4">Product Not Found</h2>
          <p className="text-white/60">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const isInWishlist = wishlist.includes(product.id);
  const currentVariant = selectedVariant 
    ? product.variants.find(v => v.id === selectedVariant)
    : product.variants[0];
  
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;
  const discountPercent = hasDiscount 
    ? Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      variantId: currentVariant?.id || product.variants[0].id,
      quantity,
    });
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <div className="min-h-screen bg-obsidian">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div
              className="aspect-square overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={product.images[selectedImage]?.url}
                alt={product.images[selectedImage]?.alt || product.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 overflow-hidden border-2 ${
                      selectedImage === index 
                        ? 'border-champagne' 
                        : 'border-champagne/20'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-heading font-heading text-champagne mb-2">
                    {product.title}
                  </h1>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-champagne text-champagne"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-white/60">(24 reviews)</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleWishlistToggle}
                >
                  <Heart
                    className={`h-5 w-5 ${
                      isInWishlist ? 'fill-champagne text-champagne' : 'text-white'
                    }`}
                  />
                </Button>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl font-semibold text-champagne">
                  {formatPrice(currentVariant?.price || product.price)}
                </span>
                {hasDiscount && (
                  <>
                    <span className="text-lg text-white/50 line-through">
                      {formatPrice(product.compareAtPrice!)}
                    </span>
                    <Badge variant="destructive">
                      -{discountPercent}% OFF
                    </Badge>
                  </>
                )}
              </div>

              <p className="text-white/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Variants */}
            {product.variants.length > 1 && (
              <div>
                <h3 className="text-sm font-semibold text-champagne mb-3">
                  {Object.keys(product.variants[0].options)[0]?.toUpperCase()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <Button
                      key={variant.id}
                      variant={selectedVariant === variant.id ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedVariant(variant.id)}
                    >
                      {Object.values(variant.options)[0]}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-semibold text-champagne mb-3">
                QUANTITY
              </h3>
              <div className="flex items-center space-x-4">
                <div className="flex border border-champagne/20">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-white hover:bg-champagne/10"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-white border-x border-champagne/20">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-white hover:bg-champagne/10"
                  >
                    +
                  </button>
                </div>
                {currentVariant && currentVariant.inventory.quantity <= 5 && (
                  <Badge variant="warning">
                    Only {currentVariant.inventory.quantity} left
                  </Badge>
                )}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <Button
                onClick={handleAddToCart}
                disabled={currentVariant?.inventory.quantity === 0}
                className="w-full"
                size="lg"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                {currentVariant?.inventory.quantity === 0 ? 'Sold Out' : 'Add to Cart'}
              </Button>
              
              <div className="grid grid-cols-3 gap-4 text-center text-sm text-white/60">
                <div className="flex flex-col items-center space-y-1">
                  <Truck className="h-5 w-5" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <RotateCcw className="h-5 w-5" />
                  <span>30-Day Returns</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <Shield className="h-5 w-5" />
                  <span>Lifetime Warranty</span>
                </div>
              </div>
            </div>

            {/* Accordions */}
            <div className="space-y-4">
              <div className="border-t border-champagne/20 pt-4">
                <button
                  onClick={() => setShowMaterials(!showMaterials)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-semibold text-champagne">Materials</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      showMaterials ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {showMaterials && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="mt-3 space-y-1"
                  >
                    {product.materials.map((material, index) => (
                      <p key={index} className="text-white/80 text-sm">
                        • {material}
                      </p>
                    ))}
                  </motion.div>
                )}
              </div>

              <div className="border-t border-champagne/20 pt-4">
                <button
                  onClick={() => setShowCare(!showCare)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-semibold text-champagne">Care Instructions</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      showCare ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {showCare && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="mt-3 space-y-1"
                  >
                    {product.care.map((instruction, index) => (
                      <p key={index} className="text-white/80 text-sm">
                        • {instruction}
                      </p>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}