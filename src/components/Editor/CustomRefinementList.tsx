'use client'
import React, { useState } from 'react';
import { useRefinementList, UseRefinementListProps } from 'react-instantsearch';

function CustomRefinementList(props: UseRefinementListProps) {
    const [currentSelectedCategory, setCurrentSelectedCategory] = useState('')
  const {
    items,
    refine,
  } = useRefinementList(props);

  const itemsMapping = [
    {
      "count": 22,
      "isRefined": true,
      "value": "Logic",
      "label": "Logic",
      "highlighted": "Logic"
    },
    {
      "count": 22,
      "isRefined": true,
      "value": "Trust",
      "label": "Trust",
      "highlighted": "Trust"
    },
    {
      "count": 17,
      "isRefined": true,
      "value": "Value",
      "label": "Value",
      "highlighted": "Value"
    },
    {
      "count": 18,
      "isRefined": false,
      "value": "Brand Connect",
      "label": "Brand Connect",
      "highlighted": "Brand Connect"
    },
    {
      "count": 16,
      "isRefined": false,
      "value": "First Impression",
      "label": "First Impression",
      "highlighted": "First Impression"
    },
    {
      "count": 9,
      "isRefined": false,
      "value": "Emotion",
      "label": "Emotion",
      "highlighted": "Emotion"
    },
    {
      "count": 5,
      "isRefined": false,
      "value": "Urgency",
      "label": "Urgency",
      "highlighted": "Urgency"
    },
    {
      "count": 3,
      "isRefined": false,
      "value": "User Actions",
      "label": "User Actions",
      "highlighted": "User Actions"
    }
  ]

  const refinementHandler = (currentItem: any) => {
    items.forEach(item => {
        if(item.isRefined) {
            refine(item.value)
            refine(currentItem)
            item.isRefined = false
            setCurrentSelectedCategory(currentItem)
        }
    })

    if(!currentSelectedCategory) {
        refine(currentItem)
        setCurrentSelectedCategory(currentItem)
    } 
  }

  return (
    <>
      <ul>
        {itemsMapping.map((item) => (
          <li className={`${currentSelectedCategory === item.label ? 'font-semibold' : ''}`}  key={item.label}>
            <label className='text-black cursor-pointer' onClick={() => refinementHandler(item.value)}>
              <span>{item.label}</span>
              <span> ({item.count})</span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CustomRefinementList;