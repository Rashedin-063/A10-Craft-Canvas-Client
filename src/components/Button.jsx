import PropTypes from 'prop-types';

const Button = ({label, type, onClick}) => {
  let buttonClass =
    'px-2 py-1 md:px-4 md:py-2 rounded-lg hover:rounded-full text-white -mt-2 md:-mt-0 font-medium shadow-md';

   if (type === 'primary') {
     buttonClass += ' bg-warm-coral hover:bg-deep-plum';
   } else if (type === 'secondary') {
     buttonClass += ' bg-deep-plum hover:bg-warm-coral';
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