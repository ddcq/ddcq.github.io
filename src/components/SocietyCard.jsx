'use client'

import { cx } from 'class-variance-authority'
import { useInView } from 'react-intersection-observer'

export default function SocietyCard({ img, society, group, period }) {
  const { inView, ref } = useInView({ triggerOnce: true })
  console.log("inview", inView, society)
  return (
    <div
      ref={ref}
      className={cx(
        'card w-96 bg-base-100 shadow-xl image-full m-4',
        'transition-all duration-500 delay-300 ease-out',
        !inView && 'translate-y-full scale-50 skew-x-12 opacity-0'
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
