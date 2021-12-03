import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Select.css'

const options = [
  { id: 1, name: 'Instituto Querétaro' },
  { id: 2, name: 'Mondragon' },
  { id: 3, name: 'Milenio' },
  { id: 4, name: 'Tecnológico Monterrey' },
]

export function Select() {
  const [isOpen, setIsOpen] = useState(false)
  const [selelection, setSelection] = useState(options[0])

  const handleSelection = (option: any) => {
    setSelection(option)
    setIsOpen(false)
  }

  return (
    <div id="select-button" className="w-auto relative">
        <div className="px-4 py-2 flex justify-between rounded-md shadow-sm items-center bg-white">
            <div id="selected-value" className="flex flex-col">
                <p className="text-sm font-medium text-main-font">{selelection.name}</p>
            </div>
            <div id="chevrons" className="flex flex-col w-max text-xs text-ora-500 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={["fas", "chevron-up"]}/>
                <FontAwesomeIcon icon={["fas", "chevron-down"]}/>
            </div>
        </div>
       { isOpen && 
            <div className="options">
                <ul className="text-sm text-main-font">
                    {options.map((option) => (
                        <div key={option.name} className="flex w-full px-4 py-2 justify-between items-center hover:bg-ora-100 cursor-pointer" onClick={() => handleSelection(option)}> 
                            <li>{option.name}</li>
                            {selelection.id === option.id && <FontAwesomeIcon className="text-xs text-ora-500" icon={["fas", "check"]}/>}
                        </div>
                    ))}
                </ul>
            </div>
        } 
    </div>
  )
}