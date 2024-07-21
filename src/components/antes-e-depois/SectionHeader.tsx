import { Open_Sans as OpenSans } from 'next/font/google'

const openSans = OpenSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '800'],
})

interface SectionHeaderProps {
  title?: string
  subtitle?: string
  description?: string
  style?: string
}

export default function SectionHeader({
  title = 'Antes e Depois',
  subtitle,
  description,
  style,
}: SectionHeaderProps) {
  return (
    <div className={style}>
      <h1 className="mb-5 text-2xl font-thin tracking-wider sm:text-4xl lg:text-7xl">
        {title}
      </h1>
      {subtitle && (
        <h2 className={`mb-10 text-xl font-thin ${openSans.className}`}>
          {subtitle}
        </h2>
      )}
      {description && (
        <h3 className="mb-3 text-xl font-semibold text-primary">
          {description}
        </h3>
      )}
    </div>
  )
}
