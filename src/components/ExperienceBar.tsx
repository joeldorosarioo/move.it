'use client'

import { useContext } from 'react';
import { ChallengesContext } from '@contexts/ChallengesContexts';

export default function ExperienceBar () {
	const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
	const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

	return (
		<header className="flex items-center">
			<span className="text-base text-[#666666]">0 xp</span>

			<div className="relative mx-6 rounded flex-1 h-1 bg-[#DCDDE0]">
				<div
					className="h-1 rounded bg-[#4CD62B]"
					style={{ width: `${ percentToNextLevel }%` }}
				/>

				<span className="absolute top-3 text-base text-[#666666]" style={{ left: `${ percentToNextLevel }%` }}>
					{ currentExperience } xp
				</span>
			</div>

			<span className="text-base text-[#666666]">{ experienceToNextLevel } xp</span>
		</header>
	);
}
