// import axios from 'axios'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [show, setShow] = useState(false);
  const { createUser, updateUserProfile, setUser, isLoading, user } = useContext(AuthContext);
  // const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    // const user = { name, email, photo, password };
    if (password.length < 6) {
      return toast.error('Your password should at least 6 character long');
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error('Your password should contain a Capital letter')
    }
    if (!/[a-z]/.test(password)) {
      return toast.error('Your password should contain a lower letter')
    }
    createUser(email, password)
      .then(res => {
        toast.success('User Created Successfully');
        updateUserProfile(name, photo)
        //  Update user name and photo url
        setUser({ ...res?.user, photoURL: photo, displayName: name });
        // navigate('/login');
      })
      .catch(err => {
        toast.error(err.message)
      })
  };

  if (isLoading) {
    return <p className="text-5xl text-center my-20">Loading...</p>
  }
  return (
    <div className="w-full max-w-sm p-6 m-auto mx-auto rounded-lg shadow-md  dark:bg-purple-600 my-5">
      <div className="flex justify-center mx-auto">
        <img className="w-auto h-7 sm:h-8" src="../../assets/productLogo.png" alt="" />
        <p className="">Register one</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6">
        <div>
          <label className="block text-sm text-gray-800 dark:text-gray-200">Name</label>
          <input type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder='Your Name'
            name="name" />
        </div>
        <div>
          <label className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
          <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='You Email' name="email" />
        </div>
        <div>
          <label className="block text-sm text-gray-800 dark:text-gray-200">Photo Url</label>
          <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Your Photo Url' name="photo" />
        </div>

        <div className="mt-4 relative">
          <label className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
          <input type={show ? 'text' : 'password'} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Your Password' name="password" />
          <span className="absolute top-[40px] right-3" onClick={() => setShow(!show)}>
            {show ?
              <FaEye /> :
              <FaEyeSlash />
            }
          </span>
        </div>

        <div className="mt-6">
          <input type="submit" value="Sign In" className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" />
        </div>
      </form>

      <p className="mt-8  font-light text-center text-gray-400">Already have an account?
        <a href="/login" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Login</a>
      </p>
    </div>
  )
}

export default Register