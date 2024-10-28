//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { HooksApp} from './hooks-app'
//import { CounterApp} from './01-useState/counter-app'
//import { CounterWithCustomHook } from './01-useState/counter-with-custom-hook'
//import { SimpleForm } from './02-useEfect/simple-form'
import './index.css'
//import { FormWidth } from './02-useEfect/form-width-custom-hook'
import { MultipleCustomHooks } from './03-example/multiple-custom-hooks'


createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <MultipleCustomHooks />
  //</StrictMode>,
)
