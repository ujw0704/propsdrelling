import React from 'react'
import Tasking from './Tasking'

function Task(props) {

    const {title, header} = props
  return (
    <div className='task' style={{height: "240px"}}> 

        <Tasking title={title} />

        
        <h3>{header}</h3>


        <p>Lorem ipsum is a name for a common type of placeholder text. Also known as 
            filler or dummy text, this is text copy that serves to fill a space without saying anything meaningful. It's essentially nonsense text that 
            still gives an idea of what real words will look like in the final product.
         
         Lorem ipsum is a name for a common type of placeholder text. Also known 
            as filler or dummy text, this is text copy that serves to fill a space without saying anything meaningful. It's essentially nonsense
             text that still gives an idea of what real words will look like in the final product.</p><hr />
    </div>
  )
}

export default Task