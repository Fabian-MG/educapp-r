import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Paginator } from '../Paginator/Paginator'

const people = [
    {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
      {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
      {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
      {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
      {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
      {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
      {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      },
]

export const Grid = () => {
    return (
        <div className="flex flex-col px-6 bg-white w-full rounded-lg shadow-sm">
            <div className="py-4 px-2 mb-3 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Mostrar
                <span className="mx-2">
                  <select className="border border-gray-300 rounded">
                    <option value>10</option>
                    <option>Option</option>
                  </select>
                </span>
                resultados
              </div>
              <div className="">
                <FontAwesomeIcon className="text-gray-400" icon={["fa", "sync"]}/>
              </div>
            </div>
            
            <div className="align-middle inline-block min-w-full">
              <div className="overflow-x-auto sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Semestre
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Nombre
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Promedio
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Entregable
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-3 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-500">7°</div>
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap">
                          <div className="text-sm text-gray-500">Fabian Miranda Garcia</div>
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            85.0
                          </span>
                        </td>
                        
                      </tr>

                      <tr>
                        <td className="px-6 py-3 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-500">8°</div>
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap">
                          <div className="text-sm text-gray-500">Edson Toledo Gonzalez</div>
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            90.0
                          </span>
                        </td>
                        
                      </tr>

                      <tr>
                        <td className="px-6 py-3 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-500">8°</div>
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap">
                          <div className="text-sm text-gray-500">Luis Alfonso Moreno</div>
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            88.0
                          </span>
                        </td>
                        
                      </tr>

                      <tr>
                        <td className="px-6 py-3 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-500">8°</div>
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap">
                          <div className="text-sm text-gray-500">Fernando Salinas Baylon</div>
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            90.0
                          </span>
                        </td>
                        
                      </tr>

                      <tr>
                        <td className="px-6 py-3 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-500">7°</div>
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap">
                          <div className="text-sm text-gray-500">Ricardo Galvez Galvan</div>
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            86.0
                          </span>
                        </td>
                        
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <Paginator />
        </div>
      )
}
