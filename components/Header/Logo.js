import Image from 'next/image'

const style = {
  wrapper: `flex cursor-pointer items-center space-x-3`,
  svgText: `fill-[#04111D] font-bold pt-1 text-gray-900 dark:text-gray-900`,
}

const Logo = () => {
  return (
    <div className={style.wrapper}>
      <Image src='/logo.svg' width={40} height={40} />
      <div className={style.svgText}>DegenMugen</div>
    </div>
  )
}

export default Logo
