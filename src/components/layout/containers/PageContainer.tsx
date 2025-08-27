import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function PageContainer({ children }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff9f1] via-[#f7e1b8] to-[#f0d8b0] text-[#5a3921]">
      {children}
    </div>
  )
}
