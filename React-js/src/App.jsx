import CounterProject from "./Practice Project/CounterProject"
import Todo from "./Practice Project/Todo"
import Meals from "./Practice Project/Meals"
import Calculator from "./Practice Project/Calculator"
import ToogleBackgroundColor from "./Practice Project/ToogleBackgroundColor"
import HiddenSearchBar from "./Practice Project/HiddenSearchBar"
import Testimonials from "./Practice Project/Testimonials"
import AccordingData from "./Practice Project/AccordingData"
import { accordionData } from "./utils/content"
import { Form } from "./Practice Project/Form"
import Nav from "./Navigation/Nav"
import Product from "./Products/Product"
import Recommended from "./Recommended/Recommended"
import RiskSimulationGame from "./RiskSimulationGame"
const App = () => {
  return (
    <div>
    {/* <CounterProject /> 
    <Todo />
    <Meals />
    <Calculator />
    <ToogleBackgroundColor />
    <HiddenSearchBar/>
    <Testimonials/>
    <AccordingData/>
    <div>
      {accordionData.map(({title,content}) =>(
        <AccordingData title={title} content = {content}/>
      ))}
    </div>
    <Form/>
    */}
   <RiskSimulationGame/>
    </div>
  )
}

export default App
