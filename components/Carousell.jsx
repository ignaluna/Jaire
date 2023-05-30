import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Carousell = () => {
    return (
        <Carousel showThumbs={false} autoPlay>
            <div>Hola</div>
            <div>Div 2</div>
            <div>Div 3 Chau</div>
        </Carousel>
    )
}

export default Carousell
