import PropTypes from 'prop-types';
import Button from './Button';


const MyListCard = ({ item, handleDelete }) => {

    const {
      _id,
      item_name,
      image,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
  } = item;
  
 
  
  return (
    <div className='flex justify-center'>
      <div className='w-full overflow-hidden bg-light-cream rounded-lg shadow-lg mx-16 md:mx-8 lg:mx-0'>
        <div className='px-4 py-2 h-20 mt-4'>
          <h1 className='text-xl lg:text-2xl text-warm-coral font-bold'>
            {item_name}
          </h1>
          <p className='mt-1 text-lg text-charcoal-gray'>{short_description}</p>
        </div>

        <img
          className='object-cover w-full h-48 mt-2 px-8 hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-out '
          src={image}
          alt={`Image of ${item_name}`}
        />

        <div className=' py-3 bg-charcoal-gray'>
          <div className='flex gap-2 justify-center'>
            <p className='text-light-cream'>
              Customizable ? : <span className='ml-[1px]'>{customization},</span>
            </p>
            <p className='text-light-cream'>
              Process Time:{' '}
              <span className=' ml-[1px]'>{processing_time} minutes</span>
            </p>
          </div>
          <div className='flex gap-3 justify-center items-center'>
            <p className='text-light-cream'>
              Price:{' '}
              <span className='text-warm-coral font-semibold text-xl ml-[1px]'>
                ${price}
              </span>
            </p>
            <p className='text-light-cream'>
              Ratings:{' '}
              <span className='text-warm-coral font-semibold text-xl ml-[1px]'>
                {rating}
              </span>
            </p>
            <p className='text-light-cream'>
              Stock:{' '}
              <span className='text-warm-coral font-semibold ml-[1px]'>
                {stockStatus}
              </span>
            </p>
          </div>

          <div className='card-actions mt-4 flex justify-center pb-1 gap-8'>
            <Button type='primary' label='Update'/>
            <Button
              onClick={() => handleDelete(_id)}
              type='secondary' label='Delete' />
          </div>
        </div>
      </div>
    </div>
  );
};

MyListCard.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
};

export default MyListCard;
