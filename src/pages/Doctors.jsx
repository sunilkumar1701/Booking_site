import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const { speciality } = useParams()
  const[filterDoc,setFilterDoc] = useState([])
  const [showFilter,setShowFilter] = useState(false)
  const navigate = useNavigate()

  const{doctors} = useContext(AppContext)

  const applyFilter = () =>{
    if(speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])

  return (
    <div>
        <p className='text-gray-600'>Browse through the Resource.</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
          <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
            <p onClick={()=> speciality === 'CSE' ? navigate('/doctors') : navigate('/doctors/CSE')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "CSE" ? "bg-indigo-100 text-black" : ""}`}>CSE</p>
            <p onClick={()=> speciality === 'IT' ? navigate('/doctors') : navigate('/doctors/IT')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "IT" ? "bg-indigo-100 text-black" : ""}`}>IT</p>
            <p onClick={()=> speciality === 'ECE' ? navigate('/doctors') : navigate('/doctors/ECE')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "ECE" ? "bg-indigo-100 text-black" : ""}`}>ECE</p>
            <p onClick={()=> speciality === 'MECH' ? navigate('/doctors') : navigate('/doctors/MECH')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "MECH" ? "bg-indigo-100 text-black" : ""}`}>MECH</p>
            <p onClick={()=> speciality === 'BME' ? navigate('/doctors') : navigate('/doctors/BME')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "BME" ? "bg-indigo-100 text-black" : ""}`}>BME</p>
            <p onClick={()=> speciality === 'SPORTS' ? navigate('/doctors') : navigate('/doctors/SPORTS')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "SPORTS" ? "bg-indigo-100 text-black" : ""}`}>SPORTS</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
              filterDoc.map((item,index) =>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200   rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50 ' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className=' text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className=' text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))
            }
          </div>
        </div>
    </div>
  )
}

export default Doctors