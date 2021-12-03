import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router'
import { useAuth } from '../../context/Auth'
import { Button } from '../Button/Button'

export const ProfileHeader = () => {
    const { user } = useAuth()
    const history = useHistory()

    return (
        <div className="w-full bg-white rounded-lg overflow-hidden h-48 flex flex-col shadow-md mb-4 md:mb-0 ">
            <div className="w-full h-4/6 flex justify-between px-6 items-center">
                <div className="h-full flex justify-center items-center">
                    { user.photoUrl ? 
                        <div className="w-20 h-20 mr-2 rounded-full bg-cover" style={{backgroundImage: `url("${user.photoUrl}")`}} /> :
                        <div className="w-20 h-20 mr-2 rounded-full bg-cover bg-gray-300 flex justify-center items-center">
                            <FontAwesomeIcon className="text-7xl text-white" icon={["fas", "user"]} />
                        </div>
                    }
                    <div className="flex flex-col items-start p-3">
                        <span className="text-gray-600 text-xs md:text-sm font-medium" >Bievenido,</span>
                        <span className="text-gray-900 text-lg md:text-xl font-bold">{user.displayName}</span>
                        <span className="text-gray-600 text-xs md:text-sm font-medium">Instituto Tecnológico de Querétaro</span>
                    </div>
                </div>
                <div className="hidden md:block">
                    <Button title="Editar Perfil" theme="normal" onClick={() => history.push("/configuracion")}/>
                </div>
            </div>
            <div className="w-full h-2/6 flex justify-between items-center bg-gray-50">
                <HeaderDetail title="Notificaciones" number="13"/>
                <HeaderDetail title="Actividades" number="5"/>
                <HeaderDetail title="Reportes" number="2"/>
            </div>
        </div>
    )
}

const HeaderDetail = ({title, number}) => (
    <div className="flex-1 flex items-center text-xs md:text-sm justify-center h-full border-r border-t border-gray-200">
        <span className="font-bold mr-1">{number}</span> {title}
    </div>
)
