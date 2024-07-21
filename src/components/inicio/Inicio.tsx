import LogoComponent from '@/components/header/LogoComponent'
import DesktopMenu from '@/components/header/DesktopMenu'
import MobileMenu from '@/components/header/MobileMenu'
import bg from '@/assets/bg.png'
import { Open_Sans as OpenSans } from 'next/font/google'
const openSans = OpenSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '800'],
})
export default function Inicio() {
  return (
    <section
      className="min-h-[100vh] w-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container mx-auto flex h-screen flex-col">
        <header className="mt-2 py-3">
          <nav className="container mx-auto flex items-center justify-between">
            <LogoComponent contentStyle="h-auto max-w-full min-w-[140px]" />
            <DesktopMenu
              containerSyles="hidden items-center justify-between lg:flex"
              linkStyles="rounded-md p-2 text-base text-[#E8E8E8] transition duration-500 hover:text-black hover:bg-[#E8E8E8] mx-1"
            />
            <MobileMenu containerStyle="block ml-2 lg:hidden" />
          </nav>
        </header>
        <div className="flex w-full flex-grow flex-col items-center justify-center text-center text-white">
          <h2
            className={`${openSans.className} text-2xl font-medium uppercase tracking-wider xsm:text-3xl sm:text-5xl`}
          >
            o melhor laser do
          </h2>
          <h2
            className={`${openSans.className} text-2xl font-medium uppercase tracking-wider xsm:text-3xl sm:text-5xl`}
          >
            mundo para
          </h2>
          <h1
            className={` mb-5 mt-2 text-6xl font-extrabold uppercase tracking-wider xsm:text-7xl md:mb-14 md:mt-6 md:text-[11rem] lg:text-[15rem]`}
          >
            depilação
          </h1>
          <h2
            className={`${openSans.className} text-2xl font-medium uppercase tracking-wider xsm:text-3xl sm:text-5xl`}
          >
            avaliação gratuita
          </h2>
        </div>
      </div>
    </section>
  )
}
