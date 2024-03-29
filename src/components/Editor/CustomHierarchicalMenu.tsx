'use client'
import React, { useState } from 'react';
import { useHierarchicalMenu, UseHierarchicalMenuProps } from 'react-instantsearch';
import categoryStyleMapping from './categoryStyleMapping';

interface Props  {
  setSelectedCategory: React.Dispatch<any>;
  selectedCategory: any
}

function CustomHierarchicalMenu(props: UseHierarchicalMenuProps & Props) {
    const [currentSelectedCategory, setCurrentSelectedCategory] = useState('')
  const {
    items,
    refine,
  } = useHierarchicalMenu(props);
  const { setSelectedCategory, selectedCategory } = props

  const selectedCategoryHandler = (label: string) => {
    const categoryInfo = categoryStyleMapping[label] 
    setSelectedCategory(categoryInfo)
    
  }

  const subCategoryHandler = (subCategory: any) => {
    refine(subCategory.value)
    setCurrentSelectedCategory(subCategory.label)
  }

  return (
    <>
      <ul>
        {items.map((item) => (
          <li onClick={() => selectedCategoryHandler(item.label)} className={`my-[14px]`}  key={item.label}>
            <label className='text-black cursor-pointer' onClick={() => refine(item.value)}>
              <h2 className={`flex text-[24.004px] font-normal font-medium gap-[12px] items-center px-[22px] py-[6px] rounded-lg ${categoryStyleMapping[item.label].searchStyle} w-full ${selectedCategory.category === item.label ? 'text-black' : 'text-white'}`}>
                <img className='w-[24px] h-[24px]' src={`/editor/${categoryStyleMapping[item.label].searchIcon}`} alt={categoryStyleMapping[item.label].alt} />
                {item.label}
                </h2>
            </label>
            {
              item.data && (
                <ul className='text-[18px] font-400 px-[10px] mt-[4px]'>
                  {
              item.data.map(subCategory => (
                <li className={`p-[14px] pl-[5px] px-[8px] my-[2px] ${currentSelectedCategory === subCategory.label ? 'font-semibold' : ''}`}  key={subCategory.label}>
                <label className={`text-black cursor-pointer`} onClick={() => subCategoryHandler(subCategory) }>
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