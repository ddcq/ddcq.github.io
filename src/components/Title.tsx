import type { PropsWithChildren } from 'react'
export default function Title({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="w-full text-center font-title my-4">
      <h2 className="text-4xl text-secondary">{children}</h2>
    </div>
  )
}
