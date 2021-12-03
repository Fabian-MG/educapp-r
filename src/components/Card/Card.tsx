import React from 'react'

type CardProps = {
    children?: React.ReactNode | undefined;
}

export const Card = ({children}: CardProps) => {
    return (
        <div className="w-full px-4 py-6 my-4 bg-white shadow-sm rounded-lg">
            {children}
        </div>
    )
}
