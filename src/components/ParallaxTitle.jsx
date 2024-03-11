'use client'
export function ParallaxTitle({ title, subtitle }) {
  return (
    <section className="parallax-section parallax-article">
      <h3 className="fluid-4xl text-center">{title}</h3>
      <p className="fluid-3xl text-center">{subtitle}</p>
    </section>
  )
}
