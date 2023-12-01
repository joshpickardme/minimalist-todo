"use client";   

import styles from './EditTodo.module.css'
import { useEffect, useState } from 'react';

export default function EditTodo({text, id, editTodo, toggleModal}: any) {

    const [todoText, setTodoText] = useState('')
    const [length, setLength] = useState(0)
    const maxLength = 32

    function edit(e) {
        e.preventDefault()

        if(length > maxLength || length == 0) {
            // nothing.
            console.log(length)
        } else {
            const text = todoText
            toggleModal()
            editTodo(text, id)
        }
    }

    useEffect(() => {
        setLength(todoText.length)
    }, [todoText])


    function closeModal(e?: any) {
        if(e) { e.stopPropagation() }
        toggleModal()
    }

    useEffect(() => {
        setTodoText(text)
    }, [])

    return(
        <>
        <main onClick={closeModal} className={styles.background}></main>
        <div className={styles.centred}>
        <div className={styles.modal}>
            <form onSubmit={edit} className={styles.form}>
                <input onKeyDown={(e) => (e.key === 'Escape' && closeModal())} value={todoText} className={styles.input} onChange={e => setTodoText(e.target.value)} type="text" autoFocus/>
                <p className={styles.prompt}>{length > maxLength ? `Too many characters (${length}/${maxLength})` : ''}</p>
            </form>
        </div>
    </div>
    </>
    )
}