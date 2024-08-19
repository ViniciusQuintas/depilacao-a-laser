import AntesDepois from '@/components/antes-e-depois/AntesDepois'

import SectionHeader from '@/components/antes-e-depois/SectionHeader'
import Inicio from '@/components/inicio/Inicio'
import Motivos from '@/components/motivos/Motivos'
import Video from '@/components/section_video/Video'
import Depilacao1Antes from '@/assets/depilicao-1-antes.webp'
import Depilacao1Depois from '@/assets/depilacao-1-depois.webp'
import Depilacao2Antes from '@/assets/depilicao-2-antes.webp'
import Depilacao2Depois from '@/assets/depilcacao-2-depois.webp'
import Image from 'next/image'
import Link from 'next/link'
import { Open_Sans as OpenSans } from 'next/font/google'
import Depoimento from '@/components/depoimentos/Depoimento'
import SessaoGratis from '@/components/motivos/SessaoGratis'

const openSans = OpenSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '800'],
})

const depoimentos = [
  {
    texto:
      '"Eu tinha vergonha de usar blusas sem manga e levantar os braços. Todo mundo olhava minha axila, que já estava marcada com machucados e até escura, por ficar passando gilete sempre. Após finalizar o tratamento, me libertei! Estou muito mais segura e feliz."',
  },
  {
    texto:
      '"Sempre sofri com lâminas e nunca gostei da depilação com a cera. Além da dor, todo o mês era a mesma coisa. Vi um anúncio da Clínica e fiz uma avaliação. No mesmo dia comecei meu tratamento e sigo amando os resultados."',
  },
  {
    texto:
      '"Ouvi de um amigo sobre a possibilidade de não precisar mais fazer a barba a cada três dias. Até hoje me pergunto por que não comecei a fazer este laser antes. Agora sempre estou com a barba no formato que gosto, otimizo meu tempo e evito machucar o rosto com a lâmina. Já estou planejando começar outras áreas!"',
  },
]

export default function Home() {
  return (
    <main className="overflow-hidden lg:max-w-full">
      <Inicio />
      <Video />
      <SessaoGratis />
      <Motivos />
      <AntesDepois contentStyle="container mx-auto flex-col pt-12 pb-14">
        <SectionHeader
          subtitle="Acompanhe resultados que trouxeram satisfação, segurança e liberdade para nossos pacientes, utlizando a tecnologia mais completa do mundo:
"
        />
        <div className="flex w-full flex-col">
          <div className="flex flex-wrap items-center justify-around gap-y-9">
            <Image
              className="my-4 max-h-96 w-full object-cover px-2 sm:w-1/2 md:w-1/3"
              src={Depilacao1Antes}
              alt="depilacao antes 1"
            />
            <Image
              className="my-4 max-h-96 w-full object-cover px-2 sm:w-1/2 md:w-1/3"
              src={Depilacao1Depois}
              alt="depilacao antes 2"
            />
          </div>
          <div className="flex flex-wrap items-center justify-around gap-y-9">
            <Image
              className="my-4 max-h-96 w-full object-cover px-2 sm:w-1/2 md:w-1/3"
              src={Depilacao2Antes}
              alt="depilacao antes 1"
            />
            <Image
              className="my-4 max-h-96 w-full object-cover px-2 sm:w-1/2 md:w-1/3"
              src={Depilacao2Depois}
              alt="depilacao antes 2"
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Link href="https://api.whatsapp.com/send/?phone=553138912160&text=Ol%C3%A1%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+a+depila%C3%A7%C3%A3o&type=phone_number&app_absent=0">
            <button
              className={`mt-14 animate-scale rounded-full bg-[#542A19] px-4 py-3 text-sm font-semibold tracking-wide text-white sm:px-6 sm:text-xl md:px-8 md:text-2xl lg:text-3xl ${openSans.className}`}
            >
              QUERO FAZER UMA AVALIAÇÃO GRÁTIS
            </button>
          </Link>
        </div>
      </AntesDepois>
      <Depoimento
        contentStyle="container mx-auto flex w-full flex-col items-center justify-center py-6 pb-32 lg:flex-row"
        depoimentos={depoimentos}
      />
    </main>
  )
}
