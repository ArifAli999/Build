import React from 'react'
import ModalBoxes from './ModalBoxes'
import { AiOutlineBgColors, AiOutlineEdit, AiOutlineOrderedList, AiOutlinePlus } from 'react-icons/ai'
import { GoTextSize } from 'react-icons/go';
import { BiCog } from 'react-icons/bi';

function PageSetupButtons({ title, type }: { title: string, type: any }) {

    function generateIcon(name: string) {
        switch (name) {
            case 'Add':
                return <AiOutlinePlus color='black' size={20} />
                break;
            case 'Edit':
                return <AiOutlineEdit color='black' size={20} />
                break;
            case 'Theme':
                return <AiOutlineBgColors color='black' size={20} />
                break;
            case 'Order':
                return <AiOutlineOrderedList color='black' size={20} />
                break;

            case 'Text':
                return <GoTextSize color='black' size={20} />
                break;
            case 'Settings':
                return <BiCog color='black' size={20} />
                break;


            default:
                break;

        }
    }

    return (
        <div className='flex flex-col items-center justify-between gap-4  min-h-[60px] w-[60px] h-[60px] rounded-lg overflow-hidden'>

            <div className='relative text-center flex items-center justify-center p-2.5 w-full h-full bg-white text-black border-2  border-black border-b-4 rounded-lg overflow-hidden' onClick={type}>
                {generateIcon(title)}

            </div>
        </div>
    )
}

export default PageSetupButtons