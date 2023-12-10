import React, { useState, useEffect } from 'react';

interface Props {
    setEmails: React.Dispatch<React.SetStateAction<string[]>>;
    emails: string[]
}

const EmailMultiSelect:React.FC<Props> = ({ emails, setEmails }) => {
  const [textInput, setTextInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     // Dispatch custom event 'emails-update' whenever emails change
//     const event = new CustomEvent('emails-update', {
//       detail: { emails },
//       bubbles: true,
//     });
//     window.dispatchEvent(event);
//   }, [emails]);

  const addTag = (tag: any) => {
    tag = tag.trim();
    if (tag && !emails.includes(tag.toLowerCase())) {
      setEmails([...emails, tag]);
    }
    clearSearch();
  };

  const removeTag = (index: any) => {
    const newemails = [...emails];
    newemails.splice(index, 1);
    setEmails(newemails);
  };

  const search = (q: any) => {
    if (q.includes(',')) {
      q.split(',').forEach((val: any) => addTag(val));
    }
    toggleSearch();
  };

  const clearSearch = () => {
    setTextInput('');
    toggleSearch();
  };

  const toggleSearch = () => {
    setIsOpen(textInput !== '');
  };

  return (
    <div className="w-[80%] h-[44px]">
      <div className="relative h-[100%]" onClick={() => clearSearch()}>
        <input
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onInput={(e: any) => search(e.target.value)}
          className="shadow appearance-none border rounded w-full h-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter some emails"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              addTag(textInput);
            } else if (e.key === 'Escape') {
              clearSearch();
            }
          }}
        />
        {
        emails.length > 0 && 
        <div className='bg-[#383232] py-[14px] px-[10px] rounded-bl-md rounded-br-md pb-[22px] text-black'>
            {
        emails.map((tag: any, index: number) => (
          <div key={index} className="bg-[#e8e8e8] inline-flex items-center text-sm rounded mt-2 mr-1">
            <span className="ml-2 mr-1 leading-relaxed truncate max-w-xs">{tag}</span>
            <button
              onClick={() => removeTag(index)}
              className="w-6 h-8 inline-block align-middle text-gray-500 hover:text-gray-600 focus:outline-none cursor-pointer"
            >
              <svg
                className="w-6 h-6 fill-current mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
                />
              </svg>
            </button>
          </div>
                  ))
        }
        </div>
        }
      </div>
    </div>
  );
};

export default EmailMultiSelect;
