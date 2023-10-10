import React from 'react'

const FormResult = (props) => {
  return (
    <div className='bg-white drop-shadow-lg rounded px-10 pt-10 pb-10 mb-4 flex flex-col'>
        <div className='flex justify-between items-center'><span className='font-semibold'>Username: </span><span>{props.formData.nameValue}</span></div>
        <div className='flex justify-between items-center'><span className='font-semibold'>Email: </span><span>{props.formData.emailValue}</span></div>
        <div className='flex justify-between items-center'><span className='font-semibold'>Password: </span><span>{props.formData.passwordValue}</span></div>
    </div>
  )
}

export default FormResult