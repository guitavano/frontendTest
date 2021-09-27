import './style.css'
import Header from './components/header/header.js'
import Newsletter from './components/newsletter/newsletter.js'
import Carousel from './components/carousel/carousel.js'
import Shelves from './components/shelves/shelves.js'
import Footer from './components/footer/footer.js'

function App() {
    return (
        <>
            <Header />
            <Carousel />
            <Shelves />
            <Newsletter />
            <Footer />
        </>
    );
}

export default App;
