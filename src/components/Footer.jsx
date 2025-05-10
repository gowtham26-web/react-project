import {
    FaFacebook,FaTwitter,FaInstagram
} from "react-icons/fa"



function Footer(){
    return(
        <footer className="bg-gray-900 text-white text-center py-6">
            <p>© 2025 MyWebsite. All Rights Reserved.</p>
            <div className="flex justify-center space-x-2 mt-2">
                <a className="flex items-center gap-1  text-blue-400 hover:text-blue-600" href=""><FaFacebook/>Facebook</a>
                <a className="flex items-center gap-1  text-blue-400 hover:text-blue-600" href=""><FaTwitter/>Twitter </a>
                <a className="flex items-center gap-1  text-blue-400 hover:text-blue-600" href=""><FaInstagram/>Instagram </a>
            </div>
        </footer>
    )
}
export default Footer