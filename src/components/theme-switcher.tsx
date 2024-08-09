'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Switch } from '@nextui-org/react'
import Icon from '@components/Icon'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        startContent={<Icon name="Moon" />}
        endContent={<Icon name="Sun" />}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <Icon name="Sun" size={16} className={className} />
          ) : (
            <Icon name="Moon" size={16} className={className} />
          )
        }
      />
    </>
  )
}
