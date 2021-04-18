import React from 'react'
import IStepperProps from "./IStepperProps";
import Stepper from "src/components/Stepper/Stepper";
import Button from "src/components/Button/Button";
import '../register.css';
import { ErrorMessage, Field, Form, Formik, FormikErrors } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'src/slices/registrationSlice';
import { RootState } from 'src/app/rootReducer';
interface FormValues {
    password: string;
    confirm: string;
}
export const SetPasswordStage = (props: IStepperProps) => {
    const state = useSelector((state:RootState) => state.registration)
    const dispatch = useDispatch();
    return (
        <div>
            <div className="slide-in">
                <div className="mb-36">
                <h2 className="text-2xl font-medium text-gray-600">Almost Done!</h2>
                <h1 className="text-5xl font-bold text-gray-700">We just need to set a password</h1>
                <h4 className="mt-1 text-gray-500">Passwords must be atleast 8 characters long</h4>
                </div>
                <div className="w-full flex justify-center items-center">
                <Formik
                    initialValues={{ password: '', confirm: '' }}
                    validate={values => {
                        let errors: FormikErrors<FormValues> = {};
                        if (!values.password) {
                            errors.password = 'Required';
                        }
                        if (!values.confirm) {
                            errors.confirm = 'Required';
                        }
                        if(values.password.length < 8) {
                            errors.password = 'Password must be atleast 8 characters';
                        } 
                        if (values.password !== values.confirm) { 
                            errors.confirm = 'Passwords do not match'
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        dispatch(register(state.accountType, state.accountDetails, values.password))
                        props.nextStep()
                    }}
                    >
                    {({ handleSubmit, isSubmitting, isValid, dirty }) => (
                        <Form className="full-width-container">
                            <div className="flex justify-center items-center">
                            <div className="w-1/2 space-y-20">
                                <div>
                                    <label htmlFor="password" >Password</label>
                                    <Field type="password" name="password" className="p-2 shadow rounded-md border border-gray-300 w-full" />
                                    <ErrorMessage name="password" component="div" className="text-red-800 mt-2" />
                                </div>
                                <div>
                                    <label htmlFor="confirm">Confirm</label>
                                    <Field type="password" name="confirm" className="p-2 shadow rounded-md border border-gray-300 w-full" />
                                    <ErrorMessage name="confirm" component="div" className="text-red-800" />
                                </div>
                            </div>
                            </div>
                            <div className="flex justify-between" style={{marginTop: "271px"}}>
                                <Stepper activeStep={props.activeStep} maxSteps={4} />
                                <div className="space-x-4">
                                    {props.activeStep > 1 && <Button disabled={false} type="secondary" onClick={() => props.previousStep()}>Back</Button>}
                                    {props.activeStep !== 4 && <Button disabled={!(isValid && dirty) || isSubmitting} type="primary" onClick={() => handleSubmit }>Register</Button>}
                                    
                                </div>
                            </div>
                        </Form>
                    )}
                    </Formik>
                </div>
                </div>
    </div>
    )
}
