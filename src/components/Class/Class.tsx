import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const ClassCard = ({item} : any) => {
    return (
        <div className="w-full md:w-1/2 border-b border-r border-gray-200 h-56 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-center ">
                <div className={`bg-${item.color}-50 p-2 px-3 rounded-md`}>
                    <FontAwesomeIcon icon={["fas", item.icon]} className={`text-base text-${item.color}-400`}/>
                </div>
                <div className="">
                    <Link className="cursor-pointer" to={`/clases/${item.id}`}>
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} className="text-lg text-gray-300"/>
                    </Link>
                </div>
            </div>
            <div className="">
                <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
                <p className="mt-3 text-gray-500 text-sm truncate">
                    {item.description}
                </p>
            </div>
        </div>
    )
}
