'use client'

import cx from '../utils/classnames'
import { useInView } from 'react-intersection-observer'

export default function Presentation() {
  const { inView, ref } = useInView({ triggerOnce: true })
  return (
    <section id="presentation">
      <div ref={ref} className="hero min-h-screen bg-cover bg-fixed bg-center bg-no-repeat shadow-lg bg-[url('/img/desktop-light.jpg')] dark:bg-[url('/img/clavier.jpg')]">
        <div className="hero-content text-left">
          <div className={cx('transition-all duration-1000 ease-out', !inView && 'translate-x-1/3 opacity-0')}>
            <p className="fluid-xl italic dark:font-thin">Bonjour, je m'appelle Denis et je suis</p>
            <h1 className="fluid-6xl font-black font-sans">Développeur Web fullstack sénior</h1>
            <p className="py-6 fluid-2xl">Passionné et curieux - Convaincu par l'Agilité</p>
          </div>
        </div>
      </div>
    </section>
  )
}
