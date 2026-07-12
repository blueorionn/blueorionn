'use client'

import { Icon } from '@iconify-icon/react'
import clsx from 'clsx'

interface AppIconProps {
  name: string
  size?: number
  className?: string
  type?: string
}

export function AppIcon({
  name,
  size = 24,
  className,
  type = 'tabler',
}: AppIconProps) {
  return (
    <Icon
      icon={`${type}:${name}`}
      width={size}
      height={size}
      className={clsx('shrink-0', className)}
    />
  )
}
