'use client';
import useClickOutside from '@/hooks/useClickOutside';
import { categoryTabs } from '@/utils/constants';
import { CategoryTabProps } from '@/utils/types';
import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";

const CategoryTabs = ({ selectedCategory, setSelectedCategory }: CategoryTabProps) => {
  const { isOpen, setIsOpen, ref } = useClickOutside<HTMLDivElement>(false);

  const handleSelect = (value: string) => {
    setSelectedCategory(value);
    setIsOpen(false);
  };

  const handleClick = (value: string) => {
    setSelectedCategory(value)
  };

  return (
    <div className='my-5'>
      <div className='hidden md:flex flex-wrap gap-1'>
        {categoryTabs.map((category) => (
          <button
            onClick={() => handleClick(category.text)}
            key={category.text}
            className={`${selectedCategory.trim() == category.text.trim() ? "bg-yellowLight" : ""} fill-up-btn cursor-pointer uppercase text-xs    rounded py-2 px-4 text-black border-black border`}
          >
            <span>{category.text}</span>
          </button>
        ))}
      </div>
      <div onClick={() => setIsOpen(!isOpen)} ref={ref} className="md:hidden relative uppercase text-sm min-w-[200px] border-2 p-3 shadow">
        <p className='flex gap-3 items-center justify-between cursor-pointer'>
          {selectedCategory}
          <FaChevronDown className={`${isOpen ? 'rotate-180' : 'rotate-0'} duration-100`} />
        </p>
        <ul className={`${isOpen ? 'absolute' : 'hidden'} top-14 left-0 bg-white border`}>
          {categoryTabs.map((category) => (
            <li onClick={() => handleSelect(category.text)} key={category.text} className='uppercase text-xs text-black p-2 hover:bg-yellowDark hover:text-white cursor-pointer'>
              {category.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryTabs;
