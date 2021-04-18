import React, { useState } from 'react'
import { AccountDetailsStage } from './steps/account-details-stage'
import { AccountTypeStage } from './steps/account-type-stage'
import { ConfirmAccountStage } from './steps/confirm-account-stage'
import { SetPasswordStage } from './steps/set-password-stage'
import logo  from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import './register.css';


export const Register = () => {

    let [activeStep, setActiveStep] = useState(1);

    let nextStep = () => {
        setActiveStep(activeStep + 1);
    }
    let previousStep = () => {
        setActiveStep(activeStep - 1);
    }
    let renderStage = () => {
        switch (activeStep){
            case 1:
                return <AccountTypeStage nextStep={nextStep} previousStep={previousStep} activeStep={activeStep} onChange={() => console.log("ON CHANGE")} onSubmit={() => console.log("ON SUBMIT")}/>
            case 2:
                return <AccountDetailsStage  nextStep={nextStep} previousStep={previousStep} activeStep={activeStep} onChange={() => console.log("ON CHANGE")} onSubmit={() => console.log("ON SUBMIT")}/>
            case 3:
                return <SetPasswordStage  nextStep={nextStep} previousStep={previousStep} activeStep={activeStep} onChange={() => console.log("ON CHANGE")} onSubmit={() => console.log("ON SUBMIT")} />
            case 4:
                return <ConfirmAccountStage  nextStep={nextStep} previousStep={previousStep} activeStep={activeStep} onChange={() => console.log("ON CHANGE")} onSubmit={() => console.log("ON SUBMIT")}/>

        }
    }
   
    return (
        <div className="flex w-full h-full">
            <div className='w-2/3'>
              <div className="pt-9 px-10 fixed inline w-2/3 clear-both">
                <img src={logo} alt="logo" className="float-left" />
                <span className="float-right pt-1">
                    <span>Already have an account? </span> <Link to={'/login'}className="text-green-500 font-semibold cursor-pointer ml-2">Log in</Link>
                </span>
            </div>
            <div className="flex justify-center items-center h-full flex-col">
                <div className="w-2/3">
                    { renderStage() }
                </div>
                
            </div>
            </div>
            <div className='w-1/3 background'>
            
            </div>
        </div>
    )
}
