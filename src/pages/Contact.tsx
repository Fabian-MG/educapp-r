import React from 'react'
export const Contact = () => {
    return (
        <div className="relative w-full flex justify-center items-center">
                <div className="backg w-56 h-96 absolute left-0 top-10"/>
                <div className="backg w-56 h-96 absolute bottom-0 right-0"/>
                <div className="w-5/6 md:w-4/6 h-5/6 px-16 z-30">
                    <div className="flex flex-col text-center items-center">
                        <h1 className="font-bold text-4xl">Contacta a nuestro equipo</h1>
                        <h3 className="mt-6 text-lg font-light text-gray-400">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu</h3>
                    </div>
                    <div className="w-full py-6">
                        <form className="w-full pt-2">
                            <div className="flex w-full gap-8 mb-8">
                                <div className="flex-grow">
                                    <label className="block text-gray-600 mb-2 text-sm">Nombres(s)</label>
                                    <input className="w-full border border-gray-300 rounded-md h-10"  />
                                </div>
                                <div className="flex-grow ">
                                    <label className="block text-gray-600 mb-2 text-sm">Apellidos</label>
                                    <input className="w-full border border-gray-300 rounded-md h-10"  />
                                </div>
                            </div>
                            <div className="flex w-full gap-8 mb-8">
                                <div className="flex-grow">
                                    <label className="block text-gray-600 mb-2 text-sm">Nombre Institución</label>
                                    <input className="w-full border border-gray-300 rounded-md h-10"  />
                                </div>
                            </div>
                            <div className="flex w-full gap-8 mb-8">
                                <div className="flex-grow">
                                    <label className="block text-gray-600 mb-2 text-sm">Email</label>
                                    <input type="email" className="w-full border border-gray-300 rounded-md h-10"  />
                                </div>
                            </div>
                            <div className="flex w-full gap-8 mb-8">
                                <div className="flex-grow">
                                    <label className="block text-gray-600 mb-2 text-sm">Teléfono</label>
                                    <input className="w-full border border-gray-300 rounded-md h-10"  />
                                </div>
                            </div>
                            <div className="flex w-full gap-8 mb-8">
                                <div className="flex-grow">
                                    <label className="block text-gray-600 mb-2 text-sm">Mensaje</label>
                                    <input type="text" className="w-full h-36 border border-gray-300 rounded-md"  />
                                </div>
                            </div>
                            <div className="flex w-full gap-8 mb-8">
                                <button className="w-full text-center text-white bg-orange rounded-md p-4">
                                    ¡Envianos tu mensaje!
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}
