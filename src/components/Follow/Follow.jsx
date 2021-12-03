import { collection, getDocs, query, where } from '@firebase/firestore'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { db } from '../../firebase/firebase.config'
import { Button } from '../Button/Button'

export const Follow = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const getCollection = async () => {
            const students = []

            const qry = query(collection(db, "estudiantes"), where("avg", "<", 70));
            const snapshot = await getDocs(qry)
            snapshot.forEach((doc) => {
                students.push({id: doc.id, ...doc.data()});
            });
            setData(students)
        }

        getCollection()
    }, [])

    return (
        <div className="bg-white rounded-lg w-full shadow-lg p-4">
            <h6 className="font-medium">Estudiantes en peligro</h6>
            <div className="mt-4">
                { data.length > 0 ? data.map((student) => (
                    <ProfilePreview  key={student.id} name={student.name} username={student.avg} image={student.image} id={student.id}/>
                )) : 
                <div className="w-full text-center mb-4">
                    <span className="text-gray-400">No tienes ningún estudiante reprobando</span>
                </div>}
            </div>
            { data.length > 0 && <Button title="Ver todos" theme="normal"/> }
        </div>
    )
}

const ProfilePreview = ({name, username, image, id}) => {

    let history = useHistory();

    return (
        <div className="w-full mb-6 flex justify-between">
            <div className="flex items-center">
                <div className="w-8 h-8 mr-2 rounded-full bg-cover" style={{backgroundImage: `url("${image}")`}} />
                <div className="flex flex-col justify-start">
                    <span >{name}</span>
                    <span className="text-gray-400 text-sm">Promedio de {username}</span>
                </div>
            </div>
            <div className="flex justify-center items-center"> 
                <Button title="Ver" theme="pill" icon="arrow-right" onClick={() => history.push(`/estudiante/${id}`)}/>
            </div>
        </div>
    )
}