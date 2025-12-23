import './App.css'
import Title from './title'
import Count from './count'
import ToDoList from './to-do'
import ClickCounter from './click-counter'
import { ThemeProvider } from './theme-context'
import Theme from './theme'
import InputFocus from './input-focus'


function App() {

  return (
    <>
      <Title text="My React App" />
      <Count />

      {/* a simple to-do list */}
      <ToDoList />

      {/* count using useRef */}
      <ClickCounter />

      {/* this is an example for useRef */}
      <InputFocus />

      {/* this is an example for useContext */}
      <ThemeProvider>
        <Theme />
      </ThemeProvider>
    </>
  )
}

export default App
