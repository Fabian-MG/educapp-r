/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileHeader } from '../components/ProfileHeader/ProfileHeader'
import Stat from '../components/Stat/Stat'

export const Student = () => {
    
    return (
        <div className="flex-grow py-9 pl-9 pr-9"> 
            <ProfileHeader />

            <div className="flex justify-between">
                <Stat>
                    <Stat.Header>
                        <Stat.Icon>
                            <FontAwesomeIcon className="text-white" icon={["fas","chart-pie"]} />
                        </Stat.Icon>
                        <Stat.Labels>
                            <Stat.Title>Promedio Total</Stat.Title>
                            <Stat.Value>
                                86.0%
                                <Stat.Reference type="positive">5.4%</Stat.Reference>    
                            </Stat.Value>
                        </Stat.Labels>
                    </Stat.Header>
                    <Stat.Footer>
                        <a href="#">Ver todo</a>
                    </Stat.Footer>
                </Stat>
                <Stat>
                    <Stat.Header>
                        <Stat.Icon>
                            <FontAwesomeIcon className="text-white" icon={["fas","tasks"]} />
                        </Stat.Icon>
                        <Stat.Labels>
                            <Stat.Title>Tareas Entregadas</Stat.Title>
                            <Stat.Value>
                                100%
                                <Stat.Reference type="positive">10%</Stat.Reference>
                            </Stat.Value>
                        </Stat.Labels>
                    </Stat.Header>
                    <Stat.Footer>
                        <a href="#">Ver todo</a>
                    </Stat.Footer>
                </Stat>
                <Stat>
                    <Stat.Header>
                        <Stat.Icon>
                            <FontAwesomeIcon className="text-white" icon={["fas","clipboard"]} />
                        </Stat.Icon>
                        <Stat.Labels>
                            <Stat.Title>Asistencia</Stat.Title>
                            <Stat.Value>
                                70%
                                <Stat.Reference type="negative">7.5%</Stat.Reference>
                            </Stat.Value>
                        </Stat.Labels>
                    </Stat.Header>
                    <Stat.Footer>
                        <a href="#">Ver todo</a>
                    </Stat.Footer>
                </Stat>
            </div>


        </div>
    )
}
