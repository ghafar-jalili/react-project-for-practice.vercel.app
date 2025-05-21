import React from 'react'

function SideBar() {
    return (
        <div className="bg-black/90 space-y-5 font-poppins rounded-tr-md text-center p-5 w-[25%] text-gray-400 w-100 min-vw-100">
            <h1 className='text-3xl font-bold'>Your Projects</h1>
            <button className='p-4 px-8 font-bold text-gray-200 bg-gray-800 rounded-md'>+ Add Project</button>

        </div>
    )
}

export default SideBar