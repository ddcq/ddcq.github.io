'use client'

import { useInterval } from 'usehooks-ts'
const NUMBER_CLASSES = 'flex flex-col duration-700 [&>p]:transition-opacity [&>p]:duration-700'

const opacityGradient = ['opacity-100', 'opacity-60', 'opacity-40', 'opacity-20', 'opacity-10']
export default function Clock() {
  useInterval(() => {
    const d = new Date()
    const parent = document.getElementById('clock')
    const delta = Math.floor(parent.clientHeight / 10)
    function shift(col, val, nbvalues) {
      const element = parent.children.item(col) as HTMLDivElement
      element.style.transform = `translateY(-${delta * (val % nbvalues)}px)`
      const numbers = element.children
      for (let index = 0; index < numbers.length; index++) {
        const color = opacityGradient[Math.abs(index - val)]
        numbers.item(index).className = color || 'opacity-5'
      }
    }
    shift(0, Math.floor(d.getHours() / 10), 3)
    shift(1, d.getHours() % 10, 10)
    shift(3, Math.floor(d.getMinutes() / 10), 6)
    shift(4, d.getMinutes() % 10, 10)
    shift(6, Math.floor(d.getSeconds() / 10), 6)
    shift(7, d.getSeconds() % 10, 10)
  }, 1000)
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div id="clock" className="flex gap-2 text-center fluid-3xl text-slate-50 mt-vw-72">
        <div className={NUMBER_CLASSES}>
          <p>0</p>
          <p>1</p>
          <p>2</p>
        </div>
        <div className={NUMBER_CLASSES}>
          <p>0</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
        </div>
        <div>:</div>
        <div className={NUMBER_CLASSES}>
          <p>0</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
        <div className={NUMBER_CLASSES}>
          <p>0</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
        </div>
        <div>:</div>
        <div className={NUMBER_CLASSES}>
          <p>0</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
        <div className={NUMBER_CLASSES}>
          <p>0</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
        </div>
      </div>
    </div>
  )
}
