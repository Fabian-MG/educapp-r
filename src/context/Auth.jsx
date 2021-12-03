import { useLayoutEffect, useReducer } from "react"
import { createContext, useContext } from "react"
import { createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase.config"

const AuthContext = createContext()
const initialState = {
    user: null,
    error: null,
    loading: false,
}

const userReducer = (state, action) => {
    switch(action.type) {
        case 'START':
            return {...state, error: null, loading: true}
        case 'SIGNIN':
            return {...state, user: action.payload, error: null, loading: false}
        case 'SIGNUP':
            return {...state, user: action.payload, error: null, loading: false}
        case 'UPDATEUSER':
            return {...state, user: action.payload, error: null, loading: false}
        case 'ERROR': 
            return {...state, error: action.payload, loading: false}
        case 'CLEAR':
            return initialState
        default:
            break;
    }
}

const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(userReducer,initialState)
    const { user, error, loading } = state

    const signIn = async (email, password) => {
        try { 
            dispatch({type: 'START'})
            const userCredentials = await signInWithEmailAndPassword(auth, email, password)
            localStorage.setItem("educapp-user", JSON.stringify(userCredentials.user))
            dispatch({type: 'SIGNIN', payload: userCredentials.user})
        } catch(err) {
            dispatch({type: 'ERROR', payload: "Las credenciales son incorrectas"})
        }
    }

    const signUp = async (username, password, email) => {
        try {
            dispatch({type: 'START'})
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(auth.currentUser, {
                displayName: username
             })
            localStorage.setItem("educapp-user", JSON.stringify(userCredentials.user))
            dispatch({type: 'SIGNUP', payload: {...userCredentials.user, displayName: username}})
        } catch(err) {
            dispatch({type: 'ERROR', payload: err})
        }
    }

    const signOff = async () => { 
        try {
            await signOut(auth)
            localStorage.removeItem("educapp-user")
            dispatch({type: 'CLEAR'})
        } catch (err) {
            dispatch({type: 'ERROR', payload: err})
            console.log(err)
        }
    }

    const checkUser = () => {
        const userCredentials = JSON.parse(localStorage.getItem("educapp-user"))
        if(userCredentials)
            dispatch({type: 'SIGNIN', payload: userCredentials})
    }

    const clearError = () => {
        dispatch({type: 'CLEAR'})
    }

    const setUser = (user) => {
        dispatch({type: 'UPDATEUSER', payload: user})
    }

    useLayoutEffect(() => {
       checkUser()
    }, [])

    const value = { 
        user, 
        error, 
        clearError, 
        loading, 
        signIn, 
        signUp,
        signOff, 
        setUser
    }

    return (
        <AuthContext.Provider value={value} {...props}/>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw new Error('You must use Auth hook inside the provider')
    }
    
    return context
}

export { AuthProvider, useAuth }