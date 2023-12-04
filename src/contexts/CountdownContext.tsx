'use client'

import {
	createContext, useContext, useEffect, useState
} from 'react';

import { ChallengesContext } from '@contexts/ChallengesContexts';

import { ICountdownContextData } from '@interfaces/ICountdownContextData';
import { ICountdownProviderProps } from '@interfaces/ICountdownProviderProps';

export const CountdownContext = createContext({} as ICountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider ({ children }: ICountdownProviderProps) {
	const { startNewChallenger } = useContext(ChallengesContext);

	const [time, setTime] = useState(25 * 60); // 25 multiplied by 60 is equal to 1500 minutes.
	const [isActive, setIsActive] = useState(false);
	const [hasFinished, setHasFinished] = useState(false);

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	function startCountdown () {
		setIsActive(true);
	}

	function resetCountdown () {
		clearTimeout(countdownTimeout);
		setIsActive(false);
		setTime(25 * 60);  // 25 multiplied by 60 is equal to 1500 minutes.
		setHasFinished(false);
	}

	useEffect(() => {
		if (isActive && time > 0) {
			countdownTimeout = setTimeout(() => { setTime(time - 1) }, 1000);
		} else if (isActive && time === 0) {
			setHasFinished(true);
			setIsActive(false);
			startNewChallenger();
		}
	}, [isActive, time, startNewChallenger]);

	return (
		<CountdownContext.Provider value={{
			minutes,
			seconds,
			hasFinished,
			isActive,

			startCountdown,
			resetCountdown
		}}>
			{children}
		</CountdownContext.Provider>
	)
}
