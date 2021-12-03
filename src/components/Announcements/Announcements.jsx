import { Button } from "../Button/Button"

export const Announcements = () => {
    return (
        <div className="w-full p-6 mb-6 bg-white rounded-lg shadow-md">
            <div className="w-full font-semibold mb-3">
                Notificaciones
            </div>
            <div className="py-4 border-b border-gray-200">
                <h4 className="text-sm mb-1 font-semibold">Período de entrega terminada</h4>
                <p className="text-sm text-gray-500">El período de entrega para la tarea Ensayo 1 de la clase <span className="font-semibold">Química</span> </p>
            </div>
            <div className="py-4 mb-3">
                <h4 className="text-sm mb-1 font-semibold">Reportes de unidad</h4>
                <p className="text-sm text-gray-500">Los reportes de unidad para la clase de <span className="font-semibold">Base de Datos</span> </p>
            </div>
            <div className="">
                <Button title="Ver Notificaciones" theme="normal"/>
            </div>
        </div>
    )
}
