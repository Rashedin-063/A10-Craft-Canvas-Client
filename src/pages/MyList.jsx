import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import MyListCard from '../components/MyListCard';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Swal from 'sweetalert2';

const MyList = () => {
  const { user} = useAuth();
  const items = useLoaderData();

  const [myItems, setMyItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  
   const navigate = useNavigate();

  useEffect(() => {
    if (user && items) {
      const loadedItems = items.filter(
        (item) => item.user_email === user.email
      );
      setMyItems(loadedItems);
      setFilteredItems(loadedItems)
    }
  }, [user, items]);

  // handle Filter
  const handleFilter = (filter) => {
    if (filter === 'all') {
      setFilteredItems(myItems);
    } else if (filter === 'yes') {
      setFilteredItems(myItems.filter((item) => item.customization === 'Yes'));
    } else if (filter === 'no') {
      setFilteredItems(myItems.filter((item) => item.customization === 'No'));
    }
  };

  // handle update
  const handleUpdate = (
    {
      item_name,
      subcategory_name,
      image,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
    },
    id
  ) => {
    const updatedUser = {
      item_name,
      subcategory_name,
      image,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
    };

    // patch request
    fetch(`http://localhost:5000/items/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Item Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          navigate('/myList');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // handle delete
   const handleDelete = (id) => {
     console.log(id);
     Swal.fire({
       title: 'Are you sure?',
       text: "You won't be able to revert this!",
       icon: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       confirmButtonText: 'Yes, delete it!',
     }).then((result) => {
       if (result.isConfirmed) {
         fetch(`http://localhost:5000/items/${id}`, {
           method: 'DELETE',
         })
           .then((res) => res.json())
           .then((data) => {
             console.log(data);
             if (data.deletedCount > 0) {
               Swal.fire('Deleted!', 'Your Item has been deleted.', 'success');
                const remaining = filteredItems.filter(
                  (item) => item._id !== id
                );
                setFilteredItems(remaining);
             }
           });
       }
     });
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

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {filteredItems.map((item) => (
          <MyListCard
            key={item._id}
            item={item} handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};
export default MyList;
