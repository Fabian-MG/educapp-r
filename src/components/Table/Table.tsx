import { useEffect, useState } from "react"

interface TableProps {
    children?: JSX.Element
}

const Table = ({children}: TableProps) => {
    return (
        <div className="bg-white  overflow-hidden rounded-lg shadow-sm">  
            <div className="max-w-full overflow-x-scroll"> 
                {children}
            </div>
        </div>
    )
}

const Grid: React.FC<{columns: any, data?: any}> = ({columns, data, children}) => {
    const [headers, setHeaders] = useState<any>({parents: [], child: []})
    const { parents, child } = headers

    useEffect(() => {
        setGroups(columns)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [columns])

    const setGroups = (cols: any) => {
        if(!cols[0].columns) {
            setHeaders({child: columns})
            return
        }

        let child: any = []
        const parents: any = cols.reduce((acc: any, parent: any) => {
            child = [...child, ...parent.columns]
            acc = [...acc, {header: parent.header, colspan: parent.columns.length}]
            return acc
        }, [])

        setHeaders({parents, child})
    }

    return (
        <table className="w-full">
            <Header>
                {parents &&
                    <Row>
                        { parents.map((column: any, idx: number) => (
                            <Column key={`key-${idx}`} colspan={column.colspan}>
                                {column.header}
                            </Column>
                        ))}
                    </Row>
                }
                <Row>
                    { child.length > 0 && child.map((column: any, idx: number) => (
                        <Column key={`key-${idx}`}>
                            {column.header}
                        </Column>
                    ))}
                </Row>
            </Header>

            { children ? children : 
                <Body>
                    {data.map((row: any, idx: number) => (
                        <Row key={`key-${idx}`}>
                            {child.map((column: any) => (
                                <Cell> 
                                    {row[column.accessor]}
                                </Cell>
                            ))}
                        </Row>
                    ))}
                </Body>
            }
        </table>
    )
}

const Header: React.FC = ({children}) => (
    <thead className="bg-gray-50">
        {children}
    </thead>
)

const Body: React.FC = ({children}) => (
    <tbody className="bg-white divide-y divide-gray-200 w-full">
        {children}
    </tbody>
)

const Column: React.FC<{colspan?: number}> = ({colspan, children}) => (
    <th className="px-6 py-3 text-xs text-left font-medium text-gray-500 uppercase tracking-wider" colSpan={colspan}>
        {children}
    </th>
)

const Row: React.FC = ({children}) => (
    <tr>
        {children}
    </tr>
)

const Cell: React.FC = ({children}) => (
    <td className="px-6 py-4 ">
            {children}
    </td>
)

Table.Grid = Grid
Table.Header = Header
Table.Body = Body
Table.Column = Column
Table.Row = Row
Table.Cell = Cell

export default Table