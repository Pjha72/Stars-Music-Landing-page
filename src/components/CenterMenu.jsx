import React from 'react'

const CenterMenu = () => {
    const listStyle = "mr-[3rem] hover:cursor-pointer text-xl"
  return (
    <div>
      <div className="menu flex">
        <ul className='flex w-[100%] justify-between'>
            <li className={listStyle}>Home</li>
            <li className={listStyle}>About</li>
            <li className={listStyle}>Preformer</li>
            <li className={listStyle}>Event Schedule</li>
        </ul>
      </div>
    </div>
  )
}

export default CenterMenu
