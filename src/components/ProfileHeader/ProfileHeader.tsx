import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useBackground } from "../../hooks"

export const ProfileHeader = () => {
    const image: any = useBackground('landscape')
    return (
        <div>
            <div className="w-auto mb-4 bg-white rounded-md shadow-sm overflow-hidden">
                <div className="w-auto h-44 bg-center bg-cover" style={{backgroundImage: `url("${image?.original}")`}}>
                    
                </div>
            
                <div className="flex justify-between px-6 py-4">
                    <div className="flex  ">
                        <div 
                            className="w-16 h-16 rounded-full bg-cover " 
                            style={{backgroundImage: `url("https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`}} 
                        />
                        <div className="px-4 flex flex-col justify-center">
                            <p className="text-xl text-main-font font-semibold">Fabian Alejandro Miranda Garcia</p>
                            <p className="text-sm text-main-light">Ingenieria en Sistemas Computacionales</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-ora-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <FontAwesomeIcon icon={["fas", "pen-fancy"]} className="-ml-1 mr-2 h-5 w-5 text-white" aria-hidden="true" />
                            Calificar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
