import { updateProfile, User } from "@firebase/auth"
import { useEffect, useState } from "react"
import { Alert, AlertState } from "../../components/Alert/Alert"
import { Button } from "../../components/Button/Button"
import { Card } from "../../components/Card/Card"
import { Input } from "../../components/Input/Input"
import { useAuth } from "../../context/Auth"
import { auth } from "../../firebase/firebase.config"

const classForm: any = {
    displayName: "",
    photoUrl: "",
    email: "",
}

export const Configuration = () => {
    const { user, setUser } = useAuth()
    const [form, setForm] = useState(classForm)
    const [alertState, setAlertState] = useState({isOpen: false, description: "",  title: "", type: AlertState.SUCCESS})

    useEffect(() => {
        const { displayName, photoUrl, email } = user
        
        setForm({displayName, email, photoUrl: photoUrl ? photoUrl : ''})
    }, [user])

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setForm({...form, [name]: value})
    }

    const handleUpdate = () => {
        updateProfile(auth.currentUser as User, form).then(() => {
            setUser({...user, ...form})
            setAlertState({isOpen: true, description: "Se guardo correctamente la nueva configuración de la clase", title:"Clase actualizada", type: AlertState.SUCCESS})
        }).catch((err) => {
            setAlertState({isOpen: true, description: "No fue posible actualizar correctamente la configuración de la clase", title:"Error al actualizar", type: AlertState.ERROR})
        })
    }

    return (
        <div className="w-full px-4 pt-4">
            <Card> 
                <div className="w-full flex justify-between items-center">
                    <div className="">
                        <p className="font-bold text-base text-gray-600">Configuración cuenta</p>
                        <p className="font-normal text-sm text-gray-400">Cambia tus datos si lo deseas</p>
                    </div>

                </div>
            </Card>
            
            <div className="w-full bg-white overflow-hidden border border-gray-100 rounded-lg shadow-md">
                <div className="flex flex-col p-6">
                    <h2 className="font-medium mb-2 text-xl">Datos personales</h2>
                    <p className="text-sm text-gray-400">Actualiza tu información y ve los cambios reflejados imediatamente</p>
                </div>
                <form>
                            <div className="py-5 bg-white px-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                       <Input 
                                            type="textt" 
                                            label="Nombre del tutor" 
                                            value={form.displayName} 
                                            name="displayName" 
                                            required={false} 
                                            handleChange={handleChange} 
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <Input 
                                            type="email" 
                                            label="Correo electrónico" 
                                            value={form.email} 
                                            name="email" 
                                            required={false} 
                                            handleChange={handleChange} 
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <Input 
                                            type="textt" 
                                            label="URL de imágen" 
                                            value={form.photoUrl} 
                                            name="photoUrl" 
                                            required={false} 
                                            handleChange={handleChange} 
                                        />
                                    </div>
                                </div>
                            </div>
                </form>
                <div className="flex flex-row-reverse bg-gray-100 px-6 py-2">
                    <div className="w-max">
                        <Button theme="secondary" title="Guardar" onClick={handleUpdate} />
                    </div>
                </div>
            </div>

            <Alert title="Usuario actualizado" description="Ya puedes visualizar los cambios" isOpen={alertState.isOpen} type={AlertState.SUCCESS} handleExit={() => setAlertState({...alertState, isOpen: false})} />

        </div>
    )
}
