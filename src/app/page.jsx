'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Home() {
  const [inputVal, setInputVal] = useState('');
  const { push } = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-600">
      <div className='bg-slate-400 p-[40px] flex flex-col rounded-lg'>
        <div className='flex align-middle justify-center h-[10vh]'>
          <h1>Enter your name</h1>
        </div>
        <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
          <input
            type="text"
            className="text-black rounded-sm shadow-sm border-[2px] hover:border-gray-600 duration-300 focus:border-gray-400 "
            placeholder="Enter your name"
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button className='mt-[10px] bg-slate-500 hover:bg-slate-600 w-[70%] rounded-md h-[30px] flex items-center justify-center' type="submit">Predict Data</button>
        </form>
      </div>
    </div>
  );
}
