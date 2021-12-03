import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from '@firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Alert, AlertState } from '../../components/Alert/Alert'
import { Button } from '../../components/Button/Button'
import { Card } from '../../components/Card/Card'
import { Input } from '../../components/Input/Input'
import { Overlay } from '../../components/Overlay/Overlay'
import Table from '../../components/Table/Table'
import { db } from '../../firebase/firebase.config'

import { Link, useParams } from "react-router-dom";

const columns = [
    {
        header: 'Nombre',
        accessor: 'col1'
    },
    {
        header: 'Titulo',
        accessor: 'col2'
    },
    {
        header: 'Estado',
        accessor: 'col2'
    },
    {
        header: 'Promedio',
        accessor: 'col2'
    },
    {
        header: '',
        accessor: 'col2'
    }
]

const initialForm = {
    clase: '',
    name: '',
    career: '',
    semester: '',
    avg: '',
    email: '',
    image: ''
}

const viewOptions = [
    {
        path: "estudiantes",
        title: "Estudiantes",
        disable: false,
    },
    {
        path: "reportes",
        title: "Reportes",
        disable: true
    },
    {
        path: "actividades",
        title: "Actividades",
        disable: true

    },
    {
        path: "configuracion",
        title: "Configuración",
        disable: false
    },
]

export const Class = () => {

    const [view, setView] = useState(viewOptions[0])
    const [alertState, setAlertState] = useState({isOpen: false, description: "",  title: "", type: AlertState.SUCCESS})

    const renderView = () => {
        switch(view.path) {
            case 'estudiantes':
                return <StudentView setAlertState={setAlertState}/>
            case 'configuracion':
                return <ConfigView setAlertState={setAlertState}/>
            case 'reportes':
            case 'actividades':
                return (
                    <Card> 
                        <div className="m-2 h-52 flex flex-col items-center justify-center text-center border-2 border-dashed">
                            <h2 className="text-gray-600 font-medium">Módulo en desarrollo</h2>
                            <p className="text-gray-400 text-sm">Seguimos trabajando para traerte la mejor experiencia como docente a la hora de administrar tus clases </p>
                        </div>
                    </Card>
                )
            default:
                return null
        }
    }

    return (
        <div className="flex-grow p-4">

            <Card > 
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div>
                            <h4 className="font-medium text-xl text-gray-600">Base de datos</h4>
                        </div>
                        <div className="mt-5 flex lg:mt-0 lg:ml-4">
                            <FontAwesomeIcon className="text-gray-400 cursor-pointer" icon={["fas", "ellipsis-v"]} />
                        </div>
                    </div>
                    <div className="w-full flex items-end  overflow-x-auto border-b border-gray-200">
                            { viewOptions.map( (option) => (
                                <div 
                                    key={option.path}
                                    onClick={() => setView(option)} 
                                    className={`flex text-sm py-3 px-1 cursor-pointer mr-4 items-end ${option.path === view.path ? 'border-b-2  border-ora-500 text-ora-500' : 'text-gray-400'}`}>
                                    {option.title}
                                </div>
                            ))}
                    </div>
                </div>
            </Card>


            <div className="w-full">
                {renderView()}
            </div>

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

const StudentView = ({setAlertState}: {setAlertState: any}) => {
    const params = useParams<any>()
    const [form, setForm] = useState(initialForm)
    const [data, setData] = useState<any[]>([])

    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        const qry = query(collection(db, "estudiantes"), where("clase", "==", params.id));

        getDocs(qry).then((querySnapshot) => {
            const students: any[] = []
            querySnapshot.forEach((doc) => {
                students.push({id: doc.id, ...doc.data()});
            });
            setData(students)
        }).catch((e) => {
            console.log("Error while fetching");
        }) 
        
    }, [params.id])

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setForm({...form, [name]: value})
    }

    const handleSubmit = () => {
        addDoc(collection(db, "estudiantes"), {...form, clase: params.id}).then( (docRef) => {
            setData([{id: docRef.id,...form}, ...data,])
            setModalOpen(false)
            setAlertState({isOpen: true, description: "Ve a fondo el perfil del estudiante", title:"Estudiante dado de alta!", type: AlertState.SUCCESS})
        }).catch(err => {
            setAlertState({isOpen: true, description: "No se ha podido crear la clase", title:"Ocurrio un error", type: AlertState.ERROR})
        }).finally(() => {
            setForm(initialForm)
        })
    }

    const handleExit = () => {
        setForm(initialForm)
        setModalOpen(false)
    }

    return (
        <>
            <div className="w-full">
                <div className="w-max flex items-center mb-2">
                    <Button icon="plus" theme="primary" title="Agregar estudiante" onClick={() => setModalOpen(true)}/>
                </div>
                { data.length > 0 ? 
                    <Table>
                        <Table.Grid columns={columns} >
                            <Table.Body>
                                {data.map((student) => (
                                    <Table.Row key={student.id}>
                                        <Table.Cell>
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full" src={student.image} alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                                <div className="text-sm text-gray-500">{student.email}</div>
                                            </div>
                                        </div>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="text-sm text-gray-900">{student.career}</div>
                                            <div className="text-sm text-gray-500">{student.semester}° semestre</div>
                                        </Table.Cell>
                                        <Table.Cell>
                                            { student.avg > 70 ? 
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Aprobado
                                                </span> : 
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                    En riesgo
                                                </span>
                                            }
                                        </Table.Cell>
                                        <Table.Cell>
                                            <a href="/" className="hover:text-indigo-900 text-sm text-gray-500">
                                                {student.avg}
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Link to={`/estudiante/${student.id}`} className="text-ora-500 hover:text-ora-300 text-right text-sm font-medium" >
                                                Ver
                                            </Link>
                                        </Table.Cell>
                                    </Table.Row>
                                )) }
                            </Table.Body>
                        </Table.Grid>
                    </Table> :
                    <div className="w-full h-64 flex flex-col justify-center items-center bg-white rounded-md shadow-sm">
                        <h4 className="text-xl mb-2 font-medium text-gray-700">Aún no tienes registrados estudiantes</h4>
                        <p className="text-gray-400">Agrega <span className="text-ora-500 font-medium">estudiantes</span> a tu clase</p>
                    </div>
                }
            </div>
         
            <Overlay title="Agregar estudiante" open={modalOpen} setOpen={setModalOpen} onSuccess={handleSubmit} onExit={handleExit}> 
                <div className="w-full">
                    <form>
                            <div className="py-5 px-4 bg-white">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-2">
                                       <Input 
                                            type="textt" 
                                            label="Nombre Alumno" 
                                            value={form.name} 
                                            name="name" 
                                            required={false} 
                                            handleChange={handleChange} 
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-2">
                                        <Input 
                                            type="textt" 
                                            label="Carrera" 
                                            value={form.career} 
                                            name="career" 
                                            required={false} 
                                            handleChange={handleChange} 
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-2">
                                        <Input 
                                            type="number"
                                            label="Semestre"
                                            name="semester"
                                            min="1"
                                            max="14"
                                            value={form.semester}
                                            required={false}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-1">
                                        <Input 
                                            type="textt"
                                            label="Promedio"
                                            name="avg"
                                            value={form.avg}
                                            required={false}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-2">
                                        <Input 
                                            label="Correo" 
                                            type="email" 
                                            name="email" 
                                            value={form.email} 
                                            handleChange={handleChange} 
                                            required={false} 
                                           />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <Input 
                                            label="Foto de estudiante" 
                                            type="textt" 
                                            name="image" 
                                            value={form.image} 
                                            handleChange={handleChange} 
                                            required={false}
                                        />
                                    </div>
                                </div>
                            </div>
                    </form>
                </div>
            </Overlay>
        </>
    )
}

