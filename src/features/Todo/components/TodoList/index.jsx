import React from 'react';
import PropTypes from 'prop-types';
// import Loading from "../../../../components/Loading";
import classnames from 'classnames';

TodoList.propTypes = {
    todoList : PropTypes.array,
};
TodoList.defaultProps = {
    todoList : [],
};

function TodoList(props) {
    const {todoList} = props;
    return (
        <div>
           <ul className = 'todo-list'>
               { todoList.map(todo => (
                   <li
                       key={todo.id}
                       className={classnames({
                           'todo-item' : true,
                           complete : todo.status == 'complete'
                       })}>{todo.name}</li>
               ))}
           </ul>
        </div>
    );
}

export default TodoList;
