import{
    FaHome,FaInfoCircle,FaServicestack,FaEnvelope
} from "react-icons/fa"

function Navbar(){

return(
    <nav className="bg-gray-900 text-white p-4">
   <div className="container flex mx-auto items-center justify-between">
 <h1 className="text-2xl font-bold">🚀My Website</h1>
    <ul className="flex space-x-6">
        <li>
            <a className="flex gap-1 items-center hover:text-blue-400" href=""><FaHome/>Home</a>
        </li>
        <li>
            <a className="flex gap-1 items-center hover:text-blue-400" href=""> <FaInfoCircle/> About</a>
        </li>
        <li>
            <a className="flex gap-1 items-center hover:text-blue-400" href="">  <FaServicestack/> services</a>
        </li>
        <li>
            <a className="flex gap-1 items-center hover:text-blue-400" href="">  <FaEnvelope/>  Contact</a>
        </li>
    </ul>
   </div>
    
    
    </nav>
)



}

export default Navbar;