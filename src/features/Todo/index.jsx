import React from 'react';
import PropTypes from 'prop-types';
import TodoList from "./components/TodoList";

TodoFuter.propTypes = {

};

function TodoFuter(props) {
    const todoList =[
        {
            id : 1,
            name : "Đỉnh cao Zing MP3",
            status : "complete",
        },
        {
            id : 2,
            name : "Nhạc Việt nghe nhiều 2021",
            status : "new",
        },
        {
            id : 3,
            name : "Những bài hát hay nhất của Rekii",
            status : "new",
        },
        {
            id : 4,
            name : "V-Pop : 100 Híts Thập Niên",
            status : "complete",
        },
        {
            id : 5,
            name : "Thay lời muốn nói : Thói quen",
            status : "new",
        }
    ];

    return (
        <div>
            <h1>Todo List </h1>
            <TodoList todoList={todoList}/>
        </div>
        );
}

export default TodoFuter;
