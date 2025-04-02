import BannerImg from '../assets/Banner.png'
import {Swiper,SwiperSlide} from 'swiper/react'
const Header = () => {
  return (
    <div className='h-screen'  style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",    
      }}>
    <Swiper>
   <SwiperSlide>
    <div>
      <div>
        <small>Luxury Hotel & Restaurant</small>
        <h2 className="text-3xl font-bold mb-4  ">Welcome to Hotel CET  <br/>    Your Perfect Escape Awaits</h2>
      </div>
    </div>
   </SwiperSlide>

   <SwiperSlide>
    <div>
      <div>
        <small>Luxury Hotel & Restaurant</small>
        <h2 className="text-3xl font-bold mb-4  ">Welcome to Hotel CET  <br/>    Your Perfect Escape Awaits</h2>
      </div>
    </div>
   </SwiperSlide>
    </Swiper>
  </div>
  )
}

export default Header
