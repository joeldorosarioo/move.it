import { ChallengesProvider } from '@contexts/ChallengesContexts';
import { CountdownProvider } from '@contexts/CountdownContext';

import ChallengeBox from '@components/ChallengeBox';
import CompletedChallenges from '@components/CompletedChallenges';
import Countdown from '@components/Countdown';
import ExperienceBar from '@components/ExperienceBar';
import Profile from '@components/Profile';

type THome = {
	level: number;
	currentExperience: number;
	challengesCompleted: number;
}

export default function Home ({ level, currentExperience, challengesCompleted }: THome) {
	return (
		<ChallengesProvider
			level={ level }
			currentExperience={ currentExperience }
			challengesCompleted={ challengesCompleted }
		>
			<div className="flex flex-col h-full max-w-5xl m-auto px-9 py-8">
				<ExperienceBar />

				<CountdownProvider>
					<section className="flex-1 grid grid-cols-1 md:grid-cols-2 content-center gap-24 mt-14">
						<div>
							<Profile />
							<CompletedChallenges />
							<Countdown />
						</div>

						<div>
							<ChallengeBox />
						</div>
					</section>
				</CountdownProvider>
			</div>
		</ChallengesProvider>
	);
}
