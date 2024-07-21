import { Facebook, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

interface Props {
  contentStyle: string
}

export default function SocialIcons({ contentStyle }: Props) {
  return (
    <div className={`${contentStyle}`}>
      <Link href="https://www.facebook.com/clinicadramariacarolina/?locale=pt_BR">
        <Facebook />
      </Link>
      <Link href="https://www.instagram.com/sense.clinicamg/">
        <Instagram />
      </Link>
      <Link href="https://www.youtube.com/@dramariacarolina9469">
        <Youtube />
      </Link>
    </div>
  )
}
