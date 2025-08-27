"use client"

import Link from 'next/link'
import buttonTile from '@/assets/images/ui/button/button-brown.png'
import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string
  variant?: 'tile' | 'gradient' | 'plain'
  className?: string
  children: React.ReactNode
}

export default function Button({ href, variant = 'tile', className = '', children, style, ...rest }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-bold rounded-sm shadow-md '
  const combinedClass = base + ' ' + className

  const variantStyle: React.CSSProperties =
    variant === 'tile'
      ? { backgroundImage: `url(${buttonTile.src})`, backgroundSize: '100% 100%' }
      : variant === 'gradient'
      ? { background: 'linear-gradient(90deg,#5a3921,#7a5c2d)' }
      : {}

  const mergedStyle = { ...(variantStyle as React.CSSProperties), ...(style as React.CSSProperties) }

  if (href) {
    // Next.js Link doesn't accept button props; cast rest to safe record
    const linkRest = rest as Record<string, unknown>
    return (
      <Link href={href} className={combinedClass} style={mergedStyle} {...linkRest}>
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedClass} style={mergedStyle} {...rest}>
      {children}
    </button>
  )
}
