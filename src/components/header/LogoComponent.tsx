import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/logo.png'

interface Props {
  contentStyle: string
}

export default function LogoComponent({ contentStyle }: Props) {
  return (
    <figure>
      <Link href="https://www.esteticasense.com.br/">
        <Image
          className={`${contentStyle}`}
          src={Logo}
          alt="Logo"
          priority={true}
        />
      </Link>
    </figure>
  )
}
