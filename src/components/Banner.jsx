// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import custom css
import './Banner.css';

// import banner image
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';
import banner5 from '../assets/banner5.jpg';

const Banner = () => {

  return (
    <div className='mt-2 lg:mt-6 text-justify'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={2000}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        {/* slide 1 */}
        <SwiperSlide>
          <div
            data-aos='fade-left'
            data-aos-duration='3000'
            style={{
              backgroundImage: `url(${banner1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '80vh',
              borderRadius: '1rem',
            }}
          >
            <div className='relative min-h-[80vh]'>
              <h1
                data-aos='fade-down'
                data-aos-duration='3000'
                className='text-2xl md:text-4xl lg:text-7xl text-light-cream bg-charcoal-gray bg-opacity-45 font-semibold w-2/3 p-2'
              >
                Welcome to Craft Canvas
                <span className='text-xl md:text-2xl block mt-3  pl-2 text-light-cream'>
                  Where Creativity Blossoms
                </span>
              </h1>

              <p
                data-aos='zoom-in'
                data-aos-duration='3000'
                className='text-sm md:text-base lg:text-lg text-light-cream font-medium p-3 lg:p-10 bg-charcoal-gray max-w-2xl bg-opacity-95 absolute bottom-8 lg:right-4 rounded-xl shadow-lg pl-4'
              >
                Dive into a world of artistry at Craft Canvas. From exquisite
                paintings to intricate drawings, let your imagination run wild
                and discover your creative potential with us.
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${banner2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '80vh',
              borderRadius: '1rem',
            }}
          >
            <div className='relative min-h-[80vh]'>
              <h1
                data-aos='fade-in'
                data-aos-duration='3000'
                className='text-2xl md:text-4xl lg:text-5xl font-semibold p-2 lg:p-4 text-light-cream
                bg-charcoal-gray bg-opacity-45 rounded-xl pl-4 lg:pl-2 tracking-tighter lg:tracking-normal pt-4 w-1/2'
              >
                Masterpieces Await
                <span className='text-2xl block mt-3 opacity-85'></span>
              </h1>

              <p
                data-aos='zoom-in'
                data-aos-duration='3000'
                className='text-sm  md:text-base lg:text-lg text-light-cream font-medium p-3 lg:p-10 bg-charcoal-gray max-w-2xl bg-opacity-95 absolute bottom-8 lg:right-4 rounded-xl shadow-lg pl-4'
              >
                Explore our gallery of masterpieces at Craft Canvas. Whether
                you’re looking for inspiration or ready to create, our
                collection will ignite your passion for art.
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide>
          <div
            data-aos='fade-down'
            data-aos-duration='5000'
            style={{
              backgroundImage: `url(${banner3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '80vh',
              borderRadius: '1rem',
            }}
          >
            <h1 className='text-2xl md:text-4xl lg:text-5xl text-light-cream font-semibold p-2 lg:p-4 bg-charcoal-gray bg-opacity-45 max-w-2xl rounded-xl pl-4 pt-4'>
              Artistic Expression Redefined
              <span className='text-2xl block mt-3 opacity-85'></span>
            </h1>

            <p className='text-sm md:text-base lg:text-lg text-light-cream font-medium p-3 lg:p-10 bg-charcoal-gray max-w-2xl bg-opacity-95 absolute bottom-8 lg:right-4 rounded-xl shadow-lg pl-4'>
              Immerse yourself in the world of art at Craft Canvas. Discover
              innovative techniques and redefine your artistic expression with
              our curated collections.
            </p>
          </div>
        </SwiperSlide>
        {/* slide 4 */}
        <SwiperSlide>
          <div
            data-aos='fade-down'
            data-aos-duration='6000'
            style={{
              backgroundImage: `url(${banner4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '80vh',
              borderRadius: '1rem',
            }}
          >
            <h1 className='text-2xl md:text-4xl lg:text-5xl text-light-cream font-semibold p-2 lg:p-4 bg-charcoal-gray bg-opacity-65  rounded-xl pl-4 pt-4 w-1/2'>
              Your Creative Sanctuary
              <span className='text-2xl block mt-3 opacity-85'></span>
            </h1>

            <p className='text-sm  md:text-base lg:text-lg text-light-cream font-medium p-3 lg:p-10 bg-charcoal-gray max-w-2xl bg-opacity-95 absolute bottom-8 lg:right-4 rounded-xl shadow-lg pl-4'>
              Craft Canvas is your sanctuary for creativity. From the novice to
              the experienced artist, find your place and let your creativity
              flourish.
            </p>
          </div>
        </SwiperSlide>
        {/* slide 5 */}
        <SwiperSlide>
          <div
            data-aos='fade-down'
            data-aos-duration='6000'
            style={{
              backgroundImage: `url(${banner5})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '80vh',
              borderRadius: '1rem',
            }}
          >
            <h1 className='text-2xl md:text-4xl lg:text-5xl text-light-cream font-semibold p-2 lg:p-4 bg-charcoal-gray bg-opacity-45 max-w-2xl rounded-xl pt-4'>
              Unleash Your Inner Artist
              <span className='text-2xl block mt-3 opacity-85'></span>
            </h1>

            <p className='text-sm md:text-base lg:text-lg text-light-cream font-medium p-3 lg:p-10 bg-charcoal-gray max-w-2xl bg-opacity-95 absolute bottom-8 lg:right-4 rounded-xl shadow-lg pl-4'>
              Unleash your inner artist with Craft Canvas. Our platform offers
              the resources and inspiration you need to bring your artistic
              visions to life.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
