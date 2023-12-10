'use client'
import React, { useState } from 'react';
import { useHierarchicalMenu, UseHierarchicalMenuProps } from 'react-instantsearch';
import categoryStyleMapping from './categoryStyleMapping';

function CustomHierarchicalMenu(props: UseHierarchicalMenuProps) {
    const [currentSelectedCategory, setCurrentSelectedCategory] = useState('')
  const {
    items,
    refine,
  } = useHierarchicalMenu(props);

  return (
    <>
      <ul>
        {items.map((item) => (
          <li className={`${currentSelectedCategory === item.label ? 'font-semibold' : ''} my-[16px]`}  key={item.label}>
            <label className='text-black cursor-pointer' onClick={() => refine(item.value)}>
              <h2 className={`flex text-[24.004px] font-normal font-medium gap-[12px] items-center px-[22px] py-[6px] rounded-lg ${categoryStyleMapping[item.label].searchStyle} w-max text-[white]`}>
                <img className='w-[24px] h-[24px]' src={`/editor/${categoryStyleMapping[item.label].searchIcon}`} alt={categoryStyleMapping[item.label].alt} />
                {item.label}
                </h2>
            </label>
            {
              item.data && (
                <ul className='text-[18px] font-400 px-[10px] '>
                  {
              item.data.map(subCategory => (
                <li className="p-[14px] pl-[5px]"  key={subCategory.label}>
                <label className='text-black cursor-pointer' onClick={() => refine(subCategory.value)}>
                  <span>{subCategory.label}</span>
                </label>
              </li> 
              ))}
              </ul>
              )
            }
          </li>
        ))}
      </ul>
    </>
  );
}

export default CustomHierarchicalMenu;