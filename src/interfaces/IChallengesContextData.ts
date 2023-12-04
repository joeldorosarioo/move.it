import { TChallenge } from '@interfaces/TChallenge';

export interface IChallengesContextData {
	level: number;
	currentExperience: number;
	experienceToNextLevel: number;
	challengesCompleted: number;
	activeChallenge: TChallenge | null;

	levelUp: () => void;
	startNewChallenger: () => void;
	resetChallenge: () => void;
	completeChallenge: () => void;
	closeLevelUpModal: () => void;
}
