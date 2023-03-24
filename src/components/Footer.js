import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <div className='bg-gray-700 text-white h-full rounded-md overflow-hidden'>
        
        <div className='flex justify-center my-10'>
            <h1 className='text-3xl text-white font-bold'>What is this?</h1>
        </div>

        <div className='flex flex-col items-center justify-center gap-y-10'>
            
            {/* <div className='flex flex-row items-center justify-center gap-2'> */}
                <p className='max-w-sm md:max-w-md lg:max-w-lg text-center text-sm md:text-xl'>
                  MetricSIM is a web-based platform that provides a comprehensive overview of
                   simulation data for an offshore wind farm. The platform displays various
                    metrics related to the performance and efficiency of the wind farm, including 
                    wind speed, wind direction, swell direction, swell height, and wave height. 
                    Users can view the simulation data in real-time and analyze it to identify trends 
                    and patterns in the wind farm's performance.
                </p>
            {/* </div> */}
        </div>

        <div className='p-10'>

        </div>
    </div>
  )
}

export default Contact