import './style.css'
import { Carousel } from 'react-carousel-minimal';
import banner from './../../images/banner.png';
import bannerPreto from './../../images/banner-preto.png';



export default function CreateCarousel() {

    // Banners principais da Home
    const data = [
        {
            image: banner
        },
        {
            image: banner
        },
        {
            image: banner
        },
        {
            image: banner
        },
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return (
        <section className="banner-home">
            <div className="h1-container">
                <img src={bannerPreto} alt="" />
                <div className="h1-content h-100 w-100">
                    <div>
                        <h2>Olá, o que você está buscando?</h2>
                        <h1>Criar ou migrar seu <br /> e-commerce?</h1>
                    </div>
                </div>
            </div>
            <Carousel
                data={data}
                time={2000}
                width="100%"
                height="500px"
                captionStyle={captionStyle}
                radius="0"
                slideNumber={false}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={false}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={false}
                thumbnailWidth="100px"
                style={{
                    textAlign: "center",
                    maxWidth: "100%",
                    maxHeight: "500px",
                    margin: "40px auto",
                }}
            />
        </section>
    );
}