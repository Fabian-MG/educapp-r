import { useBackground } from "../../hooks"
import { Button } from "../Button/Button"

export const ProfileHeader = ({student, handleEdit}: any) => {
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
                            style={{backgroundImage: `url("${student.image}")`}} 
                        />
                        <div className="px-4 flex flex-col justify-center">
                            <p className="text-xl text-main-font font-semibold">{student.name}</p>
                            <p className="text-sm text-main-light">{student.career}</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        
                        <Button title="Calificar" icon="pen-fancy" onClick={handleEdit}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
