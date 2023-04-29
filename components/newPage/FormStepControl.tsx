import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

function FormStepControl({ setSteps, steps }: any) {
    return (
        <div className='flex items-center justify-between w-full p-7 '>
            <div className=''>
                <button onClick={() => setSteps(steps - 1)} className='text-black text-base xl:text-3xl relative   font-black flex xl:tracking-wider font-main uppercase w-auto items-center hover:-translate-x-1 transition-all ease-linear duration-150'>
                    <AiOutlineArrowLeft color='black' size={50} />
                </button>

            </div>

            <div className=''>
                <button onClick={() => setSteps(steps + 1)} className='text-black text-base xl:text-3xl relative   font-black flex xl:tracking-wider font-main uppercase w-auto items-center hover:translate-x-1 transition-all ease-linear duration-150'>
                    <AiOutlineArrowRight color='black' size={50} />
                </button>

            </div>
        </div>
    )
}

export default FormStepControl