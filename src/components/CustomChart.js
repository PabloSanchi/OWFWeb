import React, { useState, useEffect } from "react";
import { LineChart, Card, Title, Button } from "@tremor/react";

export const DataDirection = ({ data }) => {
	const [show, setShow] = useState(true);

	const dataFormatter = (number) =>
		`${Intl.NumberFormat("us").format(number).toString()}º`;

	return (
		<Card className="mt-5">
			<div className="flex space-x-5 items-center">
				<Title>Wind Direction</Title>
				<Button
					className="hidden md:flex bg-[#10b981] border-none hover:bg-[#0b7854]"
					size="xs"
					onClick={() => setShow(!show)}
				>
					WD
				</Button>
			</div>

			<LineChart
				data={data.wind_direction.map((value, index) => {
					return { x: index, "Wind Direction": value };
				})}
				index="x"
				categories={[show ? "Wind Direction" : undefined]}
				colors={["emerald"]}
				valueFormatter={dataFormatter}
				yAxisWidth={30}
				showAnimation={false}
				startEndOnly={false}
			/>
		</Card>
	);
};

export const DataHeight = ({ data }) => {
	const [showWH, setShowWH] = useState(true);
	const [showSH, setShowSH] = useState(true);

	return (
		<Card className="mt-5">
			<div className="flex space-x-5 items-center">
				<Title>Wave and Swell Height</Title>
				<div className="hidden md:flex space-x-5">
					<Button
						className="bg-[#10b981] border-none hover:bg-[#0b7854]"
						size="xs"
						onClick={() => setShowWH(!showWH)}
					>
						WH
					</Button>
					<Button
						className="bg-gray-500 border-none hover:bg-gray-700"
						size="xs"
						onClick={() => setShowSH(!showSH)}
					>
						SH
					</Button>
				</div>
			</div>
			'
			<LineChart
				data={data.wave_height.map((value, index) => {
					return {
						x: index,
						"Wave Height": value,
						"Swell Height": data.swell_height[index],
					};
				})}
				index="x"
				categories={[
					showWH ? "Wave Height" : undefined,
					showSH ? "Swell Height" : undefined,
				]}
				colors={["emerald", "gray"]}
				// valueFormatter={dataFormatter}
				yAxisWidth={30}
				showAnimation={false}
				startEndOnly={false}
			/>
		</Card>
	);
};

export const SpeedOptions = ({ data }) => {
	const [show, setShow] = useState(true);

	const dataFormatter = (number) =>
		`${Intl.NumberFormat("us").format(number).toString()}º`;

	return (
		<Card className="mt-5">
			<div className="flex space-x-5 items-center">
				<Title>Wind Speed</Title>
				<Button
					className="hidden md:flex bg-[#10b981] border-none hover:bg-[#0b7854]"
					size="xs"
					onClick={() => setShow(!show)}
				>
					WS
				</Button>
			</div>
			<LineChart
				data={data.wind_speed.map((value, index) => {
					return { x: index, "Wind Speed": value };
				})}
				index="x"
				categories={[show ? "Wind Speed" : undefined]}
				colors={["emerald"]}
				valueFormatter={dataFormatter}
				yAxisWidth={30}
				showAnimation={false}
				startEndOnly={false}
			/>
		</Card>
	);
};

export const EnergyPerOWT = ({ energy }) => {

	const [showSS1, setShowSS1] = useState(true);
	const [showSS2, setShowSS2] = useState(true);
	const [showTL, setShowTL] = useState(true);
	const [showMP, setShowMP] = useState(true);

	return (
		<Card className="mt-5">
			<div className="flex space-x-5 items-center">
				<Title>Engergy per OWF</Title>
				<div className="hidden md:flex space-x-5">
					<Button
						className="bg-red-500 border-none hover:bg-red-700"
						size="xs"
						onClick={() => setShowSS1(!showSS1)}
					>
						SS1
					</Button>
					<Button
						className="bg-[#10b981] border-none hover:bg-[#0b7854]"
						size="xs"
						onClick={() => setShowSS2(!showSS2)}
					>
						SS2
					</Button>
					<Button
						className="bg-blue-500 border-none hover:bg-blue-700"
						size="xs"
						onClick={() => setShowTL(!showTL)}
					>
						TL
					</Button>
					<Button
						className="bg-purple-500 border-none hover:bg-pruple-700"
						size="xs"
						onClick={() => setShowMP(!showMP)}
					>
						MP
					</Button>
				</div>
			</div>
			<LineChart
				data={energy.semi_submersible_1.map((value, index) => {
					return {
						x: index,
						"Semi-submersible 1": value,
						"Semi-submersible 2": energy.semi_submersible_2[index],
						"Tension Leg": energy.tension_leg[index],
						Monopile: energy.mono_pile[index],
					};
				})}
				index="x"
				categories={[
					showSS1 ? "Semi-submersible 1" : undefined,
					showSS2 ? "Semi-submersible 2" : undefined,
					showTL ? "Tension Leg" : undefined,
					showMP ? "Monopile" : undefined,
				]}
				colors={["red", "green", "blue", "purple"]}
				// valueFormatter={dataFormatter}
				yAxisWidth={30}
				showAnimation={false}
				startEndOnly={false}
			/>
		</Card>
	);
};
