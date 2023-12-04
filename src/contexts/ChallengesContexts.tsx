'use client'

import {
	createContext, useState, useEffect
} from 'react';

import Cookies from 'js-cookie';

import { IChallengesContextData } from '@interfaces/IChallengesContextData';
import { IChallengesProviderProps } from '@interfaces/IChallengesProviderProps';
import { TChallenge } from '@interfaces/TChallenge';

import LevelUpModal from '@components/LevelUpModal';
import challenges from '@data/challenges.json';

export const ChallengesContext = createContext({} as IChallengesContextData);

export function ChallengesProvider ({ children, ...rest }: IChallengesProviderProps) {
	const [level, setLevel] = useState(rest.level ?? 1);
	const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
	const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
	const [activeChallenge, setActiveChallenge] = useState<TChallenge | null>(null);
	const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

	const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

	useEffect(() => {
		Cookies.set('level', String(level));
		Cookies.set('currentExperience', String(currentExperience));
		Cookies.set('challengesCompleted', String(challengesCompleted));
	}, [level, currentExperience, challengesCompleted]);

	function levelUp () {
		setLevel(level + 1);
		setIsLevelUpModalOpen(true);
	}

	function closeLevelUpModal () {
		setIsLevelUpModalOpen(false);
	}

	function startNewChallenger () {
		const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
		const challenge = challenges[randomChallengeIndex];

		setActiveChallenge(challenge);

		new Audio('/notification.mp3').play();
	}

	function resetChallenge () {
		setActiveChallenge(null);
	}

	function completeChallenge () {
		if (!activeChallenge) return;

		const { amount } = activeChallenge;
		let finalExperience = currentExperience + amount;

		if (finalExperience >= experienceToNextLevel) {
			finalExperience = finalExperience - experienceToNextLevel;
			levelUp();
		}

		setCurrentExperience(finalExperience);
		setActiveChallenge(null);
		setChallengesCompleted(challengesCompleted + 1);
	}

	return (
		<ChallengesContext.Provider
			value={{
				level,
				currentExperience,
				experienceToNextLevel,
				challengesCompleted,
				activeChallenge,

				levelUp,
				startNewChallenger,
				resetChallenge,
				completeChallenge,
				closeLevelUpModal,
			}}
		>
			{ children }
			{ isLevelUpModalOpen && <LevelUpModal /> }
		</ChallengesContext.Provider>
	);
}
