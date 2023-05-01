import React, { useState } from 'react'
import SocialMediaBoxes from './SocialMediaBoxes'
import SmallSocialMediaBoxes from './SmallSocialMediaBoxes'
import PageSetupButtons from './PageSetupButtons'
import PageSetupModal from './PageSetupModals'

function FormPageThree({ steps, setSteps }: { steps: number, setSteps: any }) {
    let [isOpen, setIsOpen] = useState(false)


    const [showEdit, setShowEdit] = useState(false);


    function closeModal(state: any) {
        state(false)
    }

    function openModal(state: any) {
        state(true)

    }




    function addComps() {
        openModal(setIsOpen)
    }

    function editComps() {
        openModal(setShowEdit)
    }

    return (
        <>
            <div className='flex w-full flex-col xl:flex-row h-full justify-between min-h-screen p-6  mt-0 gap-6 xl:gap-0 border-0 border-black bg-white rounded-md overflow-hidden scrollbar-none'>
                <div className="mockup-phone border-primary overflow-hidden ">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1 xl:phone-2 ">Hi.</div>
                    </div>
                </div>


                <div className='w-full xl:fixed xl:w-auto max-h-[680px] p-2 scroll-m-3  mt-4 flex xl:flex-col gap-4 xl:overflow-y-auto xl:mr-6 xl:overflow-x-hidden overflow-x-scroll scrollbar-track-white scrollbar-thumb-black  scrollbar-thin'>




                    <div className="flex-shrink-0 scrollbar-none">
                        <PageSetupButtons title='Add' type={addComps} />
                        <PageSetupModal closeModal={() => closeModal(setIsOpen)} isOpen={isOpen} setIsOpen={setIsOpen} title='Add' />

                    </div>


                    <div className="flex-shrink-0 scrollbar-none">
                        <PageSetupButtons title='Edit' type={editComps} />
                        <PageSetupModal closeModal={() => closeModal(setShowEdit)} isOpen={showEdit} setIsOpen={setShowEdit} title='Edit' />

                    </div>


                    <div className="flex-shrink-0 scrollbar-none">
                        <PageSetupButtons title='Theme' type='action' />
                    </div>

                    <div className="flex-shrink-0 scrollbar-none">
                        <PageSetupButtons title='Order' type='action' />
                    </div>

                    <div className="flex-shrink-0 scrollbar-none">
                        <PageSetupButtons title='Text' type='action' />
                    </div>

                    <div className="flex-shrink-0 scrollbar-none">
                        <PageSetupButtons title='Settings' type='action' />
                    </div>


                </div>

            </div>

        </>

    )
}

export default FormPageThree