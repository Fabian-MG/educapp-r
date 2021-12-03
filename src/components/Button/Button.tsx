import { IconName } from "@fortawesome/fontawesome-common-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Spinner } from "../Spinner/Spinner"

type ButtonProps = {
    theme?: string
    title: string
    icon?: string
    loading?: boolean
    disable?: any
    onClick: (a: any) => void
}

export const Button = ({onClick, theme = 'primary', title, icon, disable = false, loading = false}: ButtonProps) => {
    
    const themes: any = {
        primary: 'py-2 text-sm px-4 rounded-lg bg-ora-500 text-white font-medium my-2',
        secondary: 'py-2 text-sm px-4 rounded-lg bg-gray-800 text-white font-base my-2',
        normal: 'py-2 text-sm px-4 border border-gray-300 rounded-lg text-gray-600 font-medium my-2',
        pill: 'py-2 px-3 rounded-full bg bg-ora-100 text-ora-500 text-xs font-medium my-2'
    }
    return (
        <button 
            className={`flex justify-center items-center w-full duration-100 ${themes[theme]}`}
            disabled={disable} 
            onClick={onClick}
        >
            { loading && <Spinner/> }
            { icon && <FontAwesomeIcon className="mr-2" icon={["fas", icon as IconName]}/>}
            <span className={`${loading ? 'ml-4' : ''}`}>{title}</span>
        </button>
    )
}
