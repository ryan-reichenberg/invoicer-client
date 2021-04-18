import axios from "axios"
import { AccountDetails, AccountType } from "src/types/RegistrationTypes"

export async function postRegistration(accountType: AccountType, accountDetails: AccountDetails | null, password: string) {
    const url = `https://localhost:5000/api/authentication/register`
  
    return await axios.post(url, {
        accountType: accountType.toString,
        accountDetails,
        password
    })
  }
  