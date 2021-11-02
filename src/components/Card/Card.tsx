import React from 'react'

type CardProps = {
    children?: React.ReactNode | undefined;
}

export const Card = ({children}: CardProps) => {
    return (
        <div className="w-full p-4  my-4 bg-white shadow-sm rounded-lg px-4">
            {children}
        </div>
    )
}
