import React, { createContext, useState } from "react"

const TableContext = createContext(null)

const tableReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'value':
            break;
        default:
            break;
    }
}
const Table: React.FC = (props) => {
    const [state, setState] = useState() 

    const value: any = {
        state,
        setState
    }

    return (
        <TableContext.Provider value={value}>
            {props.children}
        </TableContext.Provider>
    )
}

export { Table }