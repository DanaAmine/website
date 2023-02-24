import React from 'react'
import Button from './Button'
const Nav = () => {
  return (
    // testing
    <div className='flex justify-between bg-black p-8 text-xl items-center'>
      <div className="text-white">amine</div>
      <div className='flex '>
        <Button name="join" bg="bg-blue-100" />  
        <Button name="join" bg="bg-blue-100" />  
        <Button name="join" bg="bg-blue-100" />  
        <Button name="join" bg="bg-blue-100" />  
      
      </div>
    </div>
  )
}

export default Nav