import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/logo-invertida.png'
import DesktopMenu from './DesktopMenu'
import SocialIcons from './SocialIcons'

interface Props {
  containerStyle: string
}

export default function MobileMenu({ containerStyle }: Props) {
  return (
    <ul className={`${containerStyle}`}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" aria-label="Abrir menu">
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex h-full flex-col items-center justify-between py-6">
            <figure>
              <Link href="/">
                <Image
                  className="h-auto max-w-full"
                  src={Logo}
                  alt="Logo"
                  priority={true}
                />
              </Link>
            </figure>
            <DesktopMenu
              containerSyles="flex flex-col items-center gap-y-6"
              linkStyles="text-xl tracking-widest duration-500 hover:text-zinc-500"
            />
            <SocialIcons contentStyle="flex items-center gap-x-6 sm:gap-x-8 flex-wrap sm:flex-nowrap justify-center sm:justify-items-start gap-y-3 sm:gap-y-0" />
          </div>
        </SheetContent>
      </Sheet>
    </ul>
  )
}
