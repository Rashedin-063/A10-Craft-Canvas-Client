import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const SubcategorySection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://craft-canvas-server-hazel.vercel.app/category')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <Link className='cursor-pointer'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold py-12 text-center'>
        Subcategory Section
      </h2>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 items-stretch gap-y-8 lg:gap-y-12'>
        {categories.map((category, idx) => (
          <Link to={`/${category.subcategory_name}`} key={category._id}>
            <Fade
              cascade={false}
              damping={0.3}
              triggerOnce={true}
              delay={idx * 200}
              direction='up'
              duration={2000}
            >
              <div className='flex flex-col items-center justify-center w-full max-w-lg mx-auto'>
                <div
                  className='w-3/4 h-48 bg-gray-300 bg-center bg-cover rounded-lg shadow-md '
                  // style={{backgroundImage: `url${category.image}`}}
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>

                <div className='w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800'>
                  <h3 className='py-2 tracking-wide text-center text-light-cream'>
                    Subcategory Name:
                  </h3>

                  <div className='px-3 py-2 bg-gray-600 dark:bg-gray-700 text-center'>
                    <h3 className='text-warm-coral text-lg'>
                      {category.subcategory_name}
                    </h3>
                  </div>
                </div>
              </div>
            </Fade>
          </Link>
        ))}
      </div>
    </Link>
  );
};
export default SubcategorySection;
