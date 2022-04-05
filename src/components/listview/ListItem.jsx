import React from 'react';
import { ListGroupItem, Input, Button, ListGroup } from 'reactstrap';
import PropTypes from 'prop-types';


const ListItem = ({todo,toggleSelect,toggleComplete}) => {
    return (
        <ListGroupItem className='d-flex align-item-center'>
            <Input
            
            type='checkbox'
            id={todo.id}
            checked={todo.isSelect}
            onChange={() => toggleSelect (todo.id)}
            
            />
            <div classsName='mx-3'>
                <h4>{todo.text}</h4>
                <p>{todo.time.toDateString()}</p>
            </div>
            <Button className='ml-auto' color={todo.isComplete ? 'danger' : 'success'} onClick={() => toggleComplete(todo.id)}>
{todo.isComplete ? 'Completed' : 'Running'}
            </Button>

            


        </ListGroupItem>

    );
};
ListItem.propTypes ={
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}
const ListView =({todos,toggleComplete,toggleSelect}) => {
    return (
        <ListGroup>
{todos.map(todo=>(
    <ListItem 
    key={todo.id}
    todo={todo}
    toggleSelect={toggleSelect}
    toggleComplete={toggleComplete}
    />
))}
        </ListGroup>
    )
}

ListView.propTypes ={
    todos: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}
export default ListView