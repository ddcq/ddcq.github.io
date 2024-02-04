'use client'

import { cx } from 'class-variance-authority'
import { InView, useInView } from 'react-intersection-observer'

export default function SocietyCard({ img, society, group, period }) {
  const { inView, ref } = useInView()
  return (
    <div
      ref={ref}
      className={cx(
        'card w-96 bg-base-100 shadow-xl image-full m-4',
        'transition-all duration-500 delay-300 ease-out',
        !inView && '-translate-x-full scale-50 skew-y-12 opacity-0'
      )}
    >
      <figure>
        <img src={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{society}</h2>
        <h3 className="card-title italic">{group}</h3>
        <p>{period}</p>
      </div>
    </div>
  )
}
