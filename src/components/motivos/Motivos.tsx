'use client'
import { Open_Sans as OpenSans } from 'next/font/google'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import Link from 'next/link'
const openSans = OpenSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '800'],
})

export default function Motivos() {
  return (
    <LazyMotion features={domAnimation}>
      <section className=" w-full bg-[#E1CEC3] py-24">
        <m.div
          className="container mx-auto flex flex-col"
          initial={{ opacity: 0, y: -40 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="mb-10">
            <h2 className="text-2xl font-thin tracking-wider sm:text-4xl lg:text-7xl">
              ENTRE TANTAS OPORTUNIDADES DE PILAÇÃO, POR QUE NOS ESCOLHER ?
            </h2>
          </div>
          <div
            className={`mb-8 flex list-none flex-col gap-y-4 ${openSans.className}`}
          >
            <li className="text-xl ">
              <span className="mr-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#542A19]  text-white">
                1
              </span>
              Não somos uma franquia que vende infinitas sessões;
            </li>
            <li className="text-xl">
              <span className="mr-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#542A19]  text-white">
                2
              </span>
              Vendemos e entregamos resultados;
            </li>
            <li className="text-xl">
              <span className="mr-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#542A19]  text-white">
                3
              </span>
              Nosso Laser não é luz pulsada;
            </li>
            <li className="text-xl">
              <span className="mr-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#542A19] text-white">
                4
              </span>
              Duetto MT Evo é a única tecnologia no mundo capaz de emitir dois
              feixes de laser de diferentes emissores (e diferentes comprimentos
              de onda) ao mesmo tempo, na mesma área. É uma tecnologia
              patenteada.
            </li>
          </div>
          <div>
            <Link href="https://api.whatsapp.com/send/?phone=553138912160&text=Ol%C3%A1%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+a+depila%C3%A7%C3%A3o&type=phone_number&app_absent=0">
              <button
                className={`animate-scale rounded-full bg-[#542A19] px-4 py-3 text-sm font-semibold tracking-wide text-white sm:px-6 sm:text-xl md:px-8 md:text-2xl lg:text-3xl ${openSans.className}`}
              >
                QUERO FAZER UMA AVALIAÇÃO GRÁTIS
              </button>
            </Link>
          </div>
        </m.div>
      </section>
    </LazyMotion>
  )
}
