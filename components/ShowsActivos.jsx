"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";


const ShowsActivos = () => {
    const { data: session } = useSession();

    return (
        <div>
            <section id="slideshow">
                <div class="entire-content">
                    <div class="content-carrousel">
                        <figure class="shadow"><img src='/assets/images/artist/artist1.jpg' alt="imagen show 1"></img></figure>
                        <figure class="shadow"><img src='/assets/images/artist/artist2.jpg' alt="imagen show 2"></img></figure>
                        <figure class="shadow"><img src='/assets/images/artist/artist3.jpg' alt="imagen show 3"></img></figure>
                        <figure class="shadow"><img src='/assets/images/artist/artist4.jpg' alt="imagen show 4"></img></figure>
                        <figure class="shadow"><img src='/assets/images/artist/artist5.jpeg' alt="imagen show 5"></img></figure>
                        <figure class="shadow"><img src='/assets/images/artist/artist6.png' alt="imagen show 6"></img></figure>
                        <figure class="shadow"><img src='/assets/images/artist/artist7.jpg' alt="imagen show 7"></img></figure>
                        <figure class="shadow"><img src='/assets/images/artist/artist8.jpg' alt="imagen show 8"></img></figure>
                        <figure class="shadow"><img src='/assets/images/artist/artist9.jpg' alt="imagen show 9"></img></figure>
                        </div>
                </div>
            </section>
            { session?.user.email === "ignaluna98pb@gmail.com" && 
            <Link href='/create-show' className='black_btn'>
              Create Show
            </Link>
            }
        </div>

    );
};

export default ShowsActivos;
