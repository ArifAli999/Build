import React, { useState } from 'react'
import { AiOutlineCheck, AiTwotoneEdit } from 'react-icons/ai'

function InputComponents({ userDetails, setUserDetails, inputRef, placeholder, property }: any) {

    const [hidden, setHidden] = useState(false);
    const [disabled, setDisabled] = useState(true);

    function handleEdit(ref: any) {
        if (disabled) {
            setDisabled(false);
        }
        setHidden(true);
        setTimeout(() => {
            if (ref.current) {
                // @ts-ignore
                ref.current.focus();
            }
        }, 0);
    }

    function handleSave() {
        setHidden(false);
        setDisabled(true);
    }



    function calcSize(prop: string) {
        if (prop === 'about') {
            return userDetails[prop].length > 60 ? userDetails[prop].length : 60;
        }
        return userDetails[prop].length > 10 ? userDetails[prop].length : 10;
    }
    return (
        <div className='flex items-center justify-between gap-2 group cursor-pointer w-full xl:w-auto overflow-hidden '>
            {property === 'about' ?
                <textarea className={property === 'about' ? ` w-full h-[150px] bg-transparent tracking-wider overflow-hidden text-left  placeholder-shown:lowercase  text-white  border-double focus:border-0 border-4 xl:p-6 text-base border-b-4 rounded border-gray-500 focus:outline-none xl:text-2xl font-black xl:tracking-wider font-secondary` : `bg-transparent w-full text-center placeholder-shown:lowercase  text-white border-dashed focus:border-solid p-2 text-base border-b border-white focus:outline-none xl:text-2xl font-black xl:tracking-wider font-secondary uppercase`} placeholder={placeholder}

                    maxLength={300}
                    cols={100}
                    disabled={disabled}

                    onChange={(e) => setUserDetails({ ...userDetails, [property]: e.target.value })}
                    ref={inputRef} />

                :

                <input className={`bg-transparent max-h-[300px] cursor-pointer transition-all ease-linear duration-200 w-full text-center placeholder-shown:font-light placeholder-shown:lowercase  text-black border-double   focus:border-0 p-2.5 px-4 text-base border-4 rounded    border-b-4 border-black focus:outline-none xl:text-xl font-semibold xl:tracking-wider font-secondary uppercase`} placeholder={placeholder}
                    size={calcSize(property) > 10 ? 11 : calcSize(property)}
                    readOnly={disabled}
                    onChange={(e) => setUserDetails({ ...userDetails, [property]: e.target.value })}
                    ref={inputRef}
                    onDoubleClick={() => handleEdit(inputRef)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSave();
                            inputRef.current.blur();
                        }
                    }}
                />



            }



            <div className=' mt-1.5 ml-0 xl:ml-2'>
                {hidden ? <AiOutlineCheck color='black' size={18} onClick={handleSave} /> : <AiTwotoneEdit className='opacity-0 group-hover:opacity-100 transition-all ease-linear duration-150 ' color='black' size={18} onClick={() => handleEdit(inputRef)} />}

            </div>
        </div>
    )
}

export default InputComponents