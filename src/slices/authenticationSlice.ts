import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "src/utils/store";
import  * as userService from 'src/services/user-service';
interface AuthenticationState {
    isLoading:  boolean,
    isLoggedIn: boolean,
    token: string | null
    error: string | null
}
const initialState: AuthenticationState = {
    isLoading: false,
    isLoggedIn: false,
    token: null,
    error: null
}
function startLoading(state: AuthenticationState) {
    state.isLoading = true
}

const authentication = createSlice({
    name: 'authentication',
    initialState: initialState,
    reducers: {
        getLoginRequest: startLoading,
        getLogin(state, action: PayloadAction<string>) {
            state.isLoggedIn = true;
            state.token = action.payload
        },
        getLoginFailure(state, action:PayloadAction<string>) {

        }
    }
})

export const {
    getLoginRequest,
    getLogin,
    getLoginFailure
} = authentication.actions

export const login = (username: string, password: string): AppThunk => async dispatch => {
    try {
        dispatch(getLoginRequest())
        const token = await userService.login(username, password)
        dispatch(getLogin(token))
    } catch (err) {
        dispatch(getLoginFailure(err.toString()))
    }
}