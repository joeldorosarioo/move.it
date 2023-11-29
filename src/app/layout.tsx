import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Move.it - Pomodoro and Challenges: The Formula for an Active Lifestyle.',
	description: 'Enhance your well-being with Move.it, a project integrating the Pomodoro technique with invigorating challenges for computer users.',
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-zinc-100 text-zinc-950">
				{ children }
			</body>
		</html>
	);
}
