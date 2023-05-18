
import logo from "../assets/img/icon/figure toys-logos.jpeg"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">

  <div className="navbar-start">
    <img src={logo} className='w-32 rounded-full h-24' alt="" />
    <h1 className='mx-3 text-2xl font-bold'>ATS TOY HUB</h1>
  </div>
  <div className="navbar-center">
    <li className="list-none mx-3 text-lg"><Link>Home</Link></li>
    <li className="list-none mx-3 text-lg"><Link>My toys</Link></li>
    <li className="list-none mx-3 text-lg"><Link>Add toys</Link></li>
    <li className="list-none mx-3 text-lg"><Link>All toys</Link></li>
    <li className="list-none mx-3 text-lg"><Link>Blog</Link></li>
  </div>
  <div className="navbar-end">
     <h1>img here</h1>
  </div>
</div>
    );
};

export default Navbar;