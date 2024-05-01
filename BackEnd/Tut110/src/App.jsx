import React, { Component } from "react";
import { useState } from "react";
import "./App.css";

function App() {
    // Koi chota-mota component bnana ho to no need to make it in separate "components" folder, you can do:
    const Component = () => {
        return (
            <>
                <div>I am Component</div>
            </>
        );
    };

    //Again making a chota-mota component
    function Todo(props) {
        return(
            <div className="todo">
                <div className="todoTitle">{props.title}</div>
                <div className="todoDesc">{props.desc}</div>
            </div>
        )
    }

    function Todo2({props}) {
        return(
            <div className="todo">
                <div className="todoTitle">{props.title}</div>
                <div className="todoDesc">{props.desc}</div>
            </div>
        )
    }

    const todos = [{id: 1, title : "Todo1", desc : "Imp Todo"},
                    {id: 2, title : "Todo2", desc : "Medium Todo"},
                    {id: 3, title : "Todo3", desc : "Stupid Todo"}
    ];

    return (
        <>
            {/* Now Displaying that component */}
            <Component />
        
            {/* Rendering a list (using JS map() on "todos" array) */}

            {/* Using Todo component that takes "props" */}
            {/* {todos.map((todosElement) => {
                return (<Todo title={todosElement.title} desc={todosElement.desc} />);
            })} */}


            {/* Using Todo2 component that takes "{props}" */}
            {/* {todos.map((todosElement) => {
                return (<Todo2 props={todosElement} />);
            })} */}

            {/* Above 2 will give error related to unique "key". So below is the ideal way  */}
            {todos.map((todosElement) => {
                return (<Todo2 key={todosElement.id} props={todosElement} />);
            })}

            {/* Rendering list Directly without making a component  */}
            {todos.map((todosElement) => {
                return (
                    <div key={todosElement.id} className="todo">
                        <div className="todoTitle">{todosElement.title}</div>
                        <div className="todoDesc">{todosElement.desc}</div>
                    </div>
                )
            })}
        
        </>       
    );
}

export default App;
