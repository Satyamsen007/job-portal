import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill';
import { JobCategories, JobLocations } from '../assets/assets';
const AddJob = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('Bangalore');
  const [category, setCategory] = useState('Programming');
  const [level, setLevel] = useState('Programming');
  const [salary, setSalary] = useState(0)
  const editerRef = useRef(null)
  const quillRef = useRef(null)

  useEffect(() => {
    // Initiat Quill Only once
    if (!quillRef.current && editerRef.current) {
      quillRef.current = new Quill(editerRef.current, {
        theme: 'snow'
      })
    }
  }, [])
  return (
    <form className='container p-4 flex flex-col w-full items-start gap-3'>
      <div className='w-full'>
        <p className='mb-2'>Job Title</p>
        <input onChange={(e) => setTitle(e.target.value)} value={title} required className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded-md' type="text" placeholder='Type here' />
      </div>
      <div className='w-full max-w-lg'>
        <p className='my-2'>Job Description</p>
        <div ref={editerRef}>

        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Job Category</p>
          <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={(e) => setCategory(e.target.value)}>
            {JobCategories.map((category, i) => (
              <option key={i} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <p className='mb-2'>Job Location</p>
          <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={(e) => setLocation(e.target.value)}>
            {JobLocations.map((location, i) => (
              <option key={i} value={location}>{location}</option>
            ))}
          </select>
        </div>
        <div>
          <p className='mb-2'>Job Level</p>
          <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={(e) => setLevel(e.target.value)}>
            <option value="Beginner level">Beginner level</option>
            <option value="Intermediate level">Intermediate level</option>
            <option value="Senior level">Senior level</option>
          </select>
        </div>
      </div>
      <div>
        <p className='mb-2'>Job Salery</p>
        <input className='w-full px-3 py-2 border border-gray-300 rounded sm:w-[120px]' onChange={(e) => setSalary(e.target.value)} type="number" min={0} placeholder='2500' />
      </div>
      <button className='w-28 py-3 mt-4 bg-black text-white rounded'>Add</button>
    </form>
  )
}

export default AddJob