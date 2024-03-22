import { PropsWithChildren } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import cx from '@/utils/classnames'

export function Image({ url }: { url: string }) {
  return <ParallaxBanner layers={[{ image: url, speed: -50 }]} className="h-screen" />
}

export function Text({ children, title, className }: PropsWithChildren<{ title?: string; className?: string }>) {
  return (
    <Parallax
      translateY={['0%', '-100%']}
      className={cx('absolute bg-base-200 z-20 w-screen fluid-md flex flex-col gap-vw-4-min@sm-max@lg opacity-90 p-vw-16-min@sm-max@xl', className)}
    >
      {title && <h2 className="fluid-3xl">{title}</h2>}
      {children}
    </Parallax>
  )
}
