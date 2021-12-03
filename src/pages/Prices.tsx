import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router'

export const Prices = () => {
    const history = useHistory()
    return (
        <div className="w-screen h-screen relative">
            <div className="absolute w-full h-3/4 z-0"/>
            <div className="pb-20">
                <div className="text-center py-20 px-4 bg-orange">
                    <h4 className="text-white text-lg md:text-xl font-medium ">PRECIOS</h4>
                    <h1 className="text-white text-2xl md:text-6xl font-bold mt-4 mb-6">El plan según tus necesidades</h1>
                    <h2 className="text-white text-lg md:text-2xl">Licencia para uso individual o licencia institucional a un gran precio</h2>
                </div>
                <div className="px-4 flex flex-col md:flex-row justify-center items-center pt-10">
                    <div className="flex flex-col border border-gray-100 justify-start bg-white w-full md:w-2/5 mr-6 shadow-md rounded-lg">
                        <div className="p-12">
                            <div className="mb-5 bg-gray-100 text-gray-900 w-max py-1 px-4 rounded-full text-center  font-semibold">INDIVIDUAL</div>
                            <div>
                                <p className="text-7xl font-bold mb-5"> $250 <span className="text-2xl font-medium text-gray-500">/mes</span></p>
                                <p className="text-gray-500 text-xl">Todo lo que necesitas para tus clases</p>
                            </div>
                            
                        </div>
                        <div className="w-full bg-gray-50 p-12 ">
                                <ul className="text-lg">
                                    <li className="flex mb-5"><FontAwesomeIcon className="text-green-500 mr-4" icon={["fas", "check"]}/> 
                                        <p className="text-gray-500 text-xl">Licencia de uso individual</p></li>
                                    <li className="flex mb-5"><FontAwesomeIcon className="text-green-500 mr-4" icon={["fas", "check"]}/> 
                                        <p className="text-gray-500 text-xl">Conecta con Classroom</p></li>
                                    <li className="flex mb-5"><FontAwesomeIcon className="text-green-500 mr-4" icon={["fas", "check"]}/> 
                                        <p className="text-gray-500 text-xl">Administra y visualiza reportes, clases y estudiantes</p></li>
                                    <li className="flex mb-5"><FontAwesomeIcon className="text-red-500 mr-4" icon={["fas", "times"]}/> 
                                        <p className="text-gray-500 text-xl">Acceso sin conexión a internet</p></li>
                                </ul>
                                <button onClick={() => history.push("/auth")} className="w-full mt-4 bg-grayish-dark-blue py-4 text-white font-normal text-lg rounded-lg">
                                    Inicia ahora
                                </button>
                            </div>
                    </div>
                    <div className="flex flex-col border border-gray-100  justify-start bg-white w-full md:w-2/5 shadow-md rounded-lg">
                        <div className="p-12">
                            <div className="mb-6 bg-gray-100 text-gray-900 w-max py-1 px-4 rounded-full text-center font-semibold">INSTITUCIONAL</div>
                            <div>
                                <p className="text-7xl font-bold mb-5"> $3200 <span className="text-2xl font-medium text-gray-500">/mes</span></p>
                                <p className="text-gray-500 text-xl">Todo el poder de Educapp para todos tus profesores</p>
                            </div>
                            
                        </div>
                        <div className="w-full bg-gray-50 p-12">
                                 <ul className="text-lg">
                                    <li className="flex mb-5"><FontAwesomeIcon className="text-green-500 mr-4" icon={["fas", "check"]}/> 
                                        <p className="text-gray-500 text-xl">Licencias ilimitadas para profesores</p></li>
                                    <li className="flex mb-5"><FontAwesomeIcon className="text-green-500 mr-4" icon={["fas", "check"]}/> 
                                        <p className="text-gray-500 text-xl">Conecta con Classroom</p></li>
                                    <li className="flex mb-5"><FontAwesomeIcon className="text-green-500 mr-4" icon={["fas", "check"]}/> 
                                        <p className="text-gray-500 text-xl">Administra y visualiza reportes, clases y estudiantes</p></li>
                                        <li className="flex mb-5"><FontAwesomeIcon className="text-green-500 mr-4" icon={["fas", "check"]}/> 
                                        <p className="text-gray-500 text-xl">Acceso sin conexión a internet</p></li>
                                </ul>
                                <button onClick={() => history.push("/auth")} className="w-full mt-4 bg-grayish-dark-blue py-4 text-white font-normal text-lg rounded-lg">
                                    Inicia ahora
                                </button>
                        </div>
                    </div>
                </div>
                <div className="flex px-4 justify-center items-center pt-8">
                    <div className="flex flex-col justify-center items-center md:flex-row py-9 px-12 bg-gray-50 rounded-lg shadow-md w-full md:w-5/6">
                        <div className="w-9/12 flex flex-col justify-center md:items-start items-center">
                            <div className="w-32 mb-5 shadow-sm bg-white text-grayish-dark-blue py-1 px-4 rounded-full text-center  font-semibold">PRUEBA</div>
                            <p className="text-lg text-justify md:text-left text-gray-600">Ten acceso a todas las capacidades de la aplicación con un período de <span className="font-bold">PRUEBA</span></p>
                        </div>
                        <div className="w-auto flex justify-center items-center mt-4 md:mt-0">
                            <button onClick={() => history.push("/auth")} className="bg-white rounded-lg py-4 px-8 text-lg shadow-md font-semibold">Prueba Gratis</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
