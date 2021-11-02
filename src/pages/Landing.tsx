import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactComponent as DesktopLaptop } from "../assets/images/illustration-editor-desktop.svg";
import { ReactComponent as IllustrationPhones } from "../assets/images/illustration-phones.svg";
import { ReactComponent as Desktop } from "../assets/images/illustration-laptop-desktop.svg";
import { Link } from 'react-router-dom';



export const Landing = () => {
    return (
        <div className="h-full">
            <div className="w-full h-16 pt-12 px-36 fixed flex items-center justify-between">
                <div className="flex w-2/3">
                    <h1 className="mr-12 text-3xl text-white font-semibold">Educapp</h1>
                    <div className="flex justify-between items-end">
                        <div className="mr-6 text-gray-100">
                            <Link to="/" className="mr-1 text-base" href="#n"> Product </Link>
                            <FontAwesomeIcon className="text-white text-xs" icon={["fas", "chevron-down"]}/>
                        </div>
                        <div className="mr-6 text-gray-100">
                            <Link to="/" className="mr-1 text-base" href="#n"> Company </Link>
                            <FontAwesomeIcon className="text-white text-xs" icon={["fas", "chevron-down"]}/>
                        </div>
                        <div className="mr-6 text-gray-100">
                            <Link to="/contacto" className="mr-1 text-base" href="#n"> Connect </Link>
                            <FontAwesomeIcon className="text-white text-xs" icon={["fas", "chevron-down"]}/>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Link to="/precios" className="py-2 text-base font-normal w-24 text-white mr-4">Precios</Link>
                    <button className="py-2 text-base font-normal w-24 text-white bg-orange-light rounded-lg mr-4">Login</button>
                </div>
            </div>

            {/* Main section */}
            <div className="w-full h-3/4 bg-orange rounded-bl-medium flex flex-col justify-center items-center">
                <div className="p-4 text-center text-white">
                    <h1 className="text-6xl mb-6">A modern publising platform</h1>
                    <h6 className="text-lg font-extralight">Grow your audience and build your online brand</h6>
                </div>
                <div className="pt-7 w-1/5 flex">
                    <button className="py-2 text-base font-medium w-36 text-white bg-orange-light rounded-lg mr-4">Start for free</button>
                    <button className="py-2 text-base font-medium w-36 text-orange-light bg-white rounded-lg">Learn More</button>
                </div>
            </div>

            {/* Laptop section */}
            <div className="w-full py-20 flex relative">
                
                <h1 className="text-4xl absolute left-1/3 top-40">Designed for the future</h1>

                <div className="w-1/2 h-auto flex flex-col justify-center ">

                    <section className="pl-40 mb-20">
                        <h3 className="text-2xl mb-6" >Introducing an extensible editor</h3>
                        <p className="text-justify text-base text-gray-500 leading-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur iure cupiditate excepturi dicta eligendi dolore molestiae? Unde, fuga. Voluptatum impedit asperiores est amet dolorum nulla distinctio libero possimus quos.
                        </p>
                    </section>

                    <section className="pl-40">
                        <h3 className="text-2xl mb-6" >Robust content management</h3>
                        <p className="text-justify text-base text-gray-500 leading-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur iure cupiditate excepturi dicta eligendi dolore molestiae? Unde, fuga. Voluptatum impedit asperiores est amet dolorum nulla distinctio libero possimus quos.
                        </p>
                    </section>
                
                </div>
                
                <div className="w-1/2 pl-40 flex justify-center items-center overflow-x-hidden">
                    <DesktopLaptop/>
                </div>
            </div>
            
            {/* Phone section */}
            <div className="w-full h-80 flex bg-grayish-dark-blue rounded-tr-medium rounded-bl-medium">
                <div className="w-1/2 flex justify-center items-center">
                    <IllustrationPhones className="z-10" />
                </div>
                <div className="w-1/2 h-full flex flex-col justify-center items-start px-10">
                    <h3 className="text-3xl text-white mb-6">State of the Art Infrastructure</h3>
                    <p className="text-justify text-base text-grayish-dark leading-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt cumque, deleniti libero nulla dignissimos harum, earum accusamus architecto ipsa neque perspiciatis totam eveniet molestiae maxime maiores iure, tenetur sed.
                    </p>
                </div>
            </div>

            {/* Laptop section */}
            <div className="w-full py-32 flex relative">
                
                <div className="w-1/2 flex">
                    <Desktop/>
                </div>

                <div className="w-1/2 h-auto flex flex-col justify-center">

                    <section className="pl-32 pr-40 mb-10">
                        <h3 className="text-2xl mb-6" >Introducing an extensible editor</h3>
                        <p className="text-justify text-base text-gray-500 leading-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur iure cupiditate excepturi dicta eligendi dolore molestiae? Unde, fuga. Voluptatum impedit asperiores est amet dolorum nulla distinctio libero possimus quos.
                        </p>
                    </section>

                    <section className="pl-32 pr-40">
                        <h3 className="text-2xl mb-6" >Robust content management</h3>
                        <p className="text-justify text-base text-gray-500 leading-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur iure cupiditate excepturi dicta eligendi dolore molestiae? Unde, fuga. Voluptatum impedit asperiores est amet dolorum nulla distinctio libero possimus quos.
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
                    <h3 className="text-white font-bold mb-8">Product</h3>
                    <ul className="text-grayish-dark">
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Overview</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="h-4/6">
                    <h3 className="text-white font-bold mb-8">Company</h3>
                    <ul className="text-grayish-dark">
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                    </ul>
                </div>
                <div className="h-4/6">
                    <h3 className="text-white font-bold mb-8">Connect</h3>
                    <ul className="text-grayish-dark">
                        <li>Overview</li>
                        <li>Pricing</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
