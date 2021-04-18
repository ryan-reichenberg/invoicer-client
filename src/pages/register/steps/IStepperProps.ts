export default interface IStepperProps {
    nextStep: () => void
    previousStep: () => void
    onChange: () => void
    onSubmit: () => void;
    activeStep: number

}