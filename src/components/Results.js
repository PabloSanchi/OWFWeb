import React, { useState, Component } from 'react'
import { useData } from '../Services/useData'
import { DataDirection, DataHeight, SpeedOptions } from './CustomChart';



const Results = () => {
    const { data, reset } = useData();

    return (
        <div className='flex flex-col bg-gray-100'>
            <div className='p-5 flex flex-row justify-center'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={reset}>
                    Reset Data
                </button>
            </div>
            {data && (
                <div className='flex flex-col md:px-10 lg:px-xl'>
                    {/* <pre>Data Snap: {JSON.stringify(data, 2, 4)}</pre> */}
                    {/* <div className='mx-auto flex flex-col md:flex-row'> */}
                        <DataDirection data={data} />
                        <DataHeight data={data} />
                    {/* </div> */}
                    <SpeedOptions data={data} />
                </div>
            )}
        </div>
    );
};


export default Results;
