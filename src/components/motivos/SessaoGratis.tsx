import { Open_Sans as OpenSans } from 'next/font/google'
import Link from 'next/link'
const openSans = OpenSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '800'],
})

export default function SessaoGratis() {
  return (
    <section className="w-full bg-[#E1CEC3] pb-12 pt-24">
      <div className="container">
        <h2
          className={`${openSans.className} mb-2 text-xl font-bold sm:text-2xl`}
        >
          SE VOCÊ AINDA NÃO É NOSSO CLIENTE, CLIQUE AQUI E EXPERIMENTE UMA
          SESSÃO DE DEPILAÇÃO A LASER GRÁTIS!
        </h2>
        <ul className={`${openSans.className} mb-10 list-disc pl-6`}>
          <li>Válido apenas para pessoas que nunca fizeram o laser conosco.</li>
          <li>Exclusivo para regiões pequenas do corpo.</li>
        </ul>
        <Link href="https://api.whatsapp.com/send/?phone=553138912160&text=Ol%C3%A1%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+a+depila%C3%A7%C3%A3o&type=phone_number&app_absent=0">
          <button
            className={`animate-scale rounded-full bg-[#542A19] px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white sm:px-5 sm:text-xl md:px-7 md:text-2xl lg:text-2xl ${openSans.className}`}
          >
            quero a primeira sessão grátis
          </button>
        </Link>
      </div>
    </section>
  )
}
