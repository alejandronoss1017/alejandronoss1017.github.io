'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@nextui-org/react'
import Icon from '@components/Icon'

export function ThemeButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Button
        isIconOnly
        variant="flat"
        radius="full"
        onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
          <Icon name="Moon" size={16} />
        ) : (
          <Icon name="Sun" size={16} />
        )}
      </Button>
    </>
  )
}
