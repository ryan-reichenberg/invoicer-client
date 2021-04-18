import { combineReducers } from '@reduxjs/toolkit'
import registrationSlice from 'src/slices/registrationSlice'

const rootReducer = combineReducers({
    registration: registrationSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer