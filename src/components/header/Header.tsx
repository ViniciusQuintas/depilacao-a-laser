import DesktopMenu from '@/components/header/DesktopMenu'
import LogoComponent from '@/components/header/LogoComponent'
import MobileMenu from '@/components/header/MobileMenu'

export default function Header() {
  return (
    <header className="border-b border-solid border-white bg-[#b3b3b3] px-4 py-3">
      <nav className="container mx-auto flex items-center justify-between">
        <LogoComponent contentStyle="h-auto max-w-full min-w-[140px]" />
        <DesktopMenu
          containerSyles="hidden items-center justify-between lg:flex"
          linkStyles="rounded-md p-2 text-base text-[#E8E8E8] transition duration-500 hover:bg-white hover:text-black mx-1"
        />
        <MobileMenu containerStyle="block ml-2 lg:hidden" />
      </nav>
    </header>
  )
}
