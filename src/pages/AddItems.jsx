import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

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
  user_email: z
    .string()
    .email('Invalid email')
    .min(1, 'User email is required'),
  user_name: z.string().min(1, 'User name is required'),
});


const AddItemForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: onchange
  });

  const handleAddCrafts = ({
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
    user_name,
  }) => {
    const product = {
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
      user_name,
    };
    console.log(product)
    
  };

  return (
    <div className='pb-3'>
      <h1 className='text-4xl text-center mb-4'>Add Craft Items</h1>
      <form
        onSubmit={handleSubmit(handleAddCrafts)}
        className='space-y-2 w-3/4 mx-auto '
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2'>
          <input
            type='text'
            {...register('image')}
            placeholder='Image URL'
            className='rounded-md p-2 placeholder-warm-coral border-2'
          />
          {errors.image && (
            <p className='text-warm-coral ml-1'>{errors.image.message}</p>
          )}

          <input
            type='text'
            {...register('item_name')}
            placeholder='Item Name'
            className='rounded-md p-2 placeholder-warm-coral border-2'
          />
          {errors.item_name && (
            <p className='text-warm-coral ml-1'>{errors.item_name.message}</p>
          )}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2'>
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

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2'>
          <input
            type='number'
            step='1'
            {...register('price', {valueAsNumber: true})}
            placeholder='Price'
            className='rounded-md p-2 placeholder-warm-coral border-2'
          />
          {errors.price && (
            <p className='text-warm-coral ml-1'>{errors.price.message}</p>
          )}

          <input
            type='number'
            step='1'
            max={5}
            min={0}
            {...register('rating', { valueAsNumber: true })}
            placeholder='Rating'
            className='rounded-md p-2 placeholder-warm-coral border-2'
          />
          {errors.rating && (
            <p className='text-warm-coral ml-1'>{errors.rating.message}</p>
          )}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2'>
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

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2'>
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
            <option value='Made to Order' style={{ color: '#FF6F69' }}>
              Made to Order
            </option>
          </select>
          {errors.stockStatus && (
            <p className='text-warm-coral ml-1'>{errors.stockStatus.message}</p>
          )}

          <input
            type='email'
            {...register('user_email')}
            placeholder='User Email'
            className='rounded-md p-2 placeholder-warm-coral border-2'
          />
          {errors.user_email && (
            <p className='text-warm-coral ml-1'>{errors.user_email.message}</p>
          )}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2'>
          <input
            type='text'
            {...register('user_name')}
            placeholder='User Name'
            className='rounded-md p-2 placeholder-warm-coral border-2'
          />
          {errors.user_name && (
            <p className='text-warm-coral ml-1'>{errors.user_name.message}</p>
          )}
        </div>
        <button
          type='submit'
          className='rounded-md p-2 bg-deep-plum text-light-cream'
        >
          Add Items
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
