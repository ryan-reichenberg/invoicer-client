export enum AccountType {
    FREELANCER,
    CLIENT,
    NOT_SELECTED
}

export type AccountDetails = {
    [index:string]: any,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    companyName: string,
    streetAddress: string,
    city: string,
    state: string,
    postcode: string,
    country: string,
}

export const initialDetails: AccountDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    streetAddress: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
}
