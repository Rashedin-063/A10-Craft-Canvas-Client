import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Menu = ({ items = [] }) => {
  console.log(items)
  
  return (
    <ul className='lg:flex lg:gap-5 space-y-4 lg:space-y-0'>
      {items.map(({ to, label }) => (
        <li key={to}>
          <NavLink
            to={to}
            className={({ isActive }) =>
              isActive
                ? 'border-2 border-blue-300 px-3 py-1 rounded text-blue-400 font-semibold'
                : 'font-semibold hover:border-b-2 border-b-blue-600'
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

Menu.propTypes = {
  items: PropTypes.array,
}

export default Menu;
