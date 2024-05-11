import { SwiperSlide, Swiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default function Carousel() {
    return (
        <div>
            <Swiper
                // slidesPerView={2}
                centeredSlides={true}
                spaceBetween={30}
                autoplay={{
                    delay: 2000
                }}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                loop={true}>
                <SwiperSlide>
                    <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/YRQKQK4/small-plant-near-various-cosmetics-bottles-1.jpg')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/b2MNCbJ/jonathan-kemper-FV5d-B0c-Gu2-M-unsplash-1.jpg')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/Yfnb92T/oleg-guijinsky-2-CRg-KZAy-PXg-unsplash-1.jpg')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/PTTcdyM/yanapi-senaud-6-HR8vpj-YUHo-unsplash-1.jpg')]">
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}