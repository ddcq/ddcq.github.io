import { PropsWithChildren } from 'react'
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import cx from '@/utils/classnames'

export function Image({ url }: { url: string }) {
  return (
    <ParallaxBanner
      layers={[
        {
          image: url,
          speed: -50,
          expanded: false,
          scale: [0.9, 1.6],
        },
      ]}
      className="min-h-screen"
    >
      <img src={url} className="w-full h-full" />
    </ParallaxBanner>
  )
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

export function Banner({ children, image }: PropsWithChildren<{ image: string }>) {
  return (
    <ParallaxBanner className="h-screen">
      <ParallaxBannerLayer image={image} />
      <div className="absolute inset-0 flex items-center">
        <h1 className="fluid-8xl text-base font-thin w-screen bg-base-200/50 text-center">{children}</h1>
      </div>
    </ParallaxBanner>
  )
}
