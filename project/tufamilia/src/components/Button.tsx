import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

type ButtonProps = LinkProps & {
  className?: string
  children: React.ReactNode
}

/**
 * Button wraps react-router Link with Framer Motion so
 * whileHover/whileTap are applied to a motion-enabled element,
 * avoiding React DOM prop warnings.
 */
export default function Button({
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <MotionLink
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={className}
      {...rest}
    >
      {children}
    </MotionLink>
  )
}
