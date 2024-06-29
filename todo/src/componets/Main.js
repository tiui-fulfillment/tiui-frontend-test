import React from 'react'

import { TaskList } from './TaskList';

export const Main = () => {
  return (
    <section className='Main-container'>
      <div className='Title-container'>
        <h1 className='Title-text'>To-Do</h1>
      </div>

      <TaskList />
      
    </section>
  )
}

