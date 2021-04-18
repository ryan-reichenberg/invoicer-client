import React from 'react'
import Button from 'src/components/Button/Button';
import Stepper from 'src/components/Stepper/Stepper';
import IStepperProps from './IStepperProps';
import '../register.css';
import {AccountType as accountType} from 'src/types/RegistrationTypes';
import  { getStep1 } from 'src/slices/registrationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/app/rootReducer';

export const AccountTypeStage = (props: IStepperProps) => {
    const selected = useSelector((state: RootState) => state.registration.accountType)
    const dispatch = useDispatch();

    const handleNextStep = () => {
        if (selected === accountType.NOT_SELECTED) return
        props.nextStep()
    }
    return (
        <div>
            <div className="slide-in fixed-content-container">
                <div className="pb-40">
                <h2 className="text-2xl font-medium text-gray-600">Welcome!</h2>
                <h1 className="text-5xl font-bold text-gray-700">Let's create an account</h1>
                <h4 className="mt-1 text-gray-500">What are you registering as?</h4>
                </div>
                <div className="flex justify-center items-center">
                    <div className="content-container space-y-14">
                        <div className={'ring-inset rounded-md shadow-md relative text-center px-4 py-3 cursor-pointer ' + (selected ===  accountType.FREELANCER ? "ring-green-400 ring-2" : "ring-1 ring-gray-300")} onClick={() => {dispatch(getStep1(accountType.FREELANCER))}}>
                            <svg className="w-8 h-8 absolute inset-0 my-auto ml-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>                        
                            <div className="flex-col">
                                <h3 className="text-lg font-semibold text-gray-600">Freelancer</h3>
                                <p className="text-sm text-gray-500">I would like to manage my work</p>
                            </div>
                            <svg className={"w-8 h-8 absolute top-0 right-0 bottom-0 my-auto mr-4 text-green-400 "+(selected === accountType.FREELANCER ? "block": "hidden")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-center font-bold text-lg">OR</div>
                        <div className={'ring-inset rounded-md shadow-md relative text-center px-4 py-3 cursor-pointer ' + (selected ===  accountType.CLIENT ? "ring-green-400 ring-2" : "ring-1 ring-gray-300")}  onClick={() => {dispatch(getStep1(accountType.CLIENT))}}>
                            <svg className="w-8 h-8 absolute inset-0 my-auto ml-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                            </svg>
                            <div className="flex-col">
                                <h3 className="text-lg font-semibold text-gray-600">Client</h3>
                                <p className="text-sm text-gray-500">I have a project being worked on</p>
                            </div>
                            <svg className={"w-8 h-8 absolute top-0 right-0 bottom-0 my-auto mr-4 text-green-400 "+(selected === accountType.CLIENT ? "block": "hidden")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <Stepper activeStep={props.activeStep} maxSteps={4} />
                {props.activeStep !== 4 && <div className="space-x-4">
                    {props.activeStep > 1 && <Button disabled={false} type="secondary" onClick={() => {props.previousStep()}}>Back</Button>}
                    {<Button disabled={selected === accountType.NOT_SELECTED} type="primary" onClick={() =>  handleNextStep() }>Next</Button>}
                    
                </div>}
            </div>
        </div>
    )
}
