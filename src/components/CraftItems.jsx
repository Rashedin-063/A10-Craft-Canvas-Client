import Button from './Button';

const CraftItems = () => {
  return (
    <div className='text-center'>
      <h2
        data-aos='fade-up'
        data-aos-duration='2000'
        className='text-3xl md:text-4xl lg:text-5xl font-bold mt-16'
      >
        Discover Your Dream Estate
      </h2>
      <p
        data-aos='flip-right'
        data-aos-duration='3000'
        className='text-sm md:text-base mt-4 mb-12 max-w-xl mx-auto opacity-85 px-2'
      >
        Explore our premium estates, where luxury meets comfort. From beachfront
        properties to private islands, each estate is meticulously designed to
        offer unparalleled elegance and tranquility.
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
      
      </div>
      <div data-aos='zoom-in' data-aos-duration='2000'>
        <Button type='secondary' label='Show All'></Button>
      </div>
    </div>
  );
};
export default CraftItems;
