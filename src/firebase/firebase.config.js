// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCDsDI6oHPSxksUnyWOlZYwe3rEVd8RyMQ',
  authDomain: 'a10-assignment-project.firebaseapp.com',
  projectId: 'a10-assignment-project',
  storageBucket: 'a10-assignment-project.appspot.com',
  messagingSenderId: '761599390880',
  appId: '1:761599390880:web:c230347838ced358f805c5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
 
export default auth