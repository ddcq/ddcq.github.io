import { cx } from 'class-variance-authority'
import React from 'react'

const cardCx =
  'perspective-1000 [&>div]:hover:rotate-y-180 [&>div]:hover:transform'

const cardInnerCx =
  'w-full h-full relative transform-style-3d transition-transform duration-1000'
const cardFaceCx = cx(
  'absolute p-1 w-full h-full backface-hidden flex items-center',
  'rounded-xl justify-center text-2xl transform'
)
export const cardFrontCx = cx('bg-primary text-primary-content')

export const cardBackCx = cx('bg-secondary text-secondary-content')
const gradientCx = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
type El = React.ReactElement
interface Props {
  front: El
  back: El
  className: string
}

const blackInner =
  'rounded-xl opacity-80 justify-center flex items-center flex-col w-full h-full'
export default function Card({ front, back, className }: Props) {
  const CardFront = React.cloneElement(front, {
    className: cx(front.props.className, blackInner),
  })
  const CardBack = React.cloneElement(back, {
    className: cx(back.props.className, blackInner),
  })
  return (
    <div className={cx(className, cardCx)}>
      <div className={cx(cardInnerCx)}>
        <div className={cx(gradientCx, cardFaceCx, 'rotate-y-0')}>
          {CardFront}
        </div>
        <div className={cx(gradientCx, cardFaceCx, 'rotate-y-180')}>
          {CardBack}
        </div>
      </div>
    </div>
  )
}
