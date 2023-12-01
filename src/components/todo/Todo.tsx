"use client"

import styles from './Todo.module.css'
import Image from 'next/image'
import edit from '../../assets/Edit.svg'
import trash from '../../assets/Trash.svg'
import EditTodo from '../edittodo/EditTodo'
import {useState, useEffect} from 'react'




export default function Todo({text, removeTodo, editTodo, id}: any) {

    const [editTodoModal, setEditTodoModal] = useState(false)

    function toggleModal() {
        setEditTodoModal(!editTodoModal)
    }

    function remove() {
        removeTodo(id)
    }

    return(
        <>
        <div className={styles.item}>
            <h2 className={styles.text}>{text}</h2>
            <hr className={styles.hr}/>
            <div className={styles.buttons}>
                <Image onClick={toggleModal} className={styles.button} alt='edit button' src={edit}/> 
                <Image onClick={remove} className={styles.button} alt='delete button' src={trash}/> 
            </div>
        </div>
        {editTodoModal && <EditTodo editTodo={editTodo} text={text} id={id} toggleModal={toggleModal} />}
        </>
    )
}