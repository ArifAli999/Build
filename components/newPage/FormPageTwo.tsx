import React from 'react'
import { AiFillInfoCircle, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineCheck } from 'react-icons/ai'
import SocialMediaBoxes from './SocialMediaBoxes'
import FormStepControl from './FormStepControl'

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
                    <h2 className=' xl:text-xl font-black tracking-wider font-secondary border-2 border-black rounded-md px-4 py-2.5 flex items-center justify-center text-black'>{steps}/3</h2>
                </div>
            </div>

            <div className='flex flex-col w-full '>
                <div className='flex p-6 gap-8 mt-0 xl:gap-12 w-full flex-wrap'>
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


            </div>

            <FormStepControl steps={steps} setSteps={setSteps} />

        </div>
    )
}

export default FormPageTwo