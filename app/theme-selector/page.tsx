'use client'
import { useTheme } from '@/hooks/useTheme'
import daisyThemes from 'daisyui/src/theming/themes'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

export default function ThemeSelector() {
  const router = useRouter()
  const [, saveTheme] = useTheme()
  const themes = useMemo(() => Object.entries(Object.groupBy(Object.entries(daisyThemes), ([_id, theme]) => theme['color-scheme'])), [])
  return (
    <div className="flex flex-col w-screen gap-vw-10-min@sm-max@2xl p-vw-7">
      {themes.map(([mode, themesByMode]) => [
        <h1 className="fluid-xl">Themes {mode}</h1>,
        <div className="rounded-box grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {themesByMode.map(([id]) => (
            <div
              key={id}
              data-theme={id}
              className="bg-base-100 text-base-content w-full cursor-pointer"
              onClick={() => {
                saveTheme(id)
                router.back()
              }}
            >
              <div className="grid grid-cols-5 grid-rows-3">
                <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div> <div className="bg-base-300 col-start-1 row-start-3"></div>{' '}
                <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                  <div className="font-bold">{id}</div>
                  <div className="flex flex-wrap gap-1">
                    <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                      <div className="text-primary-content text-sm font-bold">A</div>
                    </div>
                    <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                      <div className="text-secondary-content text-sm font-bold">A</div>
                    </div>
                    <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                      <div className="text-accent-content text-sm font-bold">A</div>
                    </div>
                    <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                      <div className="text-neutral-content text-sm font-bold">A</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>,
      ])}
    </div>
  )
}
