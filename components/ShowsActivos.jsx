"use client"

import Link from "next/link";


const ShowsActivos = () => {
    return (
        <div>
            <section id="slideshow">
                <div class="entire-content">
                    <div class="content-carrousel">
                        <figure class="shadow">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsMz6nOzu_U_BjdkBb5AO1kFm223F4plaD8Q&usqp=CAU' alt="imagen show 1"></img>
                        </figure>
                        <figure class="shadow"><img src="https://images.pexels.com/photos/21261/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb" /></figure>
                        <figure class="shadow"><img src="https://images.pexels.com/photos/567973/pexels-photo-567973.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" /></figure>
                        <figure class="shadow"><img src="https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" /></figure>
                        <figure class="shadow"><img src="https://images.pexels.com/photos/54630/japanese-cherry-trees-flowers-spring-japanese-flowering-cherry-54630.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" /></figure>
                        <figure class="shadow"><img src="https://images.pexels.com/photos/131046/pexels-photo-131046.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" /></figure>
                        <figure class="shadow"><img src="https://images.pexels.com/photos/302515/pexels-photo-302515.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" /></figure>
                        <figure class="shadow"><img src="https://images.pexels.com/photos/301682/pexels-photo-301682.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" /></figure>
                        <figure class="shadow"><img src="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" /></figure>
                    </div>
                </div>
            </section>
            <Link href='/create-show' className='black_btn'>
                Create Show
            </Link>
        </div>

    );
};

export default ShowsActivos;
