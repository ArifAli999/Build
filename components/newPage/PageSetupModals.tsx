import { Dialog, Tab, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function PageSetupModal({ closeModal, isOpen, setIsOpen, title }: { closeModal: any, isOpen: any, setIsOpen: any, title: any }) {


    function generateTitle(name: string) {
        switch (name) {
            case 'Add':
                return 'Add Components'
                break;
            case 'Edit':
                return 'Edit Components'
                break;
            case 'Theme':
                return 'Theme'
                break;
            case 'Order':
                return 'Order'
                break;
            default:
                break;

        }
    }

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }


    function generateSubTitle(name: string) {
        switch (name) {
            case 'Add':
                return 'choose the components you would like to be displayed on your page.'
                break;
            case 'Edit':
                return 'you can edit the components you have added to your page.'
                break;
            case 'Theme':
                return 'choose the theme for your page or build your own unique brand theme.'
                break;
            case 'Order':
                return 'select the preferred order of your components.'
                break;
            default:
                break;

        }
    }

    return (
        <>


            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto s">
                        <div className="flex min-h-full  items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white border-2 border-b-4 border-black p-6 text-left align-middle shadow-xl transition-all ease-linear">
                                    <Dialog.Title
                                        as="div"
                                        className="text-lg font-secondary flex items-center justify-between w-full uppercase font-medium leading-6 text-gray-900"
                                    >
                                        {generateTitle(title)}

                                        <p className="text-xs text-black font-secondary font-semiold cursor-pointer -mt-0.5" onClick={closeModal}> [close]</p>

                                    </Dialog.Title>
                                    <div className="mt-0.5 mb-4">
                                        <p className="text-xs text-gray-500">
                                            {generateSubTitle(title)}
                                        </p>
                                    </div>

                                    <div className="mt-2">
                                        <Tab.Group>
                                            <Tab.List className='flex justify-between items-center space-x-1 border-2 border-b-4 border-black '>
                                                <Tab className={({ selected }) =>
                                                    classNames(
                                                        'w-full   text-sm font-medium  ',
                                                        ' focus:outline-none focus:ring-0',
                                                        selected
                                                            ? 'bg-black p-2.5 text-white'
                                                            : 'text-black p-2 hover:bg-white/[0.12] hover:text-black'
                                                    )
                                                }>General</Tab>
                                                <Tab className={({ selected }) =>
                                                    classNames(
                                                        'w-full   text-sm font-medium  ',
                                                        'focus:ring-0',
                                                        selected
                                                            ? 'bg-black p-2.5 text-white'
                                                            : 'text-black p-2 hover:bg-white/[0.12] hover:text-black'
                                                    )
                                                }>Profiles</Tab>

                                            </Tab.List>
                                            <Tab.Panels>
                                                <Transition
                                                    show={true}
                                                    enter="transition-opacity duration-75"
                                                    enterFrom="opacity-0"
                                                    enterTo="opacity-100"
                                                    leave="transition-opacity duration-750"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                    appear={true}
                                                >
                                                    <Tab.Panel>
                                                        pls animate???</Tab.Panel>

                                                </Transition>
                                                <Tab.Panel>Content 2</Tab.Panel>


                                            </Tab.Panels>
                                        </Tab.Group>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}