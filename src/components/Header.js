import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Header = () => {
  return (
    <header className='select-none shadow-lg p-5'>
        <div className='flex items-center justify-between max-w-[60rem] mx-auto'>
            <div>
                <h1 className='text-xl lg:text-3xl font-bold'>MetricSIM</h1>
                <h2 className='text-lg lg:text-xl font-light'>Data display</h2>
            </div>

            <button className='text-lg lg:text-xl font-light border-2 border-gray-500 rounded-md px-4 py-2 hover:bg-gray-500 hover:text-white'>
                DOCS
            </button>

            <div className='hidden md:flex space-x-4  items-center'>
                <a href='#repo' rel='noreferrer' target='_blank'>
                    <GitHubIcon />
                </a>
                {/* <a href='#repo' rel='noreferrer' target='_blank'>
                    <PictureAsPdfIcon />
                </a> */}
            </div>

        </div>
    </header>
  )
}

export default Header