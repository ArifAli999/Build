import React, { useRef, useState } from 'react'
import Navigation from '../../components/General/Navigation'
import usePageStore from '../../store/pagesStore';
import { AiOutlineCheck, AiOutlinePlus, AiTwotoneEdit } from 'react-icons/ai'
import PrimaryButton from '../../components/General/PrimaryButton';
import { GrEdit } from 'react-icons/gr'
import UserDetailsForm from '../../components/newPage/UserDetailsForm';
import InputComponents from '../../components/newPage/InputComponents';
import FormPageOne from '../../components/newPage/FormPageOne';
import FormPageTwo from '../../components/newPage/FormPageTwo';
import FormPageThree from '../../components/newPage/FormPageThree';

function NewPage() {
  const [steps, setSteps] = useState(1);
  const { userPages, setUserPages } = usePageStore();
  const [hidden, setHidden] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const inputRef = useRef(null);
  const aboutRef = useRef(null);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    website: '',
    about: '',
  })



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
    <main
      className={`flex flex-col p-8 w-full gap-10 justify-between overflow-hidden scrollbar-none`}
    >
      {steps != 2 ? <Navigation /> : null} 


      {/* {steps === 1 &&
        <FormPageOne userDetails={userDetails} setUserDetails={setUserDetails} steps={steps} setSteps={setSteps} />
      } */}
      {steps === 1 &&
        <FormPageTwo steps={steps} setSteps={setSteps} />
      }

      {steps === 2 &&
        <FormPageThree steps={steps} setSteps={setSteps} />
      } 


    </main>
  )
}

export default NewPage