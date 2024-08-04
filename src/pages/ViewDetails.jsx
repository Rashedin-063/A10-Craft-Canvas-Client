import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom'

const ViewDetails = () => {
  const item = useLoaderData();

  const { _id, image,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
    user_email,
    user_name, } = item;
  
  
  return (
    <div className='text-center mt-4'>
      <Helmet>
        <title>Details || {_id}</title>
      </Helmet>
      <div className='p-5 mx-auto sm:p-10 md:p-16 bg-charcoal-gray text-light-cream w-3/4 lg:w-full'>
        <div className='flex flex-col max-w-3xl mx-auto overflow-hidden rounded items-center justify-center'>
          <img
            src={image}
            alt={`Image of ${item_name}`}
            className='w-full h-60 sm:h-96 bg-gray-500'
          />
          <div className='p-6 pb-12 m-4 mx-auto -mt-16 space-y-3 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-charcoal-gray shadow-2xl'>
            <div className='space-y-2'>
              <a
                rel='noopener noreferrer'
                href='#'
                className='inline-block text-2xl font-semibold sm:text-3xl text-warm-coral'
              >
                {item_name}
              </a>
              <a className='block'>{subcategory_name}</a>
              <p className='text-xs'>
                Posted By{' '}
                <a
                  rel='noopener noreferrer'
                  href={user_email}
                  className=' text-blue-500 hover:underline ml-1 font-semibold text-base'
                  title={user_email}
                  target='_blank'
                >
                  {user_name}
                </a>
              </p>
            </div>
            <div className='text-light-cream'>
              <p>{short_description}</p>
            </div>
            <div className='flex gap-4 justify-center'>
              <p className='text-base'>
                Customizable ? :{' '}
                <span className='ml-[1px]'>{customization}</span>
              </p>
              <p className='text-base'>
                Processing Time:{' '}
                <span className=' ml-[1px]'>{processing_time} minutes</span>
              </p>
            </div>
            <div className='flex gap-4 justify-center items-center'>
              <p className='text-base'>
                Price:{' '}
                <span className='text-warm-coral font-semibold text-xl ml-[1px]'>
                  ${price}
                </span>
              </p>
              <p className='text-base'>
                Ratings:{' '}
                <span className='text-warm-coral font-semibold text-xl ml-[1px]'>
                  {rating}
                </span>
              </p>
              <p className='text-base'>
                Stock:{' '}
                <span className='text-warm-coral font-semibold ml-[1px]'>
                  {stockStatus}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ViewDetails