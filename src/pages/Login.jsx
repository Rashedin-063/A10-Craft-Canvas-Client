import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import SocialLogin from '../components/SocialLogin';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
// import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';
import Button from '../components/Button';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    console.log(email, password);

    // logInUser(email, password)
    //   .then(() => {
    //     toast.success('Your login is successful');
    //   navigate(location?.state || '/');
    //   })
    //   .catch(() => {
    //     toast.error(`Your email or Password doesn't match`);
    //   });
  };

  return (
    <div>
      <Helmet>
        <title>Craft Canvas || Login</title>
      </Helmet>
      <div>
        <h2 className='text-3xl mt-5 text-center font-semibold tracking-wide'>
          Please Sign In
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-3/4 lg:w-1/2 mx-auto'
        >
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              {...register('email', { required: 'Email is required' })}
              placeholder='Email'
              className='input input-bordered'
            />
            {errors.email && (
              <p className='text-red-500 mt-2'>{errors.email.message}</p>
            )}
          </div>
          <div className='form-control relative flex flex-col mt-3'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: 'Password is required' })}
              placeholder='Password'
              autoComplete='current-password'
              className='input input-bordered'
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className='absolute top-[52px] right-8 cursor-pointer'
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className='text-red-500 mt-2'>{errors.password.message}</p>
            )}
            <label className='label'>
              <a
                href='#'
                className='label-text-alt link link-hover text-base mt-2'
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className='form-control mt-6'>
            <button
              type='submit'
              className='btn bg-warm-coral
              hover:bg-deep-plum
              hover text-xl font-semibold text-light-cream'
            >
              Sign In
            </button>
          </div>
          <SocialLogin />
        </form>
        <p className='text-center mt-8 lg:pb-[49px] p-1 w-3/4 lg:w-1/2 mx-auto rounded shadow-lg'>
          Do not have an account{' '}
          <Link className='text-blue-600 font-bold' to='/register'>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
