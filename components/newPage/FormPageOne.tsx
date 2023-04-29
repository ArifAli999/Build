import React, { useRef, useState } from 'react'
import { AiOutlineCheck, AiTwotoneEdit } from 'react-icons/ai'
import InputComponents from './InputComponents'
import UserDetailsForm from './UserDetailsForm'
import usePageStore from '../../store/pagesStore';



interface Props {
    userDetails: {
        firstName: string,
        lastName: string,
        website: string,
        about: string,
    },
    setUserDetails: any,
    steps: number,
    setSteps: any
}

function FormPageOne({ userDetails, setUserDetails, steps, setSteps }: Props) {
    const { userPages, setUserPages } = usePageStore();
    const [hidden, setHidden] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const inputRef = useRef(null);
    const aboutRef = useRef(null);

    function handleEdit() {
        setHidden(true);
        setDisabled(false);
        setTimeout(() => {
            if (inputRef.current) {
                console.log('inputRef.current exists and is not null');
                // @ts-ignore
                inputRef.current.focus();
            }
        }, 0);
    }

    function handleSave() {
        setHidden(false);
        setDisabled(true);


    }

    return (
        <div className='flex w-full relative h-full flex-col mt-4 min-h-fit xl:min-h-[600px] border-b-4 border-2 border-black bg-white rounded-md'>

            <div className='flex items-center justify-between w-full p-6'>
                <div className='flex group items-center  cursor-pointer  '>
                    <div className='text-black text-base xl:text-3xl relative  font-black flex xl:tracking-wider font-main uppercase w-auto items-center'>
                        <h2 className='hidden xl:block'>PAGE SETUP FOR /</h2>
                        <input className='bg-transparent max-w-[200px] xl:max-w-[400px] text-base  focus:border-b-2 border-black focus:outline-none xl:text-3xl font-black xl:tracking-wider font-main uppercase' disabled={disabled} value={userPages.pageName}
                            onChange={(e) => setUserPages({ ...userPages, pageName: e.target.value })}
                            size={userPages.pageName.length || 1}
                            ref={inputRef}

                        />

                        <div className=' mt-1 ml-2 xl:ml-0'>
                            {hidden ? <AiOutlineCheck color='black' size={18} onClick={handleSave} /> : <AiTwotoneEdit className='opacity-0 group-hover:opacity-100 transition-all ease-linear duration-150 ' color='black' size={18} onClick={handleEdit} />
                            }

                        </div>
                    </div>



                </div>
                <h2 className='text-white xl:text-xl font-black tracking-wider font-main border border-black rounded-full p-4 xl:h-14 xl:w-14 h-8 w-8 flex items-center justify-center bg-black'>{steps}/3</h2>
            </div>

            <div className='flex xl:flex-row flex-col gap-8 md:gap-0 items-center justify-between w-full h-full p-6 xl:mt-4 xl:mb-4 xl:px-12'>
                <UserDetailsForm userDetails={userDetails} setUserDetails={setUserDetails} />
            </div>

            <div className='flex items-center w-full -mt-4 h-full p-6 xl:p-10 xl:mt-2 xl:mb-0 mb-16'>
                <InputComponents userDetails={userDetails} setUserDetails={setUserDetails} inputRef={aboutRef} placeholder='Tell the world something about yourself or your page in under 500 words...' property='about' />
            </div>


            <div className='absolute right-6 bottom-0 mb-3.5'>
                <button className='flex items-center justify-center  border-black border-b-4  p-2.5 text-black rounded-md  font-secondary font-bold tracking-wider hover:border-black hover:border-b-2 border-2 transition-all duration-100 ease-linear'
                    onClick={() => setSteps(steps + 1)}
                >CONTINUE</button>
            </div>

        </div>
    )
}

export default FormPageOne