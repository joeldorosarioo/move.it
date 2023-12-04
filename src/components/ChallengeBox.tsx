'use client'

import { useContext } from 'react';
import Image from 'next/image';

import { ChallengesContext } from '@contexts/ChallengesContexts';
import { CountdownContext } from '@contexts/CountdownContext';

export default function ChallengeBox () {
	const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
	const { resetCountdown } = useContext(CountdownContext);

	function handleChallengeSucceeded () {
		completeChallenge();
		resetCountdown();
	}

	function handleChallengeFailed () {
		resetChallenge();
		resetCountdown()
	}

	return (
		<div className="h-full bg-white rounded-md shadow-sm px-6 py-8 flex flex-col items-center justify-center text-center">
			{ activeChallenge ? (
				<div className="h-full flex flex-col gap-8">
					<header className="border-b border-[#DCDDE0] text-xl font-semibold text-[#5965E0] px-8 pb-5">
						Earn { activeChallenge.amount } xp
					</header>

					<main className="flex-1 flex flex-col items-center justify-center">
						<Image
							src={`icons/${ activeChallenge.type }.svg`}
							alt="" width={ 140 } height={ 140 }
						/>

						<strong className="text-3xl font-semibold text-[#2E384D] mt-6 mb-4">
							New Challenge
						</strong>

						<p className="text-[#666666] text-base text-wrap-balanced">
							{ activeChallenge.description }
						</p>
					</main>

					<footer className="grid grid-cols-2 gap-4">
						<button
							type="button"
							className="flex items-center justify-center border-none rounded-md h-12 text-white bg-[#E83F5B] hover:bg-red-600 font-semibold transition"
							onClick={ handleChallengeFailed }
						>
							Failed
						</button>

						<button
							type="button"
							className="flex items-center justify-center border-none rounded-md h-12 text-white bg-[#4CD62B] hover:bg-green-500 font-semibold transition"
							onClick={ handleChallengeSucceeded }
						>
							Completed
						</button>
					</footer>
				</div>
			) : (
				<div className="flex flex-col items-center gap-10 text-[#666666] text-wrap-balanced">
					<strong className="text-2xl font-medium">
						Finish a Cycle to Receive New Challenges
					</strong>

					<div className="flex flex-col items-center gap-4">
						<Image
							src="icons/level-up.svg"
							alt="Level Up"
							width={ 59 } height={ 80 }
						/>

						<span className="text-base">
							Advance to the Next Level by Completing Challenges.
						</span>
					</div>
				</div>
			) }
		</div>
	)
}
