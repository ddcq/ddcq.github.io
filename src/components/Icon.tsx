import { Children, cloneElement, ComponentPropsWithoutRef, ReactNode } from 'react'

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  /**
   * The svg icon that will be wrapped
   */
  children: ReactNode
}

export function Icon({
  className, children, ...others
}: IconProps) {
  const child = Children.only(children)
  console.log(child)
  return (
    cloneElement(child as React.ReactElement, {
      className,
      'aria-hidden': 'true',
      focusable: 'false',
      ...others,
    })
  )
}

Icon.displayName = 'Icon'