import { NavLink, useLoaderData } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import MyListCard from '../components/MyListCard';
import { RiArrowDropDownLine } from 'react-icons/ri';

const MyList = () => {
  const { user } = useAuth();
  const items = useLoaderData();

  const [myItems, setMyItems] = useState([]);
   const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (user && items) {
      const loadedItems = items.filter(
        (item) => item.user_email === user.email
      );
      setMyItems(loadedItems);
      setFilteredItems(loadedItems)
    }
  }, [user, items]);

  const handleFilter = (filter) => {
    if (filter === 'all') {
      setFilteredItems(myItems);
    } else if (filter === 'yes') {
      setFilteredItems(myItems.filter((item) => item.customization === 'Yes'));
    } else if (filter === 'no') {
      setFilteredItems(myItems.filter((item) => item.customization === 'No'));
    }
  };

  return (
    <div>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-center'>
        My Art & Craft List
      </h2>
      {/* filter */}
      <div className='flex justify-center lg:mt-8 mt-4 mx-2 lg:mx-0'>
        <details className='dropdown'>
          <summary className='m-1 text-lg font-semibold  pr-6 pl-8 -mt-3 -pb-'>
            Customization <RiArrowDropDownLine />
          </summary>
          <ul className='shadow menu dropdown-content z-[1] bg-charcoal-gray rounded-box ml-24 font-semibold py-5 px-3 space-y-2'>
            <li>
              <button
                onClick={() => handleFilter('all')}
                className='bg-warm-coral hover:bg-red-500'
              >
                All
              </button>
            </li>
            <li>
              <button
                onClick={() => handleFilter('yes')}
                className='bg-warm-coral hover:bg-red-500'
              >
                Yes
              </button>
            </li>
            <li>
              <button
                onClick={() => handleFilter('no')}
                className='bg-warm-coral hover:bg-red-500'
              >
                No
              </button>
            </li>
          </ul>
        </details>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 '>
        {filteredItems.map((item) => (
          <MyListCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default MyList;
