
import {
    FaBook,FaReact,FaRocket
} from "react-icons/fa"
const links = [
    {
        name:" Vite Documentation",
        icon:<FaBook/>,
        href:"#"
    },{
        name:"React Guide",
        icon:<FaReact/>,
        href:"#"
    },{
        name:"Frontend Threads",
        icon:<FaRocket/>,
        href:"#"
    }
]

function Aside(){
    return(
        <aside className="container bg-gray-200 rounded shadow-sm p-6 w-auto">
            <h2 className="text-xl font-bold flex justify-left">📌 Related Links</h2>
            <ul className="space-y-2 mt-2">
                {links.map(link =>(
            <li>
                    <a href={link.href} className="flex items-center text-blue-500 gap-1 hover:underline">{link.icon} {link.name}</a>
                </li>
                ))}
               
            </ul>
        </aside>
    )
}
export default Aside