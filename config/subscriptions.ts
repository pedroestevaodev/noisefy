import { PlansRow, SubscriptionPlan } from "@/types/subscription";

export const pricingData: SubscriptionPlan[] = [
	{
		title: "Starter",
		description: "Para iniciantes",
		benefits: [
			"10 créditos diários",
			"Conversão de cores limitada",
			"Geração de histogramas limitada",
		],
		limitations: [
			"Galeria limitada (até 1Gb)",
			"Ferramentas de limiarização limitadas",
			"Suporte básico",
		],
		prices: {
			monthly: 0,
			yearly: 0,
		},
		stripeIds: {
			monthly: null,
			yearly: null,
		},
	},
	{
		title: "Pro",
		description: "Desbloqueie recursos avançados",
		benefits: [
			"500 créditos diários",
			"Conversão de cores ilimitada",
			"Geração de histogramas ilimitada",
			"Expansão da galeria (até 5Gb)",
		],
		limitations: [
			"Ferramentas de limiarização limitadas",
			"Suporte por e-mail",
		],
		prices: {
			monthly: 15,
			yearly: 144,
		},
		stripeIds: {
			monthly: process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID ?? null,
			yearly: process.env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID ?? null,
		},
	},
	{
		title: "Business",
		description: "Para usuários avançados",
		benefits: [
			"10.000 créditos diários",
			"Conversão de cores ilimitada",
			"Geração de histogramas ilimitada",
			"Galeria ilimitada",
			"Ferramentas de limiarização avançadas",
			"Suporte prioritário 24/7",
			"Acesso antecipado a novos recursos",
		],
		limitations: [],
		prices: {
			monthly: 30,
			yearly: 300,
		},
		stripeIds: {
			monthly: process.env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID ?? null,
			yearly: process.env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID ?? null,
		},
	},
];

export const plansColumns = [
	"starter",
	"pro",
	"business",
	"enterprise",
] as const;

export const comparePlans: PlansRow[] = [
	{
		feature: "Access to Analytics",
		starter: true,
		pro: true,
		business: true,
		enterprise: "Custom",
		tooltip: "All plans include basic analytics for tracking performance.",
	},
	{
		feature: "Custom Branding",
		starter: null,
		pro: "500/mo",
		business: "1,500/mo",
		enterprise: "Unlimited",
		tooltip: "Custom branding is available from the Pro plan onwards.",
	},
	{
		feature: "Priority Support",
		starter: null,
		pro: "Email",
		business: "Email & Chat",
		enterprise: "24/7 Support",
	},
	{
		feature: "Advanced Reporting",
		starter: null,
		pro: null,
		business: true,
		enterprise: "Custom",
		tooltip:
			"Advanced reporting is available in Business and Enterprise plans.",
	},
	{
		feature: "Dedicated Manager",
		starter: null,
		pro: null,
		business: null,
		enterprise: true,
		tooltip: "Enterprise plan includes a dedicated account manager.",
	},
	{
		feature: "API Access",
		starter: "Limited",
		pro: "Standard",
		business: "Enhanced",
		enterprise: "Full",
	},
	{
		feature: "Monthly Webinars",
		starter: false,
		pro: true,
		business: true,
		enterprise: "Custom",
		tooltip: "Pro and higher plans include access to monthly webinars.",
	},
	{
		feature: "Custom Integrations",
		starter: false,
		pro: false,
		business: "Available",
		enterprise: "Available",
		tooltip:
			"Custom integrations are available in Business and Enterprise plans.",
	},
	{
		feature: "Roles and Permissions",
		starter: null,
		pro: "Basic",
		business: "Advanced",
		enterprise: "Advanced",
		tooltip:
			"User roles and permissions management improves with higher plans.",
	},
	{
		feature: "Onboarding Assistance",
		starter: false,
		pro: "Self-service",
		business: "Assisted",
		enterprise: "Full Service",
		tooltip: "Higher plans include more comprehensive onboarding assistance.",
	},
	// Add more rows as needed
];
