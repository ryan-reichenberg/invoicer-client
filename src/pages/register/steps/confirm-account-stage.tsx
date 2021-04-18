import React from 'react'
import IStepperProps from './IStepperProps'
import inbox from '../../../assets/inbox.svg';
import Stepper from 'src/components/Stepper/Stepper';

export const ConfirmAccountStage = (props: IStepperProps) => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <img src={inbox} alt="" />
                <h3 className="text-3xl text-gray-700 pb-4 pt-8 font-semibold">Check your inbox!</h3>
                <p className="text-gray-500 font-medium">Didn't receive an email? Click <span className="text-green-400">here</span> to resend!</p>
                <p className="text-gray-400">Already confirmed your account? Try refreshing the page!</p>
            </div>
            <div className="flex justify-between p-4 mt-44">
                <Stepper activeStep={props.activeStep} maxSteps={4} />
            </div>
        </div>
    )
}
