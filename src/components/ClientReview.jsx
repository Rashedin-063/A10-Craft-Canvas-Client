/* eslint-disable react/no-unescaped-entities */
import Marquee from 'react-fast-marquee';
// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import Client1 from '../assets/client1.jpg';
import Client2 from '../assets/client2.jpg';
import Client3 from '../assets/client3.jpg';
import Client4 from '../assets/client4.jpg';
import Client5 from '../assets/client5.jpg';
import Client6 from '../assets/client6.jpg';

const ClientReview = () => {
  return (
    <div data-aos='fade-left' data-aos-duration='3000' className='pt-'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-center'>
        What Our Artists Say
      </h1>
      <div className=' rounded-lg shadow-md text-light-cream font-merriweather '>
        <Marquee className='flex py-6' pauseOnHover='true'>
          {/* slide 1 */}
          <div className='p-4 w-96 bg-charcoal-gray rounded-lg shadow-xl mr-4'>
            <div className='h-[240px] p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='block w-5 h-5 text-white mb-4'
                viewBox='0 0 975.036 975.036'
              >
                <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
              </svg>
              <p className='text-sm md:text-base leading-relaxed mb-6'>
                Craft Canvas has been a wonderful platform for showcasing my
                artwork. Their support and community have truly enhanced my
                creative journey.
              </p>
              <div className='flex items-center gap-5'>
                <img
                  src={Client1}
                  alt='Artist'
                  className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                />
                <div className='text-[12px]'>
                  <p>Alice Parker</p>
                  <p>Painter</p>
                </div>
              </div>
            </div>
          </div>

          {/* slide 2 */}
          <div className='p-4 w-96 bg-charcoal-gray rounded-lg shadow-xl mr-4'>
            <div className='h-[240px] p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='block w-5 h-5 text-white mb-4'
                viewBox='0 0 975.036 975.036'
              >
                <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
              </svg>
              <p className='text-sm md:text-base leading-relaxed mb-6 text-gray-300'>
                The team at Craft Canvas provided an amazing experience for
                showcasing my artwork. Their platform is user-friendly and
                visually appealing.
              </p>
              <div className='flex items-center gap-5'>
                <img
                  src={Client2}
                  alt='Artist'
                  className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                />
                <div className='text-[12px]'>
                  <p>Ryan Miller</p>
                  <p>Illustrator</p>
                </div>
              </div>
            </div>
          </div>

          {/* slide 3 */}
          <div className='p-4 w-96 bg-charcoal-gray rounded-lg shadow-xl mr-4'>
            <div className='h-[240px] p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='block w-5 h-5 text-white mb-4'
                viewBox='0 0 975.036 975.036'
              >
                <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
              </svg>
              <p className='text-sm md:text-base leading-relaxed mb-6 text-gray-300'>
                Craft Canvas offers a unique platform for artists. The feedback
                and community engagement have been invaluable in my growth as an
                artist.
              </p>
              <div className='flex items-center gap-5'>
                <img
                  src={Client3}
                  alt='Artist'
                  className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                />
                <div className='text-[12px]'>
                  <p>Emily Johnson</p>
                  <p>Graphic Designer</p>
                </div>
              </div>
            </div>
          </div>

          {/* slide 4 */}
          <div className='p-4 w-96 bg-charcoal-gray rounded-lg shadow-xl mr-4'>
            <div className='h-[240px] p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='block w-5 h-5 text-white mb-4'
                viewBox='0 0 975.036 975.036'
              >
                <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
              </svg>
              <p className='text-sm md:text-base leading-relaxed mb-6 text-gray-300'>
                The platform has been excellent for me as an artist. The
                community is supportive and the exposure is invaluable.
              </p>
              <div className='flex items-center gap-5'>
                <img
                  src={Client4}
                  alt='Artist'
                  className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                />
                <div className='text-[12px]'>
                  <p>David Smith</p>
                  <p>Sculptor</p>
                </div>
              </div>
            </div>
          </div>

          {/* slide 5 */}
          <div className='p-4 w-96 bg-charcoal-gray rounded-lg shadow-xl mr-4'>
            <div className='h-[240px] p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='block w-5 h-5 text-white mb-4'
                viewBox='0 0 975.036 975.036'
              >
                <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
              </svg>
              <p className='text-sm md:text-base leading-relaxed mb-6 text-gray-300'>
                Craft Canvas provides a fantastic platform for showcasing and
                selling art. Their tools and resources are top-notch.
              </p>
              <div className='flex items-center gap-5'>
                <img
                  src={Client5}
                  alt='Artist'
                  className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                />
                <div className='text-[12px]'>
                  <p>Sarah Lee</p>
                  <p>Digital Artist</p>
                </div>
              </div>
            </div>
          </div>

          {/* slide 6 */}
          <div className='p-4 w-96 bg-charcoal-gray rounded-lg shadow-xl mr-4'>
            <div className='h-[240px] p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='block w-5 h-5 text-white mb-4'
                viewBox='0 0 975.036 975.036'
              >
                <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
              </svg>
              <p className='text-sm md:text-base leading-relaxed mb-6 text-gray-300'>
                Craft Canvas has truly transformed my art career. The platform
                is user-friendly and offers fantastic exposure to a broader
                audience.
              </p>
              <div className='flex items-center gap-5'>
                <img
                  src={Client6}
                  alt='Artist'
                  className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                />
                <div className='text-[12px]'>
                  <p>Alex Turner</p>
                  <p>Contemporary Artist</p>
                </div>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ClientReview;
