import React from 'react';
const Footer = () => {
    return(
        <footer className="absolute left-0 bottom-0 w-full h-auto bg-gray-800 text-xs">
            <hr className="border-gray-700" />
            <div className="flex items-center justify-between mx-auto p-2 text-gray-200">
            <div className="mr-auto">Copyright &copy; 2020 Kar Teknik Servis</div>
            <ul className="flex">
                <li className="mr-2">
                <a href="https://github.com/muratbenli" target="_blank" className="hover:text-gray-100">
                    Design | Murat Benli
                </a>
                </li>
            </ul>
            </div>
        </footer>
    )
}

export default Footer;