
import logo from "../assets/img/icon/action-figure.png"
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { AuthContex } from "../AuthProvider/AuthProvider";
import menu from "../assets/img/icon/menu.png"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContex);
  const [visible, setvisible] = useState(false)

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  const handleToggle = () => {
    setvisible(!visible)
  }

  return (
    <div className="navbar bg-base-100">

      <div className="navbar-start">
        <img src={logo} className='lg:w-32 w-12 h-8 rounded-full lg:h-24' alt="" />
        <h1 className='mx-3 text-xl lg:text-2xl font-bold'>ATS TOY HUB</h1>
      </div>

      <div className="navbar-center">
        <div className="hidden lg:flex">

          <li className="list-none mx-3 text-lg"><Link>Home</Link></li>
          {
            user?.email ? <>
              <li className="list-none mx-3 text-lg"><Link to={'/myPosted'}>My toys</Link></li>
              <li className="list-none mx-3 text-lg"><Link to={'/addPost'} >Add toys</Link></li>
            </> : ''
            // user?.email ? <li className="list-none mx-3 text-lg"><Link to={'/myPosted'}>My toys</Link></li>
            //  : 
          }
          <li className="list-none mx-3 text-lg"><Link to={'/allPostedToy'} >All toys</Link></li>
          <li className="list-none mx-3 text-lg"><Link to={'/blog'} >Blog</Link></li>
          {
            user?.email ? <li className="list-none mx-3 text-lg"><button onClick={handleLogout}>log out </button></li> :
              <li className="list-none mx-3 text-lg"><Link to={'/login'}>login</Link></li>
          }

        </div>
      </div>

      <div className="navbar-end">

        <div className=" hidden lg:flex">
          {
            user?.email ? <div className="avatar">
              <div className="w-20 rounded-full">
                <img src={user?.photo ? user.photo : 'https://xsgames.co/randomusers/avatar.php?g=male'} />
              </div>
            </div> : <li className="list-none mx-3 text-lg"><Link to={'/signup'}><button className="btn btn-warning">create account</button></Link></li>
          }
        </div>

        <div className=" lg:hidden">

          <div className="dropdown dropdown-end">
            {/* <label tabIndex={0} className="btn bg-white m-1">  </label> */}
            <img tabIndex={0} className=" h-4 w-6" onClick={handleToggle} src={menu} alt="" />

            {
              visible &&
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">

                {
                  user?.email ? <div className="avatar">
                    <div className="w-20 rounded-full">
                      <img src={user?.photo ? user.photo : 'https://xsgames.co/randomusers/avatar.php?g=male'} />
                    </div>
                  </div> : <li className="list-none mx-3 text-lg"><Link to={'/signup'}><button className="btn btn-warning">create account</button></Link></li>
                }

                <li className="list-none mx-3 text-lg"><Link>Home</Link></li>
                {
                  user?.email ? <>
                    <li className="list-none mx-3 text-lg"><Link to={'/myPosted'}>My toys</Link></li>
                    <li className="list-none mx-3 text-lg"><Link to={'/addPost'} >Add toys</Link></li>
                  </> : ''
                }

                <li className="list-none mx-3 text-lg"><Link to={'/allPostedToy'} >All toys</Link></li>
                <li className="list-none mx-3 text-lg"><Link to={'/blog'} >Blog</Link></li>

                {
                  user?.email ? <li className="list-none mx-3 text-lg"><button onClick={handleLogout}>log out </button></li> :
                    <li className="list-none mx-3 text-lg"><Link to={'/login'}>login</Link></li>
                }


              </ul>
            }
          </div>

        </div>


      </div>


    </div>
  );
};

export default Navbar;