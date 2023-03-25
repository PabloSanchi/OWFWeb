import React from 'react'
import { useData } from '../Services/useData'
import { DataDirection, DataHeight, SpeedOptions, EnergyPerOWT } from './CustomChart';
// import RealTimeChart from './RealTimeChart';



const Results = () => {
    const { data, energy, reset } = useData();

    return (
        <div className='flex flex-col bg-gray-100'>
            <div className='p-5 flex flex-row justify-center'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={reset}>
                    Reset Data
                </button>
            </div>
            {data && (
                <div className='flex flex-col md:px-10 lg:px-xl'>
                    <DataDirection data={data} />
                    <DataHeight data={data} />
                    <SpeedOptions data={data} />
                    <EnergyPerOWT data={data} energy={energy}/>
                </div>
            )}
        </div>
    );
};


export default Results;
