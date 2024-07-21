'use client'
import { LazyMotion, domAnimation, m } from 'framer-motion'

import { Open_Sans as OpenSans } from 'next/font/google'

const openSans = OpenSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '800'],
})

interface Depoimento {
  texto: string
}

interface Props {
  contentStyle: string
  depoimentos: Depoimento[]
}

export default function Depoimento({ contentStyle, depoimentos }: Props) {
  return (
    <section className="w-full bg-[#E1CEC3]">
      <div className={`${contentStyle}`}>
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
            className="mb-12 flex flex-col items-center justify-center lg:mr-12 lg:mt-0"
          >
            <h1 className="mb-14 text-5xl font-thin uppercase tracking-wider xsm:text-7xl sm:text-8xl">
              Depoi
              <span className="ml-8 block">mentos</span>
            </h1>
            <p
              className={`max-w-[550px] text-xl font-medium ${openSans.className}`}
            >
              Descubra as experiências e opiniões de nossos pacientes sobre os
              serviços e atendimentos da nossa clínica.
            </p>
          </m.div>
        </LazyMotion>
        <div className="flex flex-col items-center justify-center">
          {depoimentos.map((depoimento, index) => (
            <LazyMotion features={domAnimation} key={index}>
              <m.div
                initial={{ opacity: 0 }}
                transition={{ duration: index * 1.2 }}
                whileInView={{ opacity: 1 }}
                className={`relative my-3 inline-block max-w-[700px] rounded-[50px] bg-[#F4EFDF] px-10 py-4 text-black md:text-lg ${openSans.className}`}
              >
                {depoimento.texto}
              </m.div>
            </LazyMotion>
          ))}
        </div>
      </div>
    </section>
  )
}
