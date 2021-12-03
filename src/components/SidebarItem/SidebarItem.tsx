import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export const SidebarItem = ({item, currentRoute, setRoute}: any) => {
    return (
        <Link to={item.link} onClick={() => setRoute(item.link)} className={`w-full px-2 py-1 mb-2 flex items-center cursor-pointer rounded-lg ${item.link === currentRoute ? 'bg-main-hover text-gray-500' : 'text-gray-400'}`}>
            <div className="text-base w-7 p-1 mr-2 ">
                <FontAwesomeIcon icon={["fas", item.icon]} />
            </div>
            <div className="font-medium">
                <p>{item.title}</p>
            </div>
        </Link>
    )
}