const classForm: any = {
    name: "",
    description: "",
    icon: "",
    color: "",
    units: 1,
    begDate: "",
    endDate: ""
}

const ConfigView = ({setAlertState}: {setAlertState: any}) => {
    const params = useParams<any>()
    const [form, setForm] = useState(classForm)
    const {name, icon, color, description, units, begDate, endDate} = form

    useEffect(() => {
        const classRef = doc(db, "clases", params.id);
        getDoc(classRef).then((docSnap) => {
            if (docSnap.exists()) {
                setForm({...docSnap.data()});
              } else {
                console.log("No such document!");
              }
        })
    }, [params.id])

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setForm({...form, [name]: value})
    }

    const handleUpdate = () => {
        const classRef = doc(db, "clases", params.id);
        updateDoc(classRef, form).then(() => {
            setAlertState({isOpen: true, description: "Se guardo correctamente la nueva configuración de la clase", title:"Clase actualizada", type: AlertState.SUCCESS})
        }).catch((err) => {
            setAlertState({isOpen: true, description: "No fue posible actualizar correctamente la configuración de la clase", title:"Error al actualizar", type: AlertState.ERROR})
        })
    }

    return (
        <div className="w-full ">
            <div className="w-full bg-white overflow-hidden border border-gray-100 rounded-lg shadow-sm">
                <div className="flex flex-col p-6">
                    <h2 className="font-medium mb-2 text-xl">Detalles generales</h2>
                    <p className="text-sm text-gray-400">Actualiza la información de la clase y ve los cambios reflejados imediatamente</p>
                </div>
                <form>
                            <div className="py-5 bg-white px-6">
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

                                    <div className="col-span-6 sm:col-span-2">
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

                                    <div className="col-span-6 sm:col-span-2">
                                        <Input 
                                            type="date"
                                            label="Fecha de inicio"
                                            name="begDate"
                                            value={begDate}
                                            required={false}
                                            handleChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-2">
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
                <div className="flex flex-row-reverse bg-gray-100 px-6 py-2">
                    <div className="w-max">
                        <Button theme="secondary" title="Guardar" onClick={handleUpdate} />
                    </div>
                </div>
            </div>

        </div>
    )
}