import { Children, FC, useEffect, useState } from "react"

interface TableProps {
    children?: JSX.Element
}

const Table = ({children}: TableProps) => {
    return (
        <div className="flex flex-col p-4 bg-white w-full rounded-lg shadow-sm">   
            {children}
        </div>
    )
}

const Grid: React.FC<{columns: any, data?: any}> = ({columns, data, children}) => {
    const [headers, setHeaders] = useState<any>({parents: [], child: []})
    const { parents, child } = headers

    useEffect(() => {
        setGroups(columns)
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
        <table>
            <Header>
                {parents &&
                    <Row>
                        { parents.map((column: any) => (
                            <Column colspan={column.colspan}>
                                {column.header}
                            </Column>
                        ))}
                    </Row>
                }
                <Row>
                    { child.length > 0 && child.map((column: any) => (
                        <Column>
                            {column.header}
                        </Column>
                    ))}
                </Row>
            </Header>

            { children ? children : 
                <Body>
                    {data.map((row: any) => (
                        <Row>
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
    <tbody className="bg-white divide-y divide-gray-200">
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
    <td className="px-6 py-4 whitespace-nowrap">
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