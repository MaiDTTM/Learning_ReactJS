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
        },
        {
            id : 2,
            name : "Nhạc Việt nghe nhiều 2021",
        },
        {
            id : 3,
            name : "Những bài hát hay nhất của Rekii",
        },
        {
            id : 4,
            name : "V-Pop : 100 Híts Thập Niên",
        },
        {
            id : 5,
            name : "Thay lời muốn nói : Thói quen",
        }
    ]
    return (
        <div>
            <TodoList todoList={todoList}/>
        </div>
    );
}

export default TodoFuter;
