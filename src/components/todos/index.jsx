import React from 'react'
import {Modal,ModalBody,ModalHeader} from 'reactstrap';
import TodoForm from '../todo-form/index';
import ListView from '../listview/ListItem';
import TableView from '../tableview/TableItem';
import Controller from '../controller';

class Todos extends React.Component{

state={
    todos:[
        {
            id:'aa1',
            text:'my todo text',
            description:'anything can be ',
            time: new Date(),
            isComplete:false,
            isSelect:false
        },

        {
            id:'aa1',
            text:'my todo text',
            description:'anything can be ',
            time: new Date(),
            isComplete:false,
            isSelect:false
        }
    ],
    isOpenTodoForm : false,
    searchTerm:''
};
toggleSelect = todoId =>{};

toggleComplete = todoId =>{};

toggleForm= () => {
    this.setState({
        isOpentodoForm: !this.state.isOpenTodoForm
    })
}
handleSearch= () => {}

createTodo=todo=>{}


    render() {
        return(
<div>
    <h1 className='display-4 text-center mb-5'>
        My todos
    </h1>
<Controller 
 term={this.state.searchTerm}
 toggleForm={this.toggleForm}
 handleSearch={this.handleSearch}
/>

    <div>
        <ListView 
        todos={this.state.todos} 
        toggleSelect={this.toggleSelect} 
        toggleComplete={this.toggleComplete}
        />
    </div>
    <div>
        <TableView 
        todos={this.state.todos} 
        toggleSelect={this.toggleSelect} 
        toggleComplete={this.toggleComplete}
        />
    </div>

    <Modal 
    isOpen={this.state.isOpenTodoForm}
    toggle={this.toggleForm} >
        <ModalHeader toggle={this.toggleForm}>
            
            Create New Todo Item

        </ModalHeader>
        <ModalBody>
            <TodoForm createTodo = {this.createTodo} />
        </ModalBody>
        
    </Modal>

</div>
        );
    }
}
export default Todos;