// eslint-disable-next-line prettier/prettier
import Image, { StaticImageData } from 'next/image';

interface ImageGalleryProps {
  images: { src: StaticImageData; alt: string }[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const justifyClass =
    images.length === 5 ? 'justify-center' : 'justify-between'
  return (
    <div className="flex w-full flex-col">
      <div className={`flex flex-wrap items-center ${justifyClass} gap-y-9`}>
        {images.map((image, index) => (
          <Image
            className="max-h-96 w-full object-cover px-2 sm:w-1/2 md:w-1/3"
            key={index}
            src={image.src}
            alt={image.alt}
            placeholder="blur"
          />
        ))}
      </div>
    </div>
  )
}
