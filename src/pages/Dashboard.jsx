import { Announcements } from '../components/Announcements/Announcements'
import { Card } from '../components/Card/Card'
import { Follow } from '../components/Follow/Follow'
import { ProfileHeader } from '../components/Profile/ProfileHeader'

export const Dashboard = () => {
    return (
        <div className="w-full flex flex-col md:flex-row p-4">

            <div className="w-full md:w-4/6 mr-6">
                <ProfileHeader />
                <Card> 
                    <div className="m-2 h-96 flex flex-col items-center justify-center text-center border-2 border-dashed">
                        <h2 className="text-gray-600 font-medium">Módulo en desarrollo</h2>
                        <p className="text-gray-400 text-sm">Seguimos trabajando para traerte la mejor experiencia como docente a la hora de administrar tus clases </p>
                    </div>
                </Card>
            </div>

            <div className=" w-full md:w-2/6">
                <Announcements />
                <Follow />
            </div>
        </div>
    )
}
