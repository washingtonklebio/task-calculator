module.exports = {
	theme: {
		colors: {
			white: '#ffffff',
			background: '#0f111d',
			secondary: '#181b2e',
			'gray-line': '#dcdde8',
			text: '#f2f3f5',
			'text-highlight': '#b3b9ff',
			title: '#DEE2FD',
			red: '#e83f5b',
			'red-dark': '#d13952',
			green: '#4cd62b',
			'green-dark': '#43c026',
			blue: '#5965e0',
			'blue-dark': '#4953b8',
			'blue-twitter': '#2aa9e0',
		},
	},
	variants: {},
	plugins: [],
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'components/**/*.vue',
			'layouts/**/*.vue',
			'pages/**/*.vue',
			'plugins/**/*.js',
			'nuxt.config.js',
			// TypeScript
			'plugins/**/*.ts',
			'nuxt.config.ts',
		],
	},
};
