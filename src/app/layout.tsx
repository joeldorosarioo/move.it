import type { Metadata } from 'next'
import clsx from 'clsx';
import { Inter } from 'next/font/google'

import '@stylesheets/globals.css'

export const metadata: Metadata = {
	title: 'Move.it - Pomodoro and Challenges: The Formula for an Active Lifestyle.',
	description: 'Enhance your well-being with Move.it, a project integrating the Pomodoro technique with invigorating challenges for computer users.',
}

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600']
});

export default function RootLayout ({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={ clsx('text-lg bg-zinc-100 text-zinc-950 h-screen', inter.className) }>
				{ children }
			</body>
		</html>
	);
}
