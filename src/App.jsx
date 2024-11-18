import { useState } from 'react'
import Pagination from './1Pagination'
import Stopwatch from './2Stopwatch'
import FormCustom from './3Form'
import TodoApp from './4TodoApp'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Pagination/>
      <Stopwatch/>
      <FormCustom/>
      <TodoApp/>
    </>
  )
}

export default App
