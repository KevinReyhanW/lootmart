"use client"

import React from 'react'

type Props = {
  open: boolean
  onClose: () => void
  title?: string
  children?: React.ReactNode
}

export default function Modal({ open, onClose, title, children }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg p-6 max-w-md w-full z-10 shadow-xl border-4 border-[#7a5c2d]">
        {title && <h3 className="font-bold text-lg text-[#5a3921] mb-2">{title}</h3>}
        <div className="text-sm text-[#7a5c2d]">{children}</div>
        <div className="mt-4 text-right">
          <button onClick={onClose} className="px-4 py-2 bg-[#5a3921] text-white rounded-sm">Close</button>
        </div>
      </div>
    </div>
  )
}
