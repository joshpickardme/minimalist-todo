"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/header/Header'
import AddTodo from '../components/addtodo/AddTodo'
import Todo from '../components/todo/Todo'
import { useState, useEffect } from 'react'

export default function Home() {


  const [todos, setTodos] = useState<object[]>([]);
  const [id, setId] = useState(1)

  function getIndexFromId(id: number) {
    const pos = todos.map(e => e.id).indexOf(id);
    return pos
  }

  function addTodo(todo: object):void {
    console.log(todo)
    todo.id = id
    setId(() => (id + 1))
    setTodos(prevTodos => [...prevTodos, todo]);
  }

  function removeTodo(id: number):void {
    setTodos(
      todos.filter(todo => todo.id !== id)
    );
  }

  function editTodo(text: string, id: number):void {
    console.log(text)
    console.log(id)
    const index = getIndexFromId(id)
    const updatedTodos = todos.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return {text: text, id: id};
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setTodos(updatedTodos);
  }

  useEffect(() => {
    console.log('updating', todos);
  }, [todos]);

  return (
    <main className={styles.main}>
      <Header addTodo={addTodo} />
      <section className={styles.todos}>
        {todos.map(todo => (<Todo editTodo={editTodo} removeTodo={removeTodo} text={todo.text} id={todo.id} />))}
      </section>
      
    </main>
    
  )
}
