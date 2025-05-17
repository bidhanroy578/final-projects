import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/home/01.png'
import img2 from '../../../assets/home/02.png'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.png'
import img5 from '../../../assets/home/05.png'
import img6 from '../../../assets/home/06.png'

const Slider = () => {
    return (
        <Carousel dynamicHeight={true} emulateTouch={true} swipeable={true} showArrows={true} infiniteLoop={true} showThumbs={true} showStatus={false}>
            <div>
                <img src={img1} />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src={img2} />
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src={img3} />
                {/* <p className="legend">Legend 3</p> */}
            </div>
            <div>
                <img src={img4} />
                {/* <p className="legend">Legend 4</p> */}
            </div>
            <div>
                <img src={img5} />
                {/* <p className="legend">Legend 5</p> */}
            </div>
            <div>
                <img src={img6} />
                {/* <p className="legend">Legend 6</p> */}
            </div>
        </Carousel>
    );
};

export default Slider;