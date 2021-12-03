import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactComponent as DesktopLaptop } from "../assets/images/illustration-editor-desktop.svg";
import { ReactComponent as IllustrationPhones } from "../assets/images/illustration-phones.svg";
import { ReactComponent as Desktop } from "../assets/images/illustration-laptop-desktop.svg";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'

export const Landing = () => {
    const history = useHistory()

    return (
        <div className="h-full">
            <div className="w-full h-16 pt-12 px-5 md:px-36 fixed flex items-center justify-between">
                <div className="flex w-2/3">
                    <h1 className="mr-12 text-3xl text-white font-semibold">Educapp</h1>
                    <div className="flex justify-between items-end">
                        <div className="hidden md:block mr-6 text-gray-100">
                            <Link to="/contacto" className="mr-1 text-base" href="#n"> Contacto </Link>
                            <FontAwesomeIcon className="text-white text-xs" icon={["fas", "chevron-down"]}/>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Link to="/precios" className="py-2 text-base font-normal w-24 text-white mr-4">Precios</Link>
                    <Link to="/auth" className="py-2 px-4 text-base font-normal w-24 text-white bg-orange-light rounded-lg mr-4">Registrate</Link>
                </div>
            </div>

            {/* Main section */}
            <div className="w-full h-3/4 bg-orange rounded-bl-medium flex flex-col justify-center items-center">
                <div className="sm:p-4 text-center text-white">
                    <h1 className="text-4xl md:text-6xl mb-6">Una plataforma para la educación</h1>
                    <h6 className="text-base md:text-lg font-extralight">Administra todas tus clases en un solo lugar, da seguimiento a tus alumnos, haz tu planeación, deja actividades y haz todo más sencillo</h6>
                </div>
                <div className="pt-7 w-1/5 flex justify-center">
                    <button className="py-2 text-sm sm:text-base font-medium  w-max p-2 text-orange-light bg-white rounded-lg" onClick={() => history.push("/auth")}>Comienza la prueba</button>
                </div>
            </div>

            {/* Laptop section */}
            <div className="w-full py-20 flex relative">
                
                <h1 className="hidden lg:block text-4xl absolute left-1/3 top-40">Diseñado para tus necesidades</h1>

                <div className="w-full lg:w-1/2 h-auto flex flex-col justify-center ">

                    <section className="p-10  lg:pl-40  mb-10 lg:mb-20">
                        <h3 className="text-2xl mb-6" >Todas tus clases en un mismo lugar</h3>
                        <p className="text-justify text-base text-gray-500 leading-8">
                            Podras dejar atras las hojas de excel para llevar registro de tus alumnos y sus calificaciones. Administra y monitorea todas tus clases y tus alumnos, de todas las instituciones donde trabajas en un solo lugar.
                        </p>
                    </section>

                    <section className="p-10  lg:pl-40">
                        <h3 className="text-2xl mb-6" >Los reportes hacen la diferencia</h3>
                        <p className="text-justify text-base text-gray-500 leading-8">
                            Podras ver reportes de tus clases y de tus estudiantes, tomando en cuenta las actividades, exámenes, la asistencia y muchas cosas más. Tendras reportes terminando cada unidad especificada y podras dar seguimiento de manera fácil a cada estudiante.
                        </p>
                    </section>
                
                </div>
                
                <div className="hidden lg:flex w-1/2 pl-40 justify-center items-center overflow-x-hidden">
                    <DesktopLaptop/>
                </div>
            </div>
            
            {/* Phone section */}
            <div className="w-full h-80 flex bg-grayish-dark-blue rounded-tr-medium rounded-bl-medium">
                <div className="w-1/2 hidden lg:flex justify-center items-center">
                    <IllustrationPhones className="z-10" />
                </div>
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start px-10">
                    <h3 className="text-3xl text-white mb-6">Amigable en todos los dispositivos</h3>
                    <p className="text-justify text-base text-grayish-dark leading-8">
                        Ya sea que lo veas desde tu computadora o celular, siempre contaras con una manera sencilla de administrar tus clases
                    </p>
                </div>
            </div>

            {/* Laptop section */}
            <div className="w-full py-32 flex relative">
                
                <div className="w-1/2 hidden lg:flex">
                    <Desktop/>
                </div>

                <div className="w-full lg:w-1/2 h-auto flex flex-col justify-center">

                    <section className="pl-10 pr-10 md:pl-32 md:pr-40 mb-10">
                        <h3 className="text-2xl mb-6" >Lo mejor es vincularlo con Classroom</h3>
                        <p className="text-justify text-base text-gray-500 leading-8">
                            Educapp te permitira vincular tus cuentas de Classroom y sincronizar todas tus clases, para que desde una misma app tengas el control de las actividades, calificaciones y mucho más.
                        </p>
                    </section>

                    <section className="pl-10 pr-10 md:pl-32 md:pr-40">
                        <h3 className="text-2xl mb-6" >Tu tiempo es lo más valioso</h3>
                        <p className="text-justify text-base text-gray-500 leading-8">
                            Sabemos lo complicado que es manejar todas tus clases y estar al  pendiente de sus actividades, por eso educapp es la plataforma para ti, hacemos todo el trabajo para que te enfoques en tus alumnos.
                        </p>
                    </section>
                
                </div>
        
            </div>

            {/* Phone section */}
            <div className="w-full h-80 flex justify-evenly items-center bg-grayish-dark-blue rounded-tr-medium ">
                <div className="h-4/6">
                    <h3 className="text-4xl text-white font-semibold">Educapp</h3>
                </div>
                <div className="h-4/6">
                    <h3 className="text-white font-bold mb-8">Producto</h3>
                    <div className="text-grayish-dark flex flex-col">
                        <Link to="/auth">Inicia sesión</Link>
                        <Link to="/precios">Precio</Link>
                    </div>
                </div>
                <div className="h-4/6">
                    <h3 className="text-white font-bold mb-8">Conecta</h3>
                    <div className="text-grayish-dark flex flex-col">
                        <Link to="/contacto">Contactanos</Link>
                        <Link to="/precios">Ver planes</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
