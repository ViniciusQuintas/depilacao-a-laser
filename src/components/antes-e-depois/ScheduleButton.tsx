import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface SectionHeaderProps {
  title?: string
  buttonText?: string
}

export default function ScheduleButton({
  buttonText,
  title,
}: SectionHeaderProps) {
  return (
    <div className="mb-4 flex w-full flex-col items-center justify-center pt-16">
      <h3 className="mb-8 text-2xl">{title}</h3>
      <Link href="https://contate.me/clinicasense" target="_blank">
        <Button className="w-full text-wrap rounded-full px-3 py-6 text-xs font-bold uppercase tracking-widest xsm:w-auto xsm:px-9 xsm:text-xs sm:text-base">
          {buttonText}
        </Button>
      </Link>
    </div>
  )
}
