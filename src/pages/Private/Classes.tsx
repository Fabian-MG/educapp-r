import { addDoc, collection, getDocs, query, where } from "@firebase/firestore"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { Alert, AlertState } from "../../components/Alert/Alert"
import { Card } from "../../components/Card/Card"
import { ClassCard } from "../../components/Class/Class"
import { Input } from "../../components/Input/Input"
import { Overlay } from "../../components/Overlay/Overlay"
import { useAuth } from "../../context/Auth"
import { db } from "../../firebase/firebase.config"

const initialForm = {
    name: "",
    description: "",
    icon: "",
    color: "",
    units: 1,
    begDate: "",
    endDate: ""
}

export const Classes = () => {

    const { user } = useAuth()
    const [isModalOpen, setModalOpen] = useState(false)
    const [alertState, setAlertState] = useState({isOpen: false, description: "",  title: "", type: AlertState.SUCCESS})

    const [data, setData] = useState<any[]>([])

    const [form, setForm] = useState(initialForm)
    const {name, icon, color, description, units, begDate, endDate} = form

    useEffect(() => {
        const getCollection = async () => {
            const documents: any[] = []
            const qry = query(collection(db, "clases"), where("profesorID", "==", user.uid));
            const snapshot = await getDocs(qry)
            snapshot.forEach((doc) => {
                documents.push({id: doc.id, ...doc.data()})
            })
            setData(documents)
        }

        getCollection()
    }, [user])

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setForm({...form, [name]: value})
    }

    const handleSubmit = () => {
        addDoc(collection(db, "clases"), {...form, profesorID: user.uid}).then( (docRef) => {
            setData([{id: docRef.id, ...form}, ...data,])
            setModalOpen(false)
            setAlertState({isOpen: true, description: "Accede a la clase para configurarla", title:"Clase creada!", type: AlertState.SUCCESS})
        }).catch(err => {
            setAlertState({isOpen: true, description: "No se ha podido crear la clase", title:"Ocurrio un error", type: AlertState.ERROR})
        }).finally(() => {
            setForm(initialForm)
        })

    }

    const handleCancel = () => {
        setForm(initialForm)
        setModalOpen(false)
    }

    return (
        <div className="w-full h-full p-4 overflow-y-auto">
            <Card> 
                <div className="w-full flex justify-between items-center">
                    <div className="">
                        <p className="font-bold text-base text-gray-600">Clases</p>
                        <p className="font-normal text-sm text-gray-400">Instituto Tecnológico de Querétaro</p>
                    </div>

                </div>
            </Card>

            <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden"> 
                <div className="w-full flex flex-wrap">
                    
                    {
                        data.length > 0 && data.map((item) => (
                            <ClassCard key={item.id} item={item}/>
                        ))
                    }

                    <div className="w-full md:w-1/2 border-b border-r border-gray-200 h-56 p-6 flex justify-center items-center">
                        <div className="p-4 flex cursor-pointer" onClick={() => setModalOpen(true)}>
                            <FontAwesomeIcon icon={["fas", "plus"]} className="text-2xl text-gray-300" aria-hidden="true"/>
                            <h4 className="hidden sm:block text-gray-400 ml-4">Agregar clase</h4>
                        </div>
                    </div>
                  
                </div>
            </div>

            <Overlay open={isModalOpen} setOpen={setModalOpen} title="Añadir Clase" onSuccess={handleSubmit} onExit={handleCancel}>
                <div className="w-full">
                    <form>
                            <div className="py-5 px-4 bg-white">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                       <Input 
                                            type="textt" 
                                            label="Nombre clase" 
                                            value={name} 
                                            name="name" 
                                            required={false} 
                                            handleChange={handleChange} 
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <Input 
                                            type="number" 
                                            label="Número de unidades" 
                                            value={units} 
                                            name="units" 
                                            required={false} 
                                            handleChange={handleChange} 
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <Input 
                                            type="date"
                                            label="Fecha de inicio"
                                            name="begDate"
                                            value={begDate}
                                            required={false}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <Input 
                                            type="date"
                                            label="Fecha de termino"
                                            name="endDate"
                                            value={endDate}
                                            required={false}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <Input 
                                            label="Descripción" 
                                            required={false} 
                                            type="textarea" 
                                            name="description" 
                                            value={description} 
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <Input 
                                            label="Color etiqueta" 
                                            type="select" 
                                            name="color" 
                                            value={color} 
                                            handleChange={handleChange} 
                                            required={false} 
                                            options={[
                                                {label: "Morado", value: "indigo"},
                                                {label: "Verde", value: "green"},
                                                {label: "Naranja", value: "ora"},
                                                {label: "Azul", value: "blue"}
                                            ]}/>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <Input 
                                            label="Icono" 
                                            type="textt" 
                                            name="icon" 
                                            value={icon} 
                                            handleChange={handleChange} 
                                            required={false}
                                        />
                                    </div>
                                </div>
                            </div>
                    </form>
                </div>
            </Overlay>

            <Alert title="Clase creada!" description="Accede a la clase para configurarla" isOpen={alertState.isOpen} type={AlertState.SUCCESS} handleExit={() => setAlertState({...alertState, isOpen: false})} />
        </div>
    )
}
