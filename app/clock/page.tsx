'use client'

import { useTheme } from '@/hooks/useTheme'
import { useEffect } from 'react'
import { useInterval } from 'usehooks-ts'
const NUMBER_CLASSES = 'flex flex-col duration-700 [&>p]:transition-opacity [&>p]:duration-700 h-full'
const opacityGradient = ['opacity-100', 'opacity-60', 'opacity-40', 'opacity-20', 'opacity-10']

function times(length: number) {
  return (
    <div className={NUMBER_CLASSES}>
      {Array.from({ length }, (_v, n) => (
        <p key={n}>{n}</p>
      ))}
    </div>
  )
}

export default function Clock() {
  useTheme()
  useEffect(() => shiftAllNumbers(true))
  useInterval(shiftAllNumbers, 1000)
  return (
    <div className="w-screen h-screen flex items-center justify-center transform">
      <div id="clock" className="flex gap-2 text-center fluid-3xl mt-vw-72">
        {times(3)}
        {times(10)}
        <div>:</div>
        {times(6)}
        {times(10)}
        <div>:</div>
        {times(6)}
        {times(10)}
      </div>
    </div>
  )
}

function shiftAllNumbers(firstLoad?: boolean): void {
  const d = new Date()
  const parent = document.getElementById('clock')
  const delta = Math.floor(parent.clientHeight / 10) * 1.01
  function shift([col, val]: [number, number]) {
    const element = parent.children.item(col) as HTMLDivElement
    element.style.transform = `translateY(-${delta * val}px)`
    const numbers = element.children
    for (let index = 0; index < numbers.length; index++) {
      const color = opacityGradient[Math.abs(index - val)]
      numbers.item(index).className = color || 'opacity-5'
    }
  }
  const seconds = d.getSeconds()
  const minutes = d.getMinutes()
  const hours = d.getHours()
  const args: [number, number][] = [
    [7, seconds % 10],
    [6, ~~(seconds / 10)],
    [4, minutes % 10],
    [3, ~~(minutes / 10)],
    [1, hours % 10],
    [0, ~~(hours / 10)],
  ]
  if (firstLoad) {
    args.forEach(shift)
    return
  }
  for (const decimal of args) {
    shift(decimal)
    if (decimal[1]) break
  }
}
