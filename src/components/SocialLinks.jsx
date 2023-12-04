import { FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsPersonLinesFill } from 'react-icons/bs'
import { FaWhatsapp } from "react-icons/fa";
const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    YouTube <FaYoutube size={30} />
                </>
            ),
            href: 'https://www.youtube.com/channel/UCa34BFJ28CoS_igYHUWskxw'
        },
        {
            id: 2,
            child: (
                <>
                    Gmail <SiGmail size={30} />
                </>
            ),
            href: 'https://mail.google.com/mail/u/0/#inbox'
        },
        {
            id: 3,
            child: (
                <>
                    Contact  <FaWhatsapp  size={30} />
                </>
            ),
            href: 'https://wa.link/n9gupu',
            // download: true
        },
    ]
   
    // https://wa.link/n9gupu

    return (
        <div className='hidden xl:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, href, download }) => (
                    <li key={id} className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                        <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SocialLinks;