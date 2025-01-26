import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { assets, jobsApplied } from '../assets/assets'
import moment from 'moment'
const Aplications = () => {
  const [isEdite, setIsEdite] = useState(false)
  const [resume, setResume] = useState(null)
  return (
    <>
      <Navbar />
      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        <h2 className='text-xl font-medium'>Your Resume</h2>
        <div className='flex gap-2 mb-6 mt-3'>
          {isEdite ? <>
            <label className='flex items-center' htmlFor="resumeUpload">
              <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2'>Select Resume</p>
              <input id='resumeUpload' onChange={e => setResume(e.target.files[0])} accept='application/pdf' type="file" hidden />
              <img src={assets.profile_upload_icon} alt="" />
            </label>
            <button onClick={(e) => setIsEdite(false)} className='bg-green-100 border border-green-400 rounded-lg px-4 py-2'>Save</button>
          </> : <div className='flex gap-2'>
            <a href="" className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg'>
              Resume
            </a>
            <button onClick={() => setIsEdite(true)} className='text-gray-500 border border-gray-300 rounded-lg px-4 py-2'>Edit</button>
          </div>}
        </div>
        <h2 className='text-xl font-semibold mb-4'>Jobs Applied</h2>
        <table className='min-w-full bg-white rounded-lg border'>
          <thead>
            <tr>
              <th className='py-3 px-4 border-b text-left'>Company</th>
              <th className='py-3 px-4 border-b text-left'>Job Title</th>
              <th className='py-3 px-4 border-b text-left max-sm:hidden'>Location</th>
              <th className='py-3 px-4 border-b text-left max-sm:hidden'>Date</th>
              <th className='py-3 px-4 border-b text-left'>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job) => true ? (
              <tr>
                <td className='py-3 px-4 flex items-center gap-2 border-b'>
                  <img className='w-8 h-8' src={job.logo} alt="" />
                  {job.company}
                </td>
                <td className='py-2 px-4 border-b'>
                  {job.title}
                </td>
                <td className='py-2 px-4 border-b max-sm:hidden'>
                  {job.location}
                </td>
                <td className='py-2 px-4 border-b max-sm:hidden'>
                  {moment(job.date).format('ll')}
                </td>
                <td className='py-2 px-4 border-b'>
                  <span className={`${job.status === 'Accepted' ? 'bg-green-100' : job.status === 'Rejected' ? 'bg-red-100' : 'bg-blue-100'} px-44 py-1.5 rounded`}> {job.status}</span>

                </td>
              </tr>
            ) : (null))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  )
}

export default Aplications