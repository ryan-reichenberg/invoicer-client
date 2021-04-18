import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { postRegistration } from "src/api/authenticationAPI"
import { AppThunk } from "src/app/store"
import { AccountDetails, AccountType, initialDetails } from "src/types/RegistrationTypes"

interface RegistrationState {
    accountType: AccountType,
    accountDetails: AccountDetails,
    password: string,

}
  
const initialState: RegistrationState = {
    accountType: AccountType.NOT_SELECTED,
    accountDetails: initialDetails,
    password: '',
}
  
const registration = createSlice({
    name: 'registration',
    initialState,
    reducers: {
      getStep1(state, action: PayloadAction<AccountType>) {
        state.accountType = action.payload
      },
      getStep2(state, action: PayloadAction<AccountDetails>) {
        state.accountDetails = action.payload
      },
    }
  })

  export const {
    getStep1,
    getStep2,
  } = registration.actions
  export default registration.reducer
  
  export const register = (accountType: AccountType, accountDetails: AccountDetails, password: string): AppThunk => async dispatch => {
      try {
        await postRegistration(accountType, accountDetails, password)
      } catch(err) {
        
      }


  }