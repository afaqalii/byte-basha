'use client';
import { categoryTabs } from '@/utils/constants'
import { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";

const CategoryTabs = () => {

  const [open, setOpen] = useState(false);
  const [select, setSelected] = useState<string>("All");

  const handleClick = (value: string) => {
    setSelected(value);
    setOpen(false)
  }
  return (
    <div className='my-5'>
      <div className='hidden md:flex flex-wrap gap-1 '>
        {categoryTabs.map((category) => (
          <button className='cursor-pointer hover-hue-rotate uppercase text-xs text-black border border-black rounded py-2 px-4'>{category.text}</button>
        ))}
      </div>
      <div className="md:hidden relative uppercase text-sm min-w-[200px] border-2 p-3 shadow">
        <p onClick={() => setOpen(!open)} className='flex gap-3 items-center justify-between cursor-pointer'>
          {select}
          <FaChevronDown className={`${open ? 'rotate-180' : 'rotate-0'} duration-100`} />
        </p>
        <ul className={`${open ? 'absolute' : 'hidden'}  top-14 left-0 bg-white border`}>
          {categoryTabs.map((category) => (
            <li onClick={() => handleClick(category.text)} key={category.text} className='uppercase text-xs text-black py-1 px-2 hover:bg-yellowDark hover:text-white cursor-pointer'>{category.text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CategoryTabs