import React, { useState } from 'react'
import usePageStore from '../../store/pagesStore';
import { useRouter } from 'next/router';

function ModalBoxes({ id, title, name }: { id: string, title: string, name: string }) {
    const router = useRouter();
    const [input, setInput] = useState('');
    const { userProfiles, setUserProfiles } = usePageStore();

    function handleSave(name: string) {
        if (input.length < 10) return alert('Please enter a valid URL');
        setUserProfiles(name, input)
    }



    return (
        <div className="modal text-left" id={id}>
            <div className="modal-box bg-white border-2 border-black border-b-4 flex justify-between flex-col gap-4">

                <div className='flex items-center justify-between w-full '>
                    <h3 className="font-bold text-lg mb-4">{title} </h3>
                    <a href='#' className='font-secondary font-semibold text-xs tracking-wide text-black/90'>
                        [CLOSE]
                    </a>
                </div>
                <input className='border-2 rounded focus:outline-none focus:border-b-4 transition-all duration-150 ease-in-out border-black p-2.5 bg-transparent font-secondary text-black placeholder-gray-400' placeholder={`${name.toLowerCase()}.com/`}
                    onChange={(e) => setInput(e.target.value)}
                    value={userProfiles && userProfiles[name]}
                />
                <div className="modal-action">
                    <a href="#" className="btn bg-white border-2 border-black text-black hover:bg-white hover:border-b-4 ease-linear transition-all duration-100
                    " onClick={() => handleSave(name)}
                    >Save!</a>
                    {input && input}
                </div>
            </div>
        </div>
    )
}

export default ModalBoxes