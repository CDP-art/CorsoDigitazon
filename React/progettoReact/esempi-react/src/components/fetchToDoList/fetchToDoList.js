/*
Meno semplice: scrivere un componente che rappresenti una TODO list prendendo gli elementi della lista da questo endpoint: https://jsonplaceholder.typicode.com/todos
Ogni componente deve avere una checkbox, se la checkbox viene flaggata il componente finisce in fondo alla lista e diventa piu' opaco 
*/

import { useState, useEffect } from 'react'

export default function TodoList() {
    //inizializzo lo stato della lista
    const [todos, setTodos] = useState([])

    useEffect(() => {
        //effettuo la chiamata al server esterno
        async function call() {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos")
            const json = await res.json()
            setTodos(json.slice(0, 5))
        }
        call()
    }, []) //Metto le quadre perchè mi serve che lo useEffect viene eseguito una volta solamente

    const handleCheckboxClick = (id) => {
        setTodos((prevTodos) =>  //Quando passi una funzione alla funzione set, vuol dire che riesci a chiamare lo stato precedente
            prevTodos.map((todo) =>
                todo.id === id ? {
                    ...todo,
                    completed: !todo.completed
                } : todo
            )
        )
    }

    //suddivido la lista in due array in base al completed se è true o false.
    const completedTodos = todos.filter((todo) => todo.completed)
    const incompleteTodos = todos.filter((todo) => !todo.completed)
    const reorderedTodos = incompleteTodos.concat(completedTodos) //il concat concatena i valori dei due array in un singolo array

    console.log(reorderedTodos)

    return (
        <div className="containerTodoList">
            <h2>Todo List</h2>
            <ul className="todo">
                {reorderedTodos.map((todo) => (
                    <li key={todo.id} style={{ opacity: todo.completed ? 0.5 : 1 }}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleCheckboxClick(todo.id)}
                        />
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}