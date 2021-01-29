// import logo from './logo.svg';
// import './App.css';
import React from "react";
import ColorBox from "./components/Colorbox";
import AlbumList from "./features/Song";
import TodoFuter from "./features/Todo";
import Index from "./components";
function App() {
    // const isMale = true;
    // const student ={
    //     name : "MaiDao",
    //     age : 28,
    // }
    // const colorList = ['red','black','pink'];
    return (
        // display: 'flex': bắt buộc phải có nếu dùng hộp
        // justifyContent: 'center' : căn giữa, tách các phần tử
        // flexDirection: 'column' : là đưa nó về 1 cột 'row' là một hàng
        // alignItems: 'center': căn các vị trí item về giữa
        // học tại website này: https://flexboxfroggy.com/#vi
        <div className="App">
            {/*<header className="App-header">*/}
            {/*    {isMale && (*/}
            {/*        <>*/}
            {/*            <p>Male 1</p>,*/}
            {/*            <p>Male 2</p>,*/}
            {/*            <p>Male 3</p>*/}
            {/*        </>*/}
            {/*    )}*/}
            {/*    <p>{student.name}</p>*/}
            {/*    <p>{student.age}</p>*/}
            {/*    <ul style={{display:"flex", flexDirection : "row", justifyContent : "space-around",border : "1px solid black"}}>*/}
            {/*        {colorList.map(color => (*/}
            {/*            <li style={{color,listStyle:"none"}}>{color}</li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*</header>*/}
            <AlbumList/>
            {/*<TodoFuter/>*/}
            <Index/>
        </div>

    );
}

export default App;
