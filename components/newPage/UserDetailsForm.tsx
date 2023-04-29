import { AppPropsType } from 'next/dist/shared/lib/utils'
import React, { useState } from 'react'
import { AiOutlineCheck, AiTwotoneEdit } from 'react-icons/ai';
import InputComponents from './InputComponents';

interface Props {
    userDetails: {
        firstName: string,
        lastName: string,
        website: string,
    },
    setUserDetails: any
}

function UserDetailsForm({ userDetails, setUserDetails }: Props): any {

    const [hidden, setHidden] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const firstNameRef = React.useRef(null);
    const lastNameRef = React.useRef(null);
    const websiteRef = React.useRef(null);



    return (
        <>
            <InputComponents placeholder='first name' userDetails={userDetails} setUserDetails={setUserDetails} property='firstName' inputRef={firstNameRef} />
            <InputComponents placeholder='last name' userDetails={userDetails} setUserDetails={setUserDetails} inputRef={lastNameRef} property='lastName' />
            <InputComponents placeholder='fourth' userDetails={userDetails} setUserDetails={setUserDetails} inputRef={websiteRef} property='website' />
            <InputComponents placeholder='website' userDetails={userDetails} setUserDetails={setUserDetails} inputRef={websiteRef} property='website' />

        </>
    )
}

export default UserDetailsForm