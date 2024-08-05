import q1 from '../assets/q1.webp';

// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

/* eslint-disable react/no-unescaped-entities */
const FAQSection = () => {
  return (
    <div className='pt-12'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-center'>
        Frequently Asked Questions
      </h2>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 py-12  rounded-md'>
        <div className='flex flex-col lg:flex-row gap-6'>
          <div data-aos='zoom-in' data-aos-duration='2000'>
            <img
              className=' w-[850px] lg:h-[87vh] xl:h-[83vh] 2xl:h-[64vh] rounded-3xl'
              src={q1}
              alt='Craft Supplies'
            />
          </div>
          {/* Accordion */}
          <div data-aos='fade-left' data-aos-duration='2000'>
            {/* q&a 1 */}
            <div className='collapse collapse-arrow bg-base-300 mb-2'>
              <input type='radio' name='my-accordion-2' defaultChecked />
              <div className='collapse-title text-lg md:text-xl font-medium'>
                What types of art supplies do you offer?
              </div>
              <div className='text-sm md:text-base collapse-content'>
                <p>
                  Craft Canvas offers a wide range of art supplies, including
                  paints, brushes, sketchbooks, drawing materials, and more. We
                  provide high-quality products for artists of all levels, from
                  beginners to professionals.
                </p>
              </div>
            </div>
            {/* q&a 2 */}
            <div className='collapse collapse-arrow bg-base-300 mb-2'>
              <input type='radio' name='my-accordion-2' />
              <div className='collapse-title text-lg md:text-xl font-medium'>
                Can I get personalized recommendations for my projects?
              </div>
              <div className='text-sm md:text-base collapse-content'>
                <p>
                  Yes, our team is happy to offer personalized recommendations
                  based on your specific needs and project goals. You can
                  contact us through our website or visit our store for expert
                  advice.
                </p>
              </div>
            </div>
            {/* q&a 3 */}
            <div className='collapse collapse-arrow bg-base-300 mb-2'>
              <input type='radio' name='my-accordion-2' />
              <div className='collapse-title text-lg md:text-xl font-medium'>
                Do you offer workshops or classes?
              </div>
              <div className='text-sm md:text-base collapse-content'>
                <p>
                  Craft Canvas hosts various workshops and classes for different
                  art techniques and skill levels. Check our website or contact
                  us for the latest schedule and availability.
                </p>
              </div>
            </div>
            {/* q&a 4 */}
            <div className='collapse collapse-arrow bg-base-300 mb-2'>
              <input type='radio' name='my-accordion-2' />
              <div className='collapse-title text-lg md:text-xl font-medium'>
                How can I place an order for craft supplies?
              </div>
              <div className='text-sm md:text-base collapse-content'>
                <p>
                  You can place an order directly through our website by adding
                  items to your cart and proceeding to checkout. If you prefer,
                  you can also visit our store or call us to place an order.
                </p>
              </div>
            </div>
            {/* q&a 5 */}
            <div className='collapse collapse-arrow bg-base-300 mb-2'>
              <input type='radio' name='my-accordion-2' />
              <div className='collapse-title text-lg md:text-xl font-medium'>
                What is your return policy for art supplies?
              </div>
              <div className='text-sm md:text-base collapse-content'>
                <p>
                  We offer a return policy for art supplies within a specified
                  period, provided the items are in their original condition.
                  Please refer to our return policy on the website or contact us
                  for more details.
                </p>
              </div>
            </div>
            {/* q&a 6 */}
            <div className='collapse collapse-arrow bg-base-300 mb-2'>
              <input type='radio' name='my-accordion-2' />
              <div className='collapse-title text-lg md:text-xl font-medium'>
                Do you provide bulk discounts for schools or organizations?
              </div>
              <div className='text-sm md:text-base collapse-content'>
                <p>
                  Yes, Craft Canvas offers bulk discounts for schools,
                  organizations, and other groups. Please contact us directly to
                  discuss your needs and get a customized quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
