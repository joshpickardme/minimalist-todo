"use client";   

import styles from './AddTodo.module.css'
import { useState, useEffect } from 'react';

export default function AddTodo({addTodo, toggleModal}: any) {

    const [todoText, setTodoText] = useState('')
    const [length, setLength] = useState(0)
    const maxLength = 32
    type todoType = {
        id: number
        text: string
    }

    function addItem(e: any) {
        e.preventDefault()
        const todo: todoType = {id: 0, text: todoText}

        if(length > maxLength || length == 0) {
            // nothing.
            console.log(length)
        } else {
            addTodo(todo)
            setTodoText('')
            toggleModal()
        }

    }

    function closeModal(e?: any) {
        if(e) { e.stopPropagation() }
        toggleModal()
    }

    useEffect(() => {
        setLength(todoText.length)
    }, [todoText])

    return(
        <>
        <main onClick={closeModal} className={styles.background}></main>
        <div className={styles.centred}>
        <div className={styles.modal}>
            <form onSubmit={addItem} className={styles.form}>
                <input onKeyDown={(e) => (e.key === 'Escape' && closeModal())} className={styles.input} onChange={e => setTodoText(e.target.value)} type="text" autoFocus/>
                <p className={styles.prompt}>{length > maxLength ? `Too many characters (${length}/${maxLength})` : ''}</p>
            </form>
        </div>
    </div>
    </>
    )
}