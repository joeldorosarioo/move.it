'use client'

import { useContext } from 'react';
import { ChallengesContext } from '@contexts/ChallengesContexts';

export default function CompletedChallenges () {
	const { challengesCompleted } = useContext(ChallengesContext);

	return (
		<div className="flex items-center justify-between my-6 pb-4 border-b border-[#D7D8DA] text-[#666666]">
			<span className="text-base">Completed Challenges</span>
			<span className="text-base">{ challengesCompleted }</span>
		</div>
	);
}
