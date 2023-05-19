
import logo from "../assets/img/icon/figure toys-logos.jpeg"
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContex } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContex);
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }
  return (
    <div className="navbar bg-base-100">

      <div className="navbar-start">
        <img src={logo} className='w-32 rounded-full h-24' alt="" />
        <h1 className='mx-3 text-2xl font-bold'>ATS TOY HUB</h1>
      </div>
      <div className="navbar-center">
        <li className="list-none mx-3 text-lg"><Link>Home</Link></li>
        <li className="list-none mx-3 text-lg"><Link to={'/myPosted'}>My toys</Link></li>
        <li className="list-none mx-3 text-lg"><Link to={'/addPost'} >Add toys</Link></li>
        <li className="list-none mx-3 text-lg"><Link to={'/allPostedToy'} >All toys</Link></li>
        <li className="list-none mx-3 text-lg"><Link>Blog</Link></li>
        {
          user?.email ? <li className="list-none mx-3 text-lg"><button onClick={handleLogout}>log out </button></li> :
            <li className="list-none mx-3 text-lg"><Link to={'/login'}>login</Link></li>
        }
      </div>
      <div className="navbar-end">

       {
        user?.email ?  <div className="avatar">
        <div className="w-20 rounded-full">
          <img src={user?.photo ?  user.photo : 'https://xsgames.co/randomusers/avatar.php?g=male' } />
        </div>
      </div> : <li className="list-none mx-3 text-lg"><Link to={'/signup'}><button className="btn btn-warning">create account</button></Link></li>
       }


      </div>


    </div>
  );
};

export default Navbar;