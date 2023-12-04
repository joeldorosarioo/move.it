'use client'

import { useContext } from 'react';
import Image from 'next/image';

import { ChallengesContext } from '@contexts/ChallengesContexts';

export default function Profile () {
	const { level } = useContext(ChallengesContext);

	return (
		<div className="flex items-center">
			<Image src="/user-image.png" alt="Joel Oliveira" className="w-20 h-20 rounded-full" height={ 80 } width={ 80 } unoptimized />

			<div className="ml-7">
				<strong className="text-3xl font-semibold text-[#2E384D]">Joel Oliveira</strong>

				<div className="text-base mt-2 flex gap-2">
					<Image src="icons/level.svg" alt="Current Level" width={ 14 } height={ 16 } />
					<span className="text-zinc-500">Level { level }</span>
				</div>
			</div>
		</div>
	);
}
