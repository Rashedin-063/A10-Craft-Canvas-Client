import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Button from './Button';

const CraftCard = ({ item }) => {
  const {
    _id,
    image,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
    user_email,
    user_name, } = item
  
  console.log(
    _id,
    image,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
    user_email,
    user_name
  );
  
  
  return (
    <div>
      <div
        data-aos='zoom-in'
        data-aos-duration='3000'
        className='card w-full bg-charcoal-gray shadow-xl py-5 max-h-xl max-h-2xl text-light-cream '
      >
        <figure className='max-w-72 h-40 mx-auto '>
          <img src={image} alt='Album' className='rounded-xl' />
        </figure>
        <div className='card-body items-center text-center -mt-4'>
          <h2 className='text-2xl font-semibold '>{item_name}</h2>
          <h3 className='text-lg font-medium opacity-95'>{subcategory_name}</h3>

          <p className='text-sm opacity-95 tracking-wider leading-relaxed font-merriweather'>
            {short_description}
          </p>
          <div className='flex gap-8 md:gap-4'>
            <p className='text-xl bg-warm-coral px-2 py-1 rounded-md shadow-xl  my-2'>
              <span> Rating:</span> {rating}
            </p>
            <p className='text-xl bg-warm-coral px-2 py-1 rounded-md shadow-xl my-2 '>
              <span> Price:</span> ${price}
            </p>
          </div>
          <div className='card-actions -mb-4 mt-4'>
            <Link to={`/items/${_id}`}>
              <Button type='secondary' label='View Details' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
CraftCard.propTypes = {
  item: PropTypes.object.isRequired,
}
export default CraftCard