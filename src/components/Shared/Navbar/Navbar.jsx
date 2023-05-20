
import { Link } from 'react-router-dom';
import logo from './../../../assets/logo.png'
import { AuthContext } from '../../../providers/AuthProviders';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { FaUser } from 'react-icons/fa';
const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() =>{
          Swal.fire({
            position: ' top-center  ',
            icon: 'success',
            title: 'Logged Out SuccessFully',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch( error => console.log(error))
    }
    return (
      <div className="navbar  bg-[#ee77f0] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#ee77f0] text-white rounded-box w-52"
            >
              <li>
                <Link to="./">Home</Link>
              </li>
              {/* <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
              <li>
                <Link to="./alltoys">All Toys</Link>
              </li>
              {/* <li><Link to='./mytoys'>My Toys</Link></li> */}
              <li>
                <Link to="./addnewtoys">Add A Toy</Link>
              </li>
              <li>
                <Link to="./blogs">Blogs</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl justify-center items-center align-middle">
            <img
              className="w-8 justify-center items-center align-middle"
              src={logo}
              alt=""
            />{" "}
          </Link>
        </div>
        {/* for big screen */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="./">Home</Link>
            </li>

            <li>
              <Link to="./alltoys">All Toys</Link>
            </li>

            <li>
              <Link to="./addnewtoys">Add A Toy</Link>
            </li>
            <li>
              <Link to="./blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          {user?.email ? (
            <>
            <div className="avatar ">
                <div className="w-8 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
              <li className="list-none ms-2 mr-2">
                <Link to="./mytoys">My Toys</Link>
              </li>
              
              <li className="list-none">
                <button onClick={handleLogOut}>Log out</button>
              </li>
            </>
          ) : (
            
              
              <Link className='btn  btn-outline' to="/login"> <FaUser/>  Login</Link>
            
          )}
        </div>
      </div>
    );
};

export default Navbar;