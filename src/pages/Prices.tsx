import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Prices = () => {
    return (
        <div className="w-full h-full relative">
            <div className="absolute w-full h-3/4 bg-orange" style={{zIndex: -10}}/>
            <div className="py-20 px-9">
                <div className="text-center">
                    <h4 className="text-white text-xl font-medium ">PRICING</h4>
                    <h1 className="text-white text-6xl font-bold mt-4 mb-6">The right price for you, whoever you are</h1>
                    <h2 className="text-white text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sed, est asperiores nam nisi</h2>
                </div>
                <div className="flex justify-center items-center pt-16">
                    <div className="flex flex-col justify-start bg-white w-2/5 mr-6 shadow-sm rounded-lg">
                        <div className="p-12">
                            <div className="mb-5 bg-gray-100 text-gray-900 w-max py-1 px-4 rounded-full text-center  font-semibold">INDIVIDUAL</div>
                            <div>
                                <p className="text-7xl font-bold mb-5"> $250 <span className="text-2xl font-medium text-gray-500">/mes</span></p>
                                <p className="text-gray-500 text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nesciunt</p>
                            </div>
                            
                        </div>
                        <div className="w-full bg-gray-50 p-12 ">
                                <ul className="text-lg">
                                    <li className="flex mb-5"><FontAwesomeIcon className="text-green-500 mr-4" icon={["fas", "check"]}/> 
                                        <p className="text-gray-500 text-xl">Pariatur quod similique</p></li>
                                    <li className="flex mb-5"><FontAwesomeIcon className="text-green-500 mr-4" icon={["fas", "check"]}/> 
                                        <p className="text-gray-500 text-xl">Sapiente libero doloribus modi nostrum</p></li>
                                    <li className="flex mb-5"><FontAwesomeIcon className="text-green-500 mr-4" icon={["fas", "check"]}/> 
                                        <p className="text-gray-500 text-xl">Vel ipsa ese repudiandae excepturi</p></li>
                                    <li className="flex mb-5"><FontAwesomeIcon className="text-red-500 mr-4" icon={["fas", "times"]}/> 
                                        <p className="text-gray-500 text-xl">Itaque cupiditate adipisci quibusdam</p></li>
                                </ul>
                                <button className="w-full mt-4 bg-grayish-dark-blue py-4 text-white font-normal text-lg rounded-lg">
                                    Get Started
                                </button>
                            </div>
                    </div>
                    <div className="flex flex-col  justify-start bg-white w-2/5 shadow-sm rounded-lg">
                        <div className="p-12">
                            <div className="mb-6 bg-gray-100 text-gray-900 w-max py-1 px-4 rounded-full text-center font-semibold">INSTITUCIONAL</div>
                            <div>
                                <p className="text-7xl font-bold mb-5"> $3200 <span className="text-2xl font-medium text-gray-500">/mes</span></p>
                                <p className="text-gray-500 text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nesciunt</p>
                            </div>
                            
                        </div>
                        <div className="w-full bg-gray-50 p-12">
                                <ul>
                                    <li className="flex mb-5"><FontAwesomeIcon className="text-green-500 mr-4" icon={["fas", "check"]}/> 
                                        <p className="text-gray-500 text-xl">Pariatur quod similique</p></li>
                                    <li className="flex mb-5"><FontAwesomeIcon className="text-green-500 mr-4" icon={["fas", "check"]}/> 
                                        <p className="text-gray-500 text-xl">Sapiente libero doloribus modi nostrum</p></li>
                                    <li className="flex mb-5"><FontAwesomeIcon className="text-green-500 mr-4" icon={["fas", "check"]}/> 
                                        <p className="text-gray-500 text-xl">Vel ipsa ese repudiandae excepturi</p></li>
                                    <li className="flex mb-5"><FontAwesomeIcon className="text-green-500 mr-4" icon={["fas", "check"]}/> 
                                        <p className="text-gray-500 text-xl">Itaque cupiditate adipisci quibusdam</p></li>
                                </ul>
                                <button className="w-full mt-4 bg-grayish-dark-blue py-4 text-white font-normal text-lg rounded-lg">
                                    Get Started
                                </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-8">
                    <div className="flex py-9 px-12 bg-gray-50 rounded-lg shadow-sm w-5/6">
                        <div className="w-9/12">
                            <div className="w-32 mb-5 shadow-sm bg-white text-grayish-dark-blue py-1 px-4 rounded-full text-center  font-semibold">PRUEBA</div>
                            <p className="text-lg text-gray-600">Get full access to all of standard license features for solo projects with a <span className="font-bold">Free Trial</span></p>
                        </div>
                        <div className="w-auto flex justify-center items-center">
                            <button className="bg-white rounded-lg py-4 px-8 text-lg shadow-md font-semibold">Prueba Gratis</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
