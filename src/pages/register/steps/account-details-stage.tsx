import React, { useState } from 'react'
import Button from 'src/components/Button/Button'
import Stepper from 'src/components/Stepper/Stepper'
import IStepperProps from './IStepperProps'
import '../register.css';
import FlagDropdown from 'src/components/Dropdown/FlagDropdown';
import { ErrorMessage, Field, FieldProps, Form, Formik, FormikErrors } from 'formik';
import { RootState } from 'src/app/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AccountDetails, initialDetails } from 'src/types/RegistrationTypes';
import { AsYouType, isValidNumber } from 'libphonenumber-js';
import { getStep2 } from 'src/slices/registrationSlice';

export const AccountDetailsStage = (props: IStepperProps) => {
    const state = useSelector((state: RootState) => state.registration)
    const [selected, setSelected] = useState<string>(state.accountDetails.country ? state.accountDetails.country : "");
    const [phone, setPhone]  = useState(state.accountDetails.phone ? state.accountDetails.phone : "");
    const dispatch = useDispatch();
    const asYouType = new AsYouType()
    const onChange = (e: React.FormEvent<HTMLInputElement>, setFieldValue: Function) => {
        setPhone(asYouType.input("+"+e.currentTarget.value));
        setFieldValue("phone", asYouType.getNumber()?.number)
        let country = asYouType.getNumber()?.country
        if (country != null){
            setSelected(country);
            setFieldValue("country", country)
        } else {
            setSelected("");
            setFieldValue("country", "")
        }
      };
    return (
        <div>
            <div className="slide-in">
                    <div className="pb-20">
                    <h1 className="text-5xl font-bold text-gray-700">We just need a few details</h1>
                    <h4 className="mt-1 text-gray-500">Enter the required information below</h4>
                    </div>
                    <div className="flex justify-center items-center">
                        <Formik  initialValues={state.accountDetails}
                            onSubmit={(values, { setSubmitting }) => {
                                dispatch(getStep2(values as AccountDetails))
                                props.nextStep()
                            }}
                            validate={values => {
                                let errors: FormikErrors<AccountDetails> = {};
                                let fields = Object.keys(initialDetails);
                                for (let field of fields) {
                                    if (!values[field]) {
                                        errors[field] = 'required';
                                    } else if (field === 'phone' && !isValidNumber(values.phone)) {
                                        errors.phone = 'Invalid phone number'
                                    } else if (field === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                                        errors.email = 'Invalid email address'
                                    }
                                }      
                                return errors;
                            }}
                        >
                        {({  handleSubmit, isSubmitting, isValid, dirty, setFieldValue, values }) => {
                            
                            return (
                            <Form className="full-width-container space-y-6">
                                <div className="flex space-x-6">
                                    <div className="w-1/2">
                                        <label htmlFor="firstName" >First Name</label>
                                        <Field type="text" name="firstName" className="p-2 mt-1 shadow rounded-md border border-gray-300 w-full" />
                                        <ErrorMessage name="firstName" component="div" className="text-red-800 mt-2" />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="lastName">Last Name</label>
                                        <Field type="text" name="lastName" className="p-2 mt-1 shadow rounded-md border border-gray-300 w-full" />
                                        <ErrorMessage name="lastName" component="div" className="text-red-800 mt-2" />
                                    </div>
                                </div>
                                <div className="flex space-x-6">
                                    <div className="w-3/5">
                                        <label htmlFor="email">Email Address</label>
                                        <Field type="text" name="email" className="p-2 mt-1 shadow rounded-md border border-gray-300 w-full" />
                                        <ErrorMessage name="email" component="div" className="text-red-800 mt-2" />
                                    </div>
                                    <div className="w-2/5">
                                        <label htmlFor="phone">Phone</label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm ">
                                                +
                                            </span>
                                            </div>
                                            <Field type="text" name="phone" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" value={phone.substr(1)} onChange={(e:  React.FormEvent<HTMLInputElement>) => onChange(e, setFieldValue)}/>
                                        </div>
                                    <ErrorMessage name="phone" component="div" className="text-red-800 mt-2" />
                                </div>
                                </div>
                                <div className="flex space-x-6">
                                    <div className="w-full">
                                        <label htmlFor="companyName">Comapny Name</label>
                                        <Field type="text" name="companyName" className="p-2 mt-1 shadow rounded-md border border-gray-300 w-full" />
                                        <ErrorMessage name="companyName" component="div" className="text-red-800 mt-2" />
                                    </div>
                                </div>
                                <div className="flex space-x-6">
                                    <div className="w-full">
                                        <label htmlFor="streetAddress">Street Address</label>
                                        <Field type="text" name="streetAddress" className="p-2 mt-1 shadow rounded-md border border-gray-300 w-full" />
                                        <ErrorMessage name="streetAddress" component="div" className="text-red-800 mt-2" />
                                    </div>
                                </div>
                                <div className="flex space-x-6">
                                    <div className="w-1/3">
                                        <label htmlFor="city">City</label>
                                        <Field type="text" name="city" className="p-2 mt-1 shadow rounded-md border border-gray-300 w-full" />
                                        <ErrorMessage name="city" component="div" className="text-red-800 mt-2" />
                                    </div>
                                    <div className="w-1/3">
                                        <label htmlFor="state">State/Province</label>
                                        <Field type="text" name="state" className="p-2 shadow rounded-md border border-gray-300 w-full" />
                                        <ErrorMessage name="state" component="div" className="text-red-800 mt-2" />
                                    </div>
                                    <div className="w-1/3">
                                        <label htmlFor="postcode">ZIP/Postal Code</label>
                                        <Field type="text" name="postcode" className="p-2 mt-1 shadow rounded-md border border-gray-300 w-full" />
                                        <ErrorMessage name="postcode" component="div" className="text-red-800 mt-2" />
                                    </div>
                                </div>
                                <div className="flex space-x-6">
                                    <div className="w-2/5">
                                        <span className="text-gray-700">Country/Region</span>
                                        <Field name="country">
                                            {({ field, form, meta }: FieldProps) => (
                                                <FlagDropdown selected={selected} field={field} meta={meta} form={form} onSelect={(code) => { setSelected(code)}} searchable={true} />
                                            )}
                                        </Field>
                                        <ErrorMessage name="country" component="div" className="text-red-800 mt-2" />
                                    </div>
                                </div>
                                <div className="flex justify-between" style={{ marginTop: "54px"}}>
                                    <Stepper activeStep={props.activeStep} maxSteps={4} />
                                    <div className="space-x-4">
                                        {props.activeStep > 1 && <Button disabled={false} type="secondary" onClick={() => props.previousStep()}>Back</Button>}
                                        {props.activeStep !== 4 && <Button disabled={(!isValid || values === initialDetails)  || isSubmitting} type="primary" onClick={ handleSubmit }>Next</Button>}
                                        
                                    </div>
                                </div>
                            </Form>
                        )}}
                    </Formik>
                    </div>
                </div>
        </div>
    )
}
