'use client'

import React, { useContext } from 'react';
import clsx from 'clsx';
import { Rajdhani } from 'next/font/google'

import { CountdownContext } from '@contexts/CountdownContext';

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['400', '500', '600']
});

export default function Countdown () {
	const {
		minutes,
		seconds,
		hasFinished,
		isActive,

		startCountdown,
		resetCountdown
	} = useContext(CountdownContext);

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

	return (
		<React.Fragment>
			<div className={ clsx('flex items-center gap-2 font-semibold text-[#2E384D]', rajdhani.className) }>
				<div className="flex-1 rounded-md flex items-center justify-evenly text-9xl text-center bg-white">
					<span className="flex-1 border-r-2 border-[#F0F1F3]">{ minuteLeft }</span>
					<span className="flex-1 border-l-2 border-[#F0F1F3]">{ minuteRight }</span>
				</div>

				<span className="text-8xl">:</span>

				<div className="flex-1 rounded-md flex items-center justify-evenly text-9xl text-center bg-white">
					<span className="flex-1 border-r-2 border-[#F0F1F3]">{ secondLeft }</span>
					<span className="flex-1 border-l-2 border-[#F0F1F3]">{ secondRight }</span>
				</div>
			</div>

			{ hasFinished ? (
				<button
					type="button"
					disabled
					className="mt-8 border-none rounded-md flex items-center justify-center w-full h-20 font-semibold text-xl bg-white text-[#2E384D] cursor-not-allowed text-opacity-75"
				>
					Cycle Ended
				</button>
			) : (
				<React.Fragment>
					{ isActive ? (
						<button
							type="button"
							className="mt-8 border-none rounded-md flex items-center justify-center w-full h-20 font-semibold text-xl transition-colors bg-white text-[#2E384D] hover:bg-[#E83F5B] hover:text-white"
							onClick={ resetCountdown }
						>
							Abandon
						</button>
					) : (
						<button
							type="button"
							className="mt-8 border-none rounded-md flex items-center justify-center w-full h-20 font-semibold text-xl text-white transition-colors bg-[#5965E0] hover:bg-[#4953B8]"
							onClick={ startCountdown }
						>
							Start
						</button>
					) }
				</React.Fragment>
			) }
		</React.Fragment>
	);
}
