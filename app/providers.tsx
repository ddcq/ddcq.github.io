"use client"

import { PropsWithChildren } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function Providers({ children }: PropsWithChildren<unknown>) {
  return <ParallaxProvider>{children}</ParallaxProvider>
}
