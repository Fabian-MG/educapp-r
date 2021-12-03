/* eslint-disable jsx-a11y/anchor-is-valid */
import { doc, getDoc, updateDoc } from '@firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Alert, AlertState } from '../components/Alert/Alert'
import { Card } from '../components/Card/Card'
import { Input } from '../components/Input/Input'
import { Overlay } from '../components/Overlay/Overlay'
import { ProfileHeader } from '../components/ProfileHeader/ProfileHeader'
import Stat from '../components/Stat/Stat'
import { db } from '../firebase/firebase.config'

const initialForm = {
   avg: "",
   attendanceAvg: "",
   activitiesAvg: "",
}

export const Student = () => {
    
    const params = useParams<any>()
    const [student, setStudent] = useState<any>(null)
    const [isModalOpen, setModalOpen] = useState(false)

    const[form, setForm] = useState(initialForm)
    const {avg, attendanceAvg, activitiesAvg} = form

    const [alertState, setAlertState] = useState({isOpen: false, description: "",  title: "", type: AlertState.SUCCESS})

    useEffect(() => {
        const studentRef = doc(db, "estudiantes", params.id);
        getDoc(studentRef).then((docSnap) => {
            if (docSnap.exists()) {
                setStudent({...docSnap.data()});
              } else {
                console.log("No se encontro al estudiante");
              }
        })
    }, [params.id])

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setForm({...form, [name]: value})
    }

    const handleSubmit = () => {
        const classRef = doc(db, "estudiantes", params.id);
        updateDoc(classRef, form).then( () => {
            setStudent({...student, ...form})
            setAlertState({isOpen: true, description: "Se actualizaron correctamente los promedios", title:"Clase actualizada", type: AlertState.SUCCESS})
            setModalOpen(false)
        }).catch(err => {
            setAlertState({isOpen: true, description: "No fue posible actualizar los promedios", title:"Error al actualizar", type: AlertState.ERROR})
        }).finally(() => {
            setForm(initialForm)
        })

    }

    const handleCancel = () => {
        setForm(initialForm)
        setModalOpen(false)
    }

    return (
        <div className="flex-grow py-9 pl-9 pr-9"> 
            {student && <ProfileHeader student={student} handleEdit={() => setModalOpen(true)}/>}
 
            { student && <div className="grid grid-cols-3 gap-2">
                <Stat>
                    <Stat.Header>
                        <Stat.Icon>
                            <FontAwesomeIcon className="text-white" icon={["fas","chart-pie"]} />
                        </Stat.Icon>
                        <Stat.Labels>
                            <Stat.Title>Promedio Total</Stat.Title>
                            <Stat.Value>
                                {student.avg}%
                                <Stat.Reference type="positive">5.4%</Stat.Reference>    
                            </Stat.Value>
                        </Stat.Labels>
                    </Stat.Header>
                    <Stat.Footer>
                        <a href="#">Ver todo</a>
                    </Stat.Footer>
                </Stat>
                <Stat>
                    <Stat.Header>
                        <Stat.Icon>
                            <FontAwesomeIcon className="text-white" icon={["fas","tasks"]} />
                        </Stat.Icon>
                        <Stat.Labels>
                            <Stat.Title>Tareas Entregadas</Stat.Title>
                            <Stat.Value>
                                {student.activitiesAvg}%
                                <Stat.Reference type="positive">10%</Stat.Reference>
                            </Stat.Value>
                        </Stat.Labels>
                    </Stat.Header>
                    <Stat.Footer>
                        <a href="#">Ver todo</a>
                    </Stat.Footer>
                </Stat>
                <Stat>
                    <Stat.Header>
                        <Stat.Icon>
                            <FontAwesomeIcon className="text-white" icon={["fas","clipboard"]} />
                        </Stat.Icon>
                        <Stat.Labels>
                            <Stat.Title>Asistencia</Stat.Title>
                            <Stat.Value>
                                {student.attendanceAvg}%
                                <Stat.Reference type="negative">7.5%</Stat.Reference>
                            </Stat.Value>
                        </Stat.Labels>
                    </Stat.Header>
                    <Stat.Footer>
                        <a href="#">Ver todo</a>
                    </Stat.Footer>
                </Stat>
            </div>}

            <Card> 
                <div className="m-2 h-52 flex flex-col items-center justify-center text-center border-2 border-dashed">
                    <h2 className="text-gray-600 font-medium">Módulo en desarrollo</h2>
                    <p className="text-gray-400 text-sm">Seguimos trabajando para traerte la mejor experiencia como docente a la hora de administrar tus clases </p>
                </div>
            </Card>

            <Overlay open={isModalOpen} setOpen={setModalOpen} title="Editar promedios" onSuccess={handleSubmit} onExit={handleCancel}>
                <div className="w-full">
                    <form>
                            <div className="py-5 px-4 bg-white">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-2">
                                       <Input 
                                            type="number" 
                                            label="Promedio general" 
                                            value={avg} 
                                            name="avg" 
                                            min={0}
                                            max={100}
                                            required={false} 
                                            handleChange={handleChange} 
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-2">
                                        <Input 
                                            type="number" 
                                            min={0}
                                            max={100}
                                            label="Actividades completadas" 
                                            value={activitiesAvg} 
                                            name="activitiesAvg" 
                                            required={false} 
                                            handleChange={handleChange} 
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-2">
                                        <Input 
                                            type="number"
                                            min={0}
                                            max={100}
                                            label="Asistencia"
                                            name="attendanceAvg"
                                            value={attendanceAvg}
                                            required={false}
                                            handleChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                    </form>
                </div>
            </Overlay>

            <Alert 
                title={alertState.title} 
                type={AlertState.SUCCESS}
                isOpen={alertState.isOpen} 
                description={alertState.description} 
                handleExit={() => 
                    setAlertState({...alertState, isOpen: false})
                } 
            />
        </div>
    )
}
