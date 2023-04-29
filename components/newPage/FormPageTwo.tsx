import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineCheck } from 'react-icons/ai'
import SocialMediaBoxes from './SocialMediaBoxes'

function FormPageTwo({ steps, setSteps }: { steps: number, setSteps: any }) {
    return (
        <div className='flex w-full justify-between relative h-full flex-col mt-0 border-b-8 min-h-[550px] border-2 border-black bg-white rounded-md'>

            <div className='flex items-center justify-between w-full '>
                <div className='flex group items-center  cursor-pointer  p-7 '>
                    <div className='text-black text-base xl:text-3xl relative   font-black flex xl:tracking-wider font-main uppercase w-auto items-center'>
                        <h2 className=''>PROFILES SETUP</h2>
                    </div>
                </div>
                <div className='p-4'>
                    <h2 className='text-white xl:text-xl font-black tracking-wider font-main border border-white rounded-full p-6 xl:h-14 xl:w-14 h-8 w-8 flex items-center justify-center bg-black'>{steps}/3</h2>
                </div>
            </div>

            <div className='flex items-center p-6 gap-8 mt-0 xl:gap-12 w-full flex-wrap'>
                <SocialMediaBoxes title='Facebook' />
                <SocialMediaBoxes title='Instagram' />
                <SocialMediaBoxes title='Twitter' />
                <SocialMediaBoxes title='Youtube' />
                <SocialMediaBoxes title='Tiktok' />
                <SocialMediaBoxes title='Pinterest' />
                <SocialMediaBoxes title='Twitch' />
                <SocialMediaBoxes title='Spotify' />
                <SocialMediaBoxes title='Soundcloud' />
                <SocialMediaBoxes title='Apple Music' />
                <SocialMediaBoxes title='Custom' />
            </div>

            <div className='flex items-center justify-between w-full p-7 '>
                <div className=''>
                    <button onClick={() => setSteps(steps - 1)} className='text-black text-base xl:text-3xl relative   font-black flex xl:tracking-wider font-main uppercase w-auto items-center'>
                        <AiOutlineArrowLeft color='black' size={50} />
                    </button>

                </div>

                <div className=''>
                    <button onClick={() => setSteps(steps + 1)} className='text-black text-base xl:text-3xl relative   font-black flex xl:tracking-wider font-main uppercase w-auto items-center'>
                        <AiOutlineArrowRight color='black' size={50} />
                    </button>

                </div>
            </div>

        </div>
    )
}

export default FormPageTwo