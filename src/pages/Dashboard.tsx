import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from '../components/Card/Card'
import { Grid } from '../components/Grid/Grid'
import { ProfileHeader } from '../components/ProfileHeader/ProfileHeader'
import Table from '../components/Table/Table'

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
        header: 'Calificacion',
        accessor: 'col2'
    },
    {
        header: '',
        accessor: 'col2'
    }
]

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

export const Dashboard = () => {
    return (
        <div className="flex-grow p-4">

            <Card > 
                <div className="w-full flex justify-between items-center">
                    <div className="">
                        <p className="font-bold text-base text-gray-600">Ingenieria de Software</p>
                        <p className="font-normal text-sm text-gray-400">Ingenieria en Sistemas Computacionales</p>
                    </div>
                    <div className="mt-5 flex lg:mt-0 lg:ml-4">
                        <span className="hidden sm:block">
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <FontAwesomeIcon icon={["fas", "pen-fancy"]} className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                            Calificar
                        </button>
                        </span>
                        <span className="hidden sm:block ml-3">
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <FontAwesomeIcon icon={["fas", "plus"]} className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                            Agregar
                        </button>
                        </span>
                        <span className="sm:ml-3">
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-orange focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                            <FontAwesomeIcon icon={["fas", "trash-alt"]} className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                            Reporte
                        </button>
                        </span>
        
                    </div>
                </div>
            </Card>

            <Table>
                <Table.Grid columns={columns} >
                    <Table.Body>
                        {people.map((person) => (
                            <Table.Row>
                                <Table.Cell>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">{person.name}</div>
                                        <div className="text-sm text-gray-500">{person.email}</div>
                                    </div>
                                </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="text-sm text-gray-900">{person.title}</div>
                                    <div className="text-sm text-gray-500">{person.department}</div>
                                </Table.Cell>
                                <Table.Cell>
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Active
                                </span>
                                </Table.Cell>
                                <Table.Cell>
                                    <a href="/" className="hover:text-indigo-900 text-sm text-gray-500">
                                        {person.role}
                                    </a>
                                </Table.Cell>
                                <Table.Cell>
                                    <a href="/" className="text-ora-500 hover:text-ora-300 text-right text-sm font-medium">
                                        Edit
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        )) }
                    </Table.Body>
                </Table.Grid>
            </Table>

            {/* <div className="flex justify-between w-full">
                <div className="w-4/6 flex flex-col pr-4">
                    <ProfileHeader />
                </div>
                <div className="w-2/6 flex flex-col items-center px-2">
                    <Follow />
                </div> 
            </div> */}

         
        </div>
    )
}
