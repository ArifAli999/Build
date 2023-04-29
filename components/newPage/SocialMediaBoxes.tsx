import React from 'react'
import { AiFillFacebook, AiFillPlusCircle, AiFillYoutube, AiOutlineInstagram, AiOutlinePlus, AiOutlineQuestion, AiOutlineTwitter } from 'react-icons/ai'
import ModalBoxes from './ModalBoxes';
import { useRouter } from 'next/router';
import { FaItunes, FaItunesNote, FaPinterest, FaSoundcloud, FaSpotify, FaTiktok, FaTwitch } from 'react-icons/fa';

function SocialMediaBoxes({ title }: { title: string }) {
    const router = useRouter();

    function generateIcon(name: string) {
        let color = '';
        let bgColor = '';
        let borderColor = '';
        let borderBColor = '';

        switch (name) {
            case 'Facebook':
                color = 'white';
                bgColor = 'bg-blue-600';
                borderColor = 'border-blue-800';
                borderBColor = 'border-b-blue-800';
                break;
            case 'Instagram':
                color = 'white';
                bgColor = 'bg-pink-600';
                borderColor = 'border-pink-800';
                borderBColor = 'border-b-pink-800';
                break;
            case 'Twitter':
                color = 'white';
                bgColor = 'bg-blue-400';
                borderColor = 'border-blue-600';
                borderBColor = 'border-b-blue-600';
                break;
            case 'Youtube':
                color = 'white';
                bgColor = 'bg-red-600';
                borderColor = 'border-red-800';
                borderBColor = 'border-b-red-800';
                break;
            case 'Tiktok':
                color = 'white';
                bgColor = 'bg-black/80';
                borderColor = 'border-gray-800';
                borderBColor = 'border-b-gray-800';
                break;
            case 'Pinterest':
                color = 'white';
                bgColor = 'bg-red-400';
                borderColor = 'border-red-600';
                borderBColor = 'border-b-red-800';
                break;
            case 'Twitch':
                color = 'white';
                bgColor = 'bg-purple-600';
                borderColor = 'border-purple-800';
                borderBColor = 'border-b-purple-800';
                break;
            case 'Spotify':
                color = 'white';
                bgColor = 'bg-green-600';
                borderColor = 'border-green-800';
                borderBColor = 'border-b-green-800';
                break;
            case 'Soundcloud':
                color = 'white';
                bgColor = 'bg-orange-600';
                borderColor = 'border-orange-800';
                borderBColor = 'border-b-orange-800';
                break;
            case 'Apple Music':
                color = 'white';
                bgColor = 'bg-rose-600';
                borderColor = 'border-rose-800';
                borderBColor = 'border-b-rose-800';
                break;
            case 'Custom':
                color = 'white';
                bgColor = 'bg-gray-600';
                borderColor = 'border-gray-800';
                borderBColor = 'border-b-gray-800';
                break;


            // add more cases as needed
            default:
                break;
        }

        const iconClasses = `relative text-center flex items-center justify-center p-2.5 w-full h-full ${bgColor} border-2 ${borderColor} ${borderBColor} border-b-4 rounded-lg`;
        const plusClasses = 'absolute -right-2 -top-4 bg-black w-10 h-10 p-2 rounded-full flex items-center justify-center';
        const iconColorClasses = `p-0.5 flex items-center text-${color}`;

        return (
            <div className={iconClasses}>
                <a href={`#${name.toLowerCase()}-modal`} className={plusClasses}>
                    <AiOutlinePlus size={20} color={color} />
                </a>
                {name === 'Facebook' && <AiFillFacebook className={iconColorClasses} color={color} size={40} />}
                {name === 'Instagram' && <AiOutlineInstagram className={iconColorClasses} color={color} size={40} />}
                {name === 'Twitter' && <AiOutlineTwitter className={iconColorClasses} color={color} size={40} />}
                {name === 'Youtube' && <AiFillYoutube className={iconColorClasses} color={color} size={40} />}
                {name === 'Tiktok' && <FaTiktok className={iconColorClasses} color={color} size={40} />}
                {name === 'Pinterest' && <FaPinterest className={iconColorClasses} color={color} size={40} />}
                {name === 'Twitch' && <FaTwitch className={iconColorClasses} color={color} size={40} />}
                {name === 'Spotify' && <FaSpotify className={iconColorClasses} color={color} size={40} />}
                {name === 'Soundcloud' && <FaSoundcloud className={iconColorClasses} color={color} size={40} />}
                {name === 'Apple Music' && <FaItunesNote className={iconColorClasses} color={color} size={40} />}
                {name === 'Custom' && <AiOutlineQuestion className={iconColorClasses} color={color} size={40} />}

                <ModalBoxes name={name} id={`${name.toLowerCase()}-modal`} title={`LINK YOUR ${name.toUpperCase()}`} />
            </div>
        );
    }



    return (
        <><div className='flex flex-col items-center justify-between gap-4  min-h-[60px] w-[100px] h-[100px] rounded-lg'>

            {generateIcon(title)}



        </div>

        </>
    )
}

export default SocialMediaBoxes