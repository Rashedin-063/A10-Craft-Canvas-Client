import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const UseAuth = () => {
  const all = useContext(AuthContext);

  return all;
};

export default UseAuth;
