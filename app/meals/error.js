'use client';
import React from 'react'

const Error = ({error}) => {
  console.log(error);
  return (
   <main className='error'>
    <h1>An error occured</h1>
    <p>Failed to fetch data please try again late</p>
   </main>
  )
}

export default Error
