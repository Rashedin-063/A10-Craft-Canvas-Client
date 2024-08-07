import PropTypes from 'prop-types';
import Button from './Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

// zod validation
const schema = z.object({
  image: z.string().url('Invalid URL').min(1, 'Image is required'),
  item_name: z.string().min(1, 'Item name is required'),
  subcategory_name: z.string().min(1, 'Subcategory name is required'),
  short_description: z.string().min(1, 'Short description is required'),
  price: z.number().min(1, 'Price is required'),
  rating: z
    .number()
    .min(0, 'Rating must be between 0 and 5')
    .max(5, 'Rating must be between 0 and 5'),
  customization: z.enum(['Yes', 'No']),
  processing_time: z.string().min(1, 'Processing time is required'),
  stockStatus: z.enum(['In Stock', 'Made to Order']),
});

const MyListCard = ({ item, handleDelete, handleUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const {
    _id,
    item_name,
    subcategory_name,
    image,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
  } = item;

  // Open modal and set form values
  const openModal = () => {
    setIsModalOpen(true);
    setValue('image', image);
    setValue('item_name', item_name);
    setValue('subcategory_name', subcategory_name);
    setValue('short_description', short_description);
    setValue('price', price);
    setValue('rating', rating);
    setValue('customization', customization);
    setValue('processing_time', processing_time);
    setValue('stockStatus', stockStatus);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data) => {
    handleUpdate(data, _id);
    closeModal(); // Close the modal after update
  };

  return (
    <div className='flex justify-center'>
      <div className='w-full overflow-hidden bg-light-cream rounded-lg shadow-lg mx-16 md:mx-8 lg:mx-0 border border-opacity-45 border-deep-plum'>
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
              Customizable ? :{' '}
              <span className='ml-[1px]'>{customization},</span>
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
            {/* update button */}
            <Button onClick={openModal} type='primary' label='Update' />

            {/* Open the modal using React state */}
            {isModalOpen && (
              <dialog open className='modal modal-middle'>
                <div className='modal-box'>
                  <h3 className='font-bold text-lg text-center mb-3'>
                    Update Your Item Info
                  </h3>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='space-y-2 w-3/4 mx-auto '
                  >
                    <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
                      <input
                        type='text'
                        {...register('image')}
                        placeholder='Image URL'
                        className='rounded-md p-2 placeholder-warm-coral border-2'
                      />
                      {errors.image && (
                        <p className='text-warm-coral ml-1'>
                          {errors.image.message}
                        </p>
                      )}

                      <input
                        type='text'
                        {...register('item_name')}
                        placeholder='Item Name'
                        className='rounded-md p-2 placeholder-warm-coral border-2'
                      />
                      {errors.item_name && (
                        <p className='text-warm-coral ml-1'>
                          {errors.item_name.message}
                        </p>
                      )}
                    </div>

                    <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
                      <input
                        type='text'
                        {...register('subcategory_name')}
                        placeholder='Subcategory Name'
                        className='rounded-md p-2 placeholder-warm-coral border-2'
                      />
                      {errors.subcategory_name && (
                        <p className='text-warm-coral ml-1'>
                          {errors.subcategory_name.message}
                        </p>
                      )}

                      <input
                        type='text'
                        {...register('short_description')}
                        placeholder='Short Description'
                        className='rounded-md p-2 placeholder-warm-coral border-2'
                      />
                      {errors.short_description && (
                        <p className='text-warm-coral ml-1'>
                          {errors.short_description.message}
                        </p>
                      )}
                    </div>

                    <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
                      <input
                        type='number'
                        step='1'
                        {...register('price', { valueAsNumber: true })}
                        placeholder='Price'
                        className='rounded-md p-2 placeholder-warm-coral border-2'
                      />
                      {errors.price && (
                        <p className='text-warm-coral ml-1'>
                          {errors.price.message}
                        </p>
                      )}

                      <input
                        type='number'
                        step='0.1'
                        max={5}
                        min={0}
                        {...register('rating', { valueAsNumber: true })}
                        placeholder='Rating'
                        className='rounded-md p-2 placeholder-warm-coral border-2'
                      />
                      {errors.rating && (
                        <p className='text-warm-coral ml-1'>
                          {errors.rating.message}
                        </p>
                      )}
                    </div>

                    <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
                      <select
                        {...register('customization')}
                        className='rounded-md p-2 placeholder-warm-coral border-2'
                      >
                        <option value=''>Customization</option>
                        <option value='Yes' style={{ color: '#FF6F69' }}>
                          Yes
                        </option>
                        <option value='No' style={{ color: '#FF6F69' }}>
                          No
                        </option>
                      </select>
                      {errors.customization && (
                        <p className='text-warm-coral ml-1'>
                          {errors.customization.message}
                        </p>
                      )}

                      <input
                        type='text'
                        {...register('processing_time')}
                        placeholder='Processing Time'
                        className='rounded-md p-2 placeholder-warm-coral border-2'
                      />
                      {errors.processing_time && (
                        <p className='text-warm-coral ml-1'>
                          {errors.processing_time.message}
                        </p>
                      )}
                    </div>
                    <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
                      <select
                        {...register('stockStatus')}
                        className='rounded-md p-2 placeholder-warm-coral border-2'
                      >
                        <option value='' style={{ color: 'green' }}>
                          Stock Status
                        </option>
                        <option value='In Stock' style={{ color: '#FF6F69' }}>
                          In Stock
                        </option>
                        <option
                          value='Made to Order'
                          style={{ color: '#FF6F69' }}
                        >
                          Made to Order
                        </option>
                      </select>
                      {errors.stockStatus && (
                        <p className='text-warm-coral ml-1'>
                          {errors.stockStatus.message}
                        </p>
                      )}
                      <button
                        type='submit'
                        className='rounded-md p-2 bg-deep-plum text-light-cream w-full'
                      >
                        Update
                      </button>
                    </div>
                  </form>
                  <div className='modal-action'>
                    <button
                      onClick={closeModal}
                      className='btn btn-sm bg-warm-coral hover:bg-deep-plum'
                    >
                      X
                    </button>
                  </div>
                </div>
              </dialog>
            )}

            {/* delete button */}
            <Button
              onClick={() => handleDelete(_id)}
              type='secondary'
              label='Delete'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

MyListCard.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
};

export default MyListCard;
