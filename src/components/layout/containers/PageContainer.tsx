import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function PageContainer({ children }: Props) {
  return (
    <div className="min-h-screen text-[#5a3921]">
      {children}
    </div>
  )
}
