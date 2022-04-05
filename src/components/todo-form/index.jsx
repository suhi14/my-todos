import React from 'react';
import PropTypes from 'prop-types';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';


const TodoForm = ({handleSubmit,handleChange,state}) => {
return( 
<Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label> Enter Task</Label>
                <Input 
                placeholder='do some code'
                name='text'
                value={this.state.text}
                onChange={this.handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label> Description of Task</Label>
                <Input 
                type='textarea'
                placeholder='Write your task'
                name='description'
                value={this.state.description}
                onChange={this.handleChange}
                />
            </FormGroup>
            <Button type='submit'>Create Task</Button>
        </Form> 

);



{

  state = {
      text:'',
      description:''
  } 
  
  handleChange = event =>{
      this.setState({
          [event.target.name]:event.target.value
      })
handleSubmit= event=>{
    event.preventDefault()
    this.props.createTodo(this.state)
    event.target.reset()
    this.setState({text:'',description:''})
    
}


}
}
}

TodoForm.propTypes={
    createTodo:PropTypes.func.isRequired
}
export default TodoForm