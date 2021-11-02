import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
    children: JSX.Element | any,
};

interface ReferenceProps extends Props {
    type: string
}

const Stat = ({children}: Props) => {
    return (
        <div className="flex flex-col w-80 flex-shrink bg-white rounded-md shadow-md overflow-hidden">
            {children}
        </div>
    )
}

const Header = ({children}: Props) => (
    <div className="w-full p-4 flex items-center justify-start">
        {children}
    </div>
)

const Footer = ({children}: Props) => (
    <div className="w-full px-4 py-2 flex items-center text-ora-500 text-xs font-semibold bg-gray-50">
        {children}
    </div>
)

const Title = ({children}: Props) => (
    <div className="text-xs text-main-light">
        {children}
    </div>
)

const Icon = ({children}: Props) => (
    <div className="text-main-font py-2 px-3 rounded-md bg-ora-500">
        {children}
    </div>
)

const Value = ({children}: Props) => (
    <div className="flex text-lg font-bold items-end">
        {children}
    </div>
)


const Reference = ({children, type}: ReferenceProps) => {
    const icon = type === 'positive' ? "arrow-up" : "arrow-down"
    return (
    <div className={`text-xs ml-4 mb-1 ${type === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
        <FontAwesomeIcon className="mr-1" icon={["fas", icon]}/>
        {children}
    </div>
)}

const Labels = ({children}: Props) => (
    <div className="ml-4">
        {children}
    </div>
)


Stat.Header = Header
Stat.Footer = Footer
Stat.Title = Title
Stat.Icon = Icon
Stat.Value = Value
Stat.Reference = Reference
Stat.Labels = Labels

export default Stat