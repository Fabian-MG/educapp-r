import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export const SignIn = ({signIn, changeToSignUp, updateFormState, loading}) => {
    return (
        <div className="flex w-5/6 flex-col  justify-center items-center">
            <div className="w-full py-3 text-center">
              <img className="mx-auto h-12 w-auto mb-4" src="https://tailwindui.com/img/logos/workflow-mark-orange-500.svg" alt="Workflow" />
              <h2 className="font-extrabold text-3xl">Inicia Sesión</h2>
              <h6>O crea una <span className="text-ora-500 cursor-pointer" onClick={changeToSignUp}>nueva cuenta</span></h6>
            </div>

            <div className="w-full my-3 py-1">
              Inicia con:
              <div className="w-full mt-1 flex justify-between">
                <div className="cursor-pointer p-2 w-3/12 border rounded-md border-gray-300 flex justify-center">
                  <FontAwesomeIcon icon={["fab", "facebook"]} color="gray" />
                </div>
                <div className="cursor-pointer p-2 w-3/12 border rounded-md border-gray-300 flex justify-center red">
                  <FontAwesomeIcon icon={["fab", "twitter"]} color="gray"/>
                </div>
                <div className="cursor-pointer p-2 w-3/12 border rounded-md border-gray-300 flex justify-center">
                  <FontAwesomeIcon icon={["fab", "github"]} color="gray"/>
                </div>
              </div>
            </div>

            <div className="w-full pt-3 flex justify-between items-center">
              <div className="border-t w-3/12 h-0 border-gray-300"></div>
              <span className="text-gray-400 text-center text-md">O continua con</span>
              <div className="border-t w-3/12 h-0 border-gray-300"></div>
            </div>

            <form className="w-full grid-cols-1">
              <div className="col-span-1 mb-4 mt-4">
                <Input label='Correo' name="email" type="email" required handleChange={(e) => { e.persist(); updateFormState(e)}} />
              </div>
              <div className="col-span-1 mb-4 mt-4">
                <Input label='Contraseña' name="password" required type="password" handleChange={(e) => { e.persist(); updateFormState(e)}} />
              </div>
              <div className="flex justify-between items-center my-3 ">
               
              </div>
              <Button title="Iniciar sesión" loading={loading} onClick={signIn}/>
            </form>
            
        </div>
    )
}
