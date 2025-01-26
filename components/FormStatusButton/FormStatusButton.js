'use client';
import React from 'react'
import { useFormStatus } from 'react-dom'

const FormStatusButton = () => {
  const { pending } = useFormStatus();
  console.log('status is '+pending)
  return <button disabled={pending}>
        {pending ? 'Submitting...' : 'Share Meal here'}
    </button>
}

export default FormStatusButton
