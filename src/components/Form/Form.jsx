import { useState } from "react"
import { SignUp } from "../SignUp/SignUp"
import { SignIn } from "../SignIn/SignIn"
import { useAuth } from "../../context/Auth"

const initialState = {
    username: '', 
    password: '', 
    email: '', 
    confirmationCode: ''
}

export const Form = () => {
    const { signUp, signIn, error, loading, clearError } = useAuth()
    const [state, setState] = useState(initialState)
    const [formType, setFormType] = useState('signIn')

    const updateForm = (event) => {
        const {name, value} = event.target
        setState({...state, [name]: value})
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        const {email, password } = state
        signIn(email, password)
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        const {username, password, email } = state
        signUp(username, password, email)
    }

    const handleChangeForm = (type) => {
        clearError()
        setFormType(type)
    }

    const renderForm = () => {
        switch(formType) {
            case 'signUp': 
                return (
                    <SignUp
                        loading={false}
                        signUp={handleSignUp} 
                        updateFormState={updateForm} 
                        changeFormType={() => handleChangeForm('signIn')} 
                    />
                )
            case 'signIn':
                return (
                    <SignIn 
                        loading={loading}
                        signIn={handleSignIn}
                        updateFormState={updateForm} 
                        changeToSignUp={() => handleChangeForm('signUp')} 
                        changeToForgot={() => handleChangeForm('forgotPassword')} 
                    />
                )
            default:
                return null
        }
    }

    return (
        <div className="w-9/12 lg:w-5/12  bg-white min-h-400 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
            {renderForm()}
            { error && <div className="w-10/12 mt-3 p-4 bg-gray-200 rounded-md text-center">
                <h6 className="text-red-500">{error}</h6>
            </div>}
        </div>
    )
}

