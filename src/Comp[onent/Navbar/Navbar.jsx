import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1} from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Product Details', path: '/products/:id' },
        { id: 5, name: 'Contact', path: '/contact' }
      ];
      const [open, setOpen] = useState(false)

    return (
        <nav>
          
       <div  onClick={() => setOpen(!open)} className="text-4xl md:hidden bg-yellow-200">
             {
                 open? <MdOutlineClose></MdOutlineClose> 
                :  < HiMenuAlt1> </HiMenuAlt1>
                 }
       </div>
           <ul className={`md:flex bg-yellow-300 text-black absolute md:static duration-1000
            ${open? 'top-16' : '-top-52'}
           `}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link> )
            }
           </ul>
        </nav>
        )
};

export default Navbar;