import Image from "next/image";

const Loading = () => {
  return (
    <div className='w-screen flex-center'>
      <Image
        src='/assets/images/loading/aliendance.gif'
        width={100}
        height={100}
        alt='loader'
        className='object-cover'
      />
    </div>
  );
};

export default Loading;