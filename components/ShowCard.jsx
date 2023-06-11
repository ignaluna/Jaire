"use client"
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const ShowCard = ({ show, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();

  return (
    <article className="flex justify-center align-center h-full py-9">
        <div className="flex flex-col justify-between items-center mr-2 border border-green-900 px-4 rounded-lg bg-green-900 bg-opacity-30">
          <Link className="flex flex-col items-center w-full" href={`https://www.google.com/maps/search/?query=${show.location}`} target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/icons/ubic2.svg"
              alt="Ubicación"
              width={50}
              height={50}
            />
            <div className="border-b flex-grow w-full mb-5 p-4"></div>
            <p className="text-white">Ubicación</p>
          </Link>
          <Link className="flex flex-col items-center w-full" href={show.eventLink} target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/icons/link3.svg"
              alt="Ubicación"
              width={50}
              height={50}
            />
            <div className="border-b border-green-900 flex-grow w-full my-5"></div>
            <p className="text-white">Link</p>
          </Link>
          <div className="flex flex-col items-center w-full">
            <Image
              src="/assets/icons/link2.svg"
              alt="calend"
              width={50}
              height={50}
            />
            <div className="border-b border-green-900 flex-grow w-full my-5"></div>
            <p className="text-white">{show.date}</p>
          </div>
        </div>
        <img
          src={show.flyer}
          alt='show_flyer'
          width={500}
          height={700}
          className="rounded-lg h-auto transition duration-500 ease-in-out border border-green-900"/>
    </article >




    // {session?.user.id === show.creator._id && pathName === "/profile" && (
    //   <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
    //     <p
    //       className='font-inter text-sm green_gradient cursor-pointer'
    //       onClick={handleEdit}
    //     >
    //       Edit
    //     </p>
    //     <p
    //       className='font-inter text-sm orange_gradient cursor-pointer'
    //       onClick={handleDelete}
    //     >
    //       Delete
    //     </p>
    //   </div>
    // )}

  );
};

export default ShowCard;
