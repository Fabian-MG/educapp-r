import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import './Alert.css'

export enum AlertState {
    SUCCESS,
    ERROR
}

type AlertProps = {
    type: AlertState,
    title: string
    description: string
    isOpen: boolean
    handleExit: () => void
}

export const Alert = ({type, title, description, isOpen, handleExit}: AlertProps) => {
    useEffect(() => {
        if(isOpen === true) {
            setTimeout(() => {
                handleExit()
            }, 1500)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen])

    return (
        <div className={`alert ${isOpen ? 'active opacity-100' : 'opacity-0'}`}>
            <div className="h-full flex justify-center ">
               { type === AlertState.SUCCESS && <FontAwesomeIcon className="text-xl text-green-400" icon={["fas", "check-circle"]} /> }
               { type === AlertState.ERROR && <FontAwesomeIcon className="text-xl text-red-400" icon={["fas", "times-circle"]} /> }
            </div>
            <div className="px-6 flex-auto flex flex-col">
                <h4 className="font-bold text-sm">{title}</h4>
                <p className="text-xs text-gray-400">{description}</p>
            </div>
            <div className="h-full flex justify-center">
                <FontAwesomeIcon className="text-lg text-gray-300 cursor-pointer" icon={["fas", "times"]} onClick={handleExit}/>
            </div>
        </div>
    )
}
