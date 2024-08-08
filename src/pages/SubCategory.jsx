import { Link, useLoaderData, useParams } from "react-router-dom"
import Button from "../components/Button";

const SubCategory = () => {
  const items = useLoaderData();
  console.log(items);

  const { subcategory_name } = useParams();

  const filteredItems = items.filter(item => item.subcategory_name === subcategory_name)

  console.log(filteredItems)
  
  

  return (
    <div >
      <h2 className='text-center text-4xl mt-8 font-semibold'>Subcategory Info</h2>
      <div className='mt-8 md:w-3/4 mx-4 md:mx-auto rounded-xl'>
        {filteredItems.map((filteredItem) => (
          <div key={filteredItem._id}>
            <div className='flex flex-col md:flex-row bg-slate-700 shadow-xl justify-center items-center p-4 mb-4 gap-4 md:gap-0'>
              <div className="md:w-1/3">
                <figure>
                  <img src={filteredItem.image} className='h-[190px] lg:h-[200px]' alt='Movie' />
                </figure>
              </div>
              <div className=' text-light-cream ,w-3/4 md:w-2/3  ml-16 md:ml-4 '>
                <h2 className='flex items-center gap-2'>
                  Item Name :{' '}
                  <span className='text-warm-coral text-lg'>
                    {filteredItem.item_name}
                  </span>
                </h2>
                <p className='flex items-center gap-2'>
                  {' '}
                  Subcategory Name:
                  <span className='text-warm-coral text-lg'>
                    {filteredItem.subcategory_name}
                  </span>
                </p>
                <p className='flex gap-2'>
                  {' '}
                  Description:
                  <span className='text-warm-coral text-lg'>
                    {filteredItem.short_description}
                  </span>
                </p>
                <div className='flex gap-8 items-center '>
                  <p className='flex items-center gap-2'>
                    {' '}
                    Price:
                    <span className='text-warm-coral text-lg'>
                      ${filteredItem.price}
                    </span>
                  </p>
                  <p className='flex items-center gap-2'>
                    {' '}
                    Rating:
                    <span className='text-warm-coral text-lg'>
                      {filteredItem.rating}
                    </span>
                  </p>
                </div>
                <p className='flex items-center gap-2'>
                  {' '}
                  Processing Time:
                  <span className='text-warm-coral text-lg'>
                    {filteredItem.processing_time} minutes
                  </span>
                </p>

                <div className='mt-2'>
                  <Link to={`/items/${filteredItem._id}`}>
                    <Button type='primary' label='View Details' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SubCategory