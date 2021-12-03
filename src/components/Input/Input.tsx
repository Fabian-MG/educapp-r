import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type InputProps = {
    name: string
    value: any
    required: boolean
    type?: string
    min?: string
    max?: string
    label?: string
    options?: SelectOption[]
    handleChange: (e: any) => void
}

type FieldProps = {
    label: string
    name: string
    value: any
    type: string
    min?: any
    max?: any
    required: boolean
    helpText?: string
    options?: SelectOption[]
    handleChange: (e: any) => void
}

type SelectOption = {
    value: any, 
    label: string
}

export const Input = ({type, label, helpText, ...props}: FieldProps) => {

    const renderInput = () => {
        switch(type) {
            case 'checkbox':
                return <CheckboxField {...props}/>
            case 'password':
                return <TextInput type="password" {...props} />
            case 'textt':
                return <TextInput {...props} />
            case 'textarea':
                return <TextArea {...props}/>
            case 'number':
                return <Number {...props}/>
            case 'select':
                return <Select {...props}/>
            case 'date':
                return <Date {...props}/>
            case 'email':
                return <Email {...props}/>
            case 'text':
            default:
                return <TextField {...props}/> 
        }
    } 

    return (
        <>
            <div className="flex justify-between">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-600">
                    {label}
                </label>
                { 
                    helpText && 
                    <div>
                        <FontAwesomeIcon className="text-gray-300" icon={["fas", "question-circle"]} />
                    </div>
                } 
            </div>
            {renderInput()}
        </>
    )
}

const TextField = ({name, handleChange, required}: InputProps) => (
    <input
        className="mt-1 h-8 pl-2 text-gray-500 border rounded-md border-gray-300"
        type="text"
        name={name}
        onChange={handleChange}
        required={required}
    />
)

const TextInput = ({name, value, handleChange, type="text", required}: InputProps) => (
    <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        required={required}
        className="mt-1 focus:ring-ora-400 text-gray-500 focus:border-ora-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
)

const Email = ({name, value, handleChange, required}: InputProps) => (
    <input
        type="email"
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        required={required}
        className="mt-1 focus:ring-ora-400 text-gray-500 focus:border-ora-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
)

const TextArea = ({name, value, handleChange, required}: InputProps) => (
    <textarea
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        required={required}
        className="mt-1 focus:ring-ora-400 text-gray-500 focus:border-ora-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
)

const Number = ({name, value, min, max, handleChange, required}: InputProps) => (
    <input
        type="number"
        name={name}
        id={name}
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
        required={required}
        className="mt-1 focus:ring-ora-400 text-gray-500 focus:border-ora-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
)

const CheckboxField = ({label, name, handleChange, required}: InputProps) => (
    <input
            className="h-4 pl-2 mr-2 text-gray-500 border rounded-md border-gray-300"
            type="checkbox"
            name={name}
            onChange={handleChange}
            required={required}
    />
)

const Date = ({name, value, handleChange, required}: InputProps) => (
    <input
        type="date"
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        required={required}
        className="mt-1 focus:ring-ora-400 text-gray-500 focus:border-ora-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
)

const Select = ({name, value, handleChange, required, options}: InputProps) => (
    <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        required={required}
        className="mt-1 focus:ring-ora-400 text-gray-500 focus:border-ora-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    > 
        { options && options.map(({label, value}: {label: string, value: string | number}) => (
            <option key={value} value={value}>{label}</option>
        )) }
    </select>
)