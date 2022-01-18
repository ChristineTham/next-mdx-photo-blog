import Image from 'next/image'

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full mr-4 relative">
        <Image src={picture} sizes="100%" layout="fill" alt={name} />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar
