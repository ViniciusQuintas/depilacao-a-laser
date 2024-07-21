interface Props {
  contentStyle: string
  children: React.ReactNode
}

export default function AntesDepois({ contentStyle, children }: Props) {
  return (
    <section className="w-full bg-[#E1CEC3]">
      <div className={`${contentStyle}`}>{children}</div>
    </section>
  )
}
