import PropTypes from 'prop-types';

const Button = ({label, type, onClick}) => {
  let buttonClass =
    'px-4 py-2 rounded-lg text-white -mt-2 md:-mt-0 font-medium shadow-md';

   if (type === 'primary') {
     buttonClass += ' bg-blue-600 hover:bg-blue-800';
   } else if (type === 'secondary') {
     buttonClass += ' bg-yellow-700 hover:bg-yellow-800';
  }

 return (
   <button className={buttonClass} onClick={onClick}>
     {label}
   </button>
 );
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;