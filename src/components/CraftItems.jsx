import PropTypes from 'prop-types';
import Button from './Button';
import CraftCard from './CraftCard';
import { Link } from 'react-router-dom';

const CraftItems = ({ items }) => {
  console.log(items);

  return (
    <div className='text-center'>
      <h2
        data-aos='fade-up'
        data-aos-duration='2000'
        className='text-3xl md:text-4xl lg:text-5xl font-bold mt-16'
      >
        Unique Creations to Inspire Your Imagination
      </h2>
      <p
        data-aos='zoom-in'
        data-aos-duration='2000'
        className='text-base md:text-lg mt-4 mb-12 max-w-xl mx-auto opacity-85 px-2'
      >
        Discover one-of-a-kind craft creations that add a touch of artistic
        charm to any space. Each item is crafted to ignite your creativity
      </p>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
        {items.map((item) => (
          <CraftCard key={item._id} item={item} />
        ))}
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'></div>
      <div data-aos='zoom-in' data-aos-duration='2000'>
        <Link to='/allItems'>
          <Button type='primary' label='All Items'></Button>
        </Link>
      </div>
    </div>
  );
};

CraftItems.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CraftItems;
