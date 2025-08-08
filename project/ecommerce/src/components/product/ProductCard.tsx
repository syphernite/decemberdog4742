import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useStore } from '../../lib/store';
import type { Product } from '../../lib/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useStore();
  
  const isInWishlist = wishlist.includes(product.id);
  const mainImage = product.images[0];
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;
  const discountPercent = hasDiscount 
    ? Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      productId: product.id,
      variantId: product.variants[0].id,
      quantity: 1,
    });
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <motion.div
      className="group relative"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      <Link to={`/products/${product.id}`}>
        <div className="relative overflow-hidden aspect-[4/5] mb-4">
          {/* Product Image */}
          <motion.img
            src={mainImage?.url}
            alt={mainImage?.alt || product.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 space-y-2">
            {hasDiscount && (
              <Badge variant="destructive">
                -{discountPercent}%
              </Badge>
            )}
            {product.inventory.quantity <= 5 && product.inventory.quantity > 0 && (
              <Badge variant="warning">
                Low Stock
              </Badge>
            )}
            {product.inventory.quantity === 0 && (
              <Badge variant="secondary">
                Sold Out
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm hover:bg-white/20"
            onClick={handleWishlistToggle}
          >
            <Heart
              className={`h-4 w-4 ${
                isInWishlist ? 'fill-champagne text-champagne' : 'text-white'
              }`}
            />
          </Button>

          {/* Add to Cart Button */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              onClick={handleAddToCart}
              disabled={product.inventory.quantity === 0}
              className="w-full bg-champagne/90 backdrop-blur-sm hover:bg-champagne"
              size="sm"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-medium text-white group-hover:text-champagne transition-colors">
            {product.title}
          </h3>
          
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-champagne">
              ${(product.price / 100).toFixed(2)}
            </span>
            {hasDiscount && (
              <span className="text-sm text-white/50 line-through">
                ${(product.compareAtPrice! / 100).toFixed(2)}
              </span>
            )}
          </div>

          {/* Materials */}
          <div className="flex flex-wrap gap-1">
            {product.materials.slice(0, 2).map((material, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {material}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}