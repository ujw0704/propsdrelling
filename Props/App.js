import React from 'react'
import Task from './Task'

function App() {
  return (
    <div className='app'>
        
   <Task title={"This is trending books"} header={"Trending Books"}/>
   <Task title={"This is popular books"} header={"Popular Books"}/>
   <Task title={"This is romance books"} header={"Romance Books"}/>


    </div>
  )
}

export default App