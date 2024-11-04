import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";
import { Montserrat } from "next/font/google";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
    	container: {
    		center: true,
    		padding: '.8rem',
    	},
    	extend: {
			spacing: {
				'100': '72rem',
				'98': '68rem'
			  },
			
    		borderRadius: {
    			circle: '50%',
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
				'noisefy': {
					50: '#f7f3fd',
					100: '#ded0f5',
					200: '#c3aced',
					300: '#67e8f9',
					400: '#906ddc',
					500: '#825fd8',
					600: '#714cd3',
					700: '#623fcf',
					800: '#5131b6',
					900: '#36226c',
					950: '1e1433',
				  },
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    		},
    		fontFamily: {
    			sans: ["var(--font-sans)", ...fontFamily.sans],
    			urban: ["var(--font-urban)", ...fontFamily.sans],
    			heading: ["var(--font-heading)", ...fontFamily.sans],
    			geist: ["var(--font-geist)", ...fontFamily.sans],
				'roboto': ['Roboto']
    		},
			fontSize: {
				'2xl': '1.28rem',
			},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	},
    },
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'translate-z': (value) => ({
						'--tw-translate-z': value,
						transform: `translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
					}),
				},
				{
					values: theme('translate'),
					supportsNegativeValues: true,
				}
			);
			matchUtilities(
				{
					'perspective': (value) => ({
						'--tw-perspective': value,
						perspective: `var(--tw-perspective)`,
					}),
				},
				{
					values: theme('perspective'),
					supportsNegativeValues: true,
				}
			);
		}),
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.transform-style-3d': {
					'transform-style': 'preserve-3d',
				},
			})
		}),

	
	],
};

export default config;