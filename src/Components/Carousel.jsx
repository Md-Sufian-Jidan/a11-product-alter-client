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
           <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.imgur.com/0oaf5aH.jpeg')]">
           </div>
       </SwiperSlide>
       <SwiperSlide>
           <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.imgur.com/Ps080li.jpeg')]">
           </div>
       </SwiperSlide>
       <SwiperSlide>
           <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.imgur.com/eoqrvLO.jpeg')]">
           </div>
       </SwiperSlide>
       <SwiperSlide>
           <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.imgur.com/FFUs8R2.jpeg')]">
           </div>
       </SwiperSlide>
       <SwiperSlide>
           <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.imgur.com/NAvqMPI.jpeg')]">
           </div>
       </SwiperSlide>
       <SwiperSlide>
           <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://i.imgur.com/QEkmEV2.jpeg')]">
           </div>
       </SwiperSlide>
   </Swiper>
   
</div>
  )
}