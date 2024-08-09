import { icons } from 'lucide-react'
import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof icons
  color?: string
  size?: number
}

export default function Icon({ name, color, size, ...props }: IconProps) {
  const LucideIcon = icons[name]

  return <LucideIcon color={color} size={size} {...props} />
}
