import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Applyjob from './pages/Applyjob'
import Aplications from './pages/Aplications'
import RecruiterLogin from './components/RecruiterLogin'
import { AppContext } from './context/appContext'
import DashBoard from './pages/DashBoard'
import AddJob from './pages/AddJob'
import ManageJob from './pages/ManageJob'
import ViewApplications from './pages/ViewApplications'
import 'quill/dist/quill.snow.css'
function App() {
  const { showRecuiterLogin } = useContext(AppContext)
  return (
    <div>
      {showRecuiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<Applyjob />} />
        <Route path='/applications' element={<Aplications />} />
        <Route path='/dashboard' element={<DashBoard />} >
          <Route path='add-job' element={<AddJob />} />
          <Route path='manage-job' element={<ManageJob />} />
          <Route path='view-applications' element={<ViewApplications />} />
        </Route>
      </Routes>
    </div>

  )
}

export default App
