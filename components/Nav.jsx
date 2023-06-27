"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import dotenv from "dotenv";

dotenv.config();


const Nav = () => {
  const { data: session } = useSession();
  const authorizedEmails =  ["ignaluna98pb@gmail.com", "lualeva17@gmail.com", 
  "terriproduccionescontacto@gmail.com", "terriproducciones@gmail.com"]
  // process.env.AUTHORIZED_EMAILS.split(",")
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between px-4 fixed top-0 left-0 z-10 w-screen bg-opacity-75 backdrop-filter backdrop-blur-sm">
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logos/LogoBlanco.png'
          alt='logo'
          width={70}
          height={70}
          className='object-contain'
        />
        {/* <p className='logo_text'>Terribles Producciones</p> */}
      </Link>
      {/* Desktop Navigation */}
      <div className='md:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            {session?.user.email === "ignaluna98pb@gmail.com" &&
              <Link href='/create-show' className='black_btn'>
                Create Show
              </Link>
            }

            <button type='button' onClick={signOut} className='black_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full md:mr-4'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='md:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <img
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                {authorizedEmails.includes(session?.user.email) &&
                  <Link
                    href='/create-show'
                    className='dropdown_link'
                    onClick={() => setToggleDropdown(false)}
                  >
                    Create Show
                  </Link>
                }
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;