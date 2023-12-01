"use client"
import styles from './Header.module.css'
import AddTodo from '../addtodo/AddTodo'
import { useState } from 'react'

export default function Header({addTodo}:any) {

    const [addTodoModal, setAddTodoModal] = useState(false)

    function toggleModal() {
        setAddTodoModal(!addTodoModal)
    }


    return (
        <>
        <header className={styles.header}>
            <h1 className={styles.title}>Minimal Tasks.</h1>
            <div className={styles.buttons}>
                <button onClick={toggleModal} className={styles.button}>Add Task</button>
            </div>
        </header>
        {addTodoModal && <AddTodo addTodo={addTodo} toggleModal={toggleModal} />}
        </>
    )
}