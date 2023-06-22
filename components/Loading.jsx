import Image from 'next/image'

const Loading = () => {
  return (
    <div className='flex justifi-center items-center'>
        <Image
        src="/assets/images/loading/aliendance.gif"
        width={200}
        height={200}
        alt="loading eventos terribles"/>
    </div>
  )
}

export default Loading;