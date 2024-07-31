import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const Root = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto bg-cream text-charcoal-gray px-2 lg:px-4'>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Root;
