'use client'

import { useContext } from 'react';
import Image from 'next/image';

import { ChallengesContext } from '@contexts/ChallengesContexts';

export default function LevelUpModal () {
	const { level, closeLevelUpModal } = useContext(ChallengesContext);

	return (
		<div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-zinc-100 bg-opacity-80">
			<div className="relative rounded-md shadow-md py-9 px-14 w-full max-w-md text-center bg-white">
				<header className="font-semibold text-9xl text-[#5965E0] bg-contain bg-no-repeat bg-center bg-[url('/icons/level-up-background.svg')]">
					{ level }
				</header>

				<strong className="text-4xl text-[#2E384D]">Congratulations</strong>
				<p className="mt-2 text-[#666666] text-xl">You have Reached a New Level</p>

				<button
					type="button"
					className="absolute right-2 top-2 border-none bg-transparent"
					onClick={ closeLevelUpModal }
				>
					<Image
						src="/icons/close.svg"
						alt="Fechar Modal"
						width={ 40 }
						height={ 40 }
					/>
				</button>
			</div>
		</div>
	)
}
