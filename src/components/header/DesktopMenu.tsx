import Link from 'next/link'

const links = [
  { path: 'https://www.esteticasense.com.br/', name: 'Início' },
  {
    path: 'https://www.esteticasense.com.br/dra-maria-carolina/',
    name: 'Dra. Maria Carolina',
  },
  {
    path: 'https://www.esteticasense.com.br/tratamentos/',
    name: 'Tratamentos',
  },
  { path: 'https://www.esteticasense.com.br/a-clinica/', name: 'A Clínica' },
  { path: 'https://www.esteticasense.com.br/contato/', name: 'Contato' },
]

interface Props {
  containerSyles: string
  linkStyles: string
}

export default function DesktopMenu({ containerSyles, linkStyles }: Props) {
  return (
    <ul className={`${containerSyles}`}>
      {links.map((value, index) => (
        <li key={index}>
          <Link
            href={value.path}
            className={`${linkStyles} font-sans tracking-wide`}
          >
            {value.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
