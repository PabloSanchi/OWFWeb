import React, { useState, useEffect } from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const directionOptions = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Wind and Swell Direction',
		},
	},
};

const heightOptions = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Wave and Swell Height',
		},
	},
};


const speedOptions = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Wind Speed',
		},
	},
};

const energyOptions = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Energy/OWT (MegaWatts MW)',
		},
	},
};

export const DataDirection = ({ data }) => {
	const labels = Array(data.wind_direction.length).fill('');

	const config = {
		labels,
		datasets: [
			{
				label: 'wind direction',
				data: data.wind_direction,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: 'swell direction',
				data: data.swell_direction,
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	};

	return (
		<Line
			style={{ paddingInline: '2em' }}
			width='60%'
			height='30%'
			options={directionOptions}
			data={config}
		/>
		// <div className='w-full md:px-[10rem] h-[30rem] md:h-[30rem]'>
		// </div>
	);
};

export const DataHeight = ({ data }) => {
	const labels = Array(data.wave_height.length).fill('');

	const config = {
		labels,
		datasets: [
			{
				label: 'wave height',
				data: data.wave_height,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: 'swell height',
				data: data.swell_height,
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	};

	return (
		<Line
			style={{ paddingInline: '2em' }}
			width='60%'
			height='30%'
			options={heightOptions}
			data={config}
		/>
		// <div className='md:px-[10rem] md:h-[30rem]'>
		// </div>
	);
};

export const SpeedOptions = ({ data }) => {
	const labels = Array(data.wind_speed.length).fill('');

	const config = {
		labels,
		datasets: [
			{
				label: 'wind speed',
				data: data.wind_speed,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	};

	return (
		<Line
			style={{ paddingInline: '2em' }}
			width='60%'
			height='30%'
			options={speedOptions}
			data={config}
		/>
		// <div className='md:px-[10rem] md:h-[30rem]'>
		// </div>
	);
};

export const EnergyPerOWT = ({ energy }) => {
	const labels = Array(energy.mono_pile.length).fill('');

	const config = {
		labels,
		datasets: [
			{
				label: 'semi-submersible 1',
				data: energy.semi_submersible_1,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: 'semi-submersible 2',
				data: energy.semi_submersible_2,
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
			{
				label: 'tension leg',
				data: energy.tension_leg,
				borderColor: 'rgb(162, 53, 235)',
				backgroundColor: 'rgba(162, 53, 235, 0.5)',
			},
			{
				label: 'monopile',
				data: energy.mono_pile,
				borderColor: 'rgb(70, 106, 68)',
				backgroundColor: 'rgba(70, 106, 68, 0.5)',
			},
		],	
	};

	return (
		<Line
			style={{ paddingInline: '2em' }}
			width='60%'
			height='30%'
			options={energyOptions}
			data={config}
		/>
	);
};
