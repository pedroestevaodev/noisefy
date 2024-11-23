import { footerLinks, socialLinks } from "@/config/site";
import Link from "next/link";
import { NewsletterForm } from "../forms/NewsletterForm";
import { ModeToggle } from "@/components/common/ModeToggle";
import { Icons } from "@/components/common/Icons";

const Footer = () => {
    return (
        <footer className="border-t bg-noisefy-500 dark:bg-noisefy-900">
            <div className="container grid max-w-6xl grid-cols-2 gap-6 max-[375px]:gap-x-3 max-sm:gap-y-8 px-5 py-14 md:grid-cols-5">
                {footerLinks.map((section) => (
                    <div key={section.title}>
                        <span className="text-sm font-semibold uppercase text-white dark:text-foreground">
                            {section.title}
                        </span>
                        <ul className="mt-4 list-inside space-y-3">
                            {section.items.map((item) => {
                                const Icon = item.icon ? Icons[item.icon] : null;

                                return (
                                    <li key={item.title}>
                                        <Link
                                            href={item.href}
                                            className="flex items-center gap-2 text-sm text-neutral-300 font-medium hover:text-white hover:dark:text-primary focus-visible:outline-none focus-visible:ring-0 focus-visible:text-white focus-visible:underline transition-colors duration-200"
                                        >
                                            {Icon && <Icon className="size-5" />}
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
                <div className="col-span-full flex flex-col items-end sm:col-span-1 md:col-span-2">
                    <NewsletterForm />
                </div>
            </div>

            <div className="border-t py-4">
                <div className="container flex flex-col sm:flex-row max-w-6xl items-center justify-between gap-5">
                    <p className="text-left text-sm text-neutral-300 dark:text-muted-foreground max-sm:text-center">
                        2024 © Desenvolvido por{" "}
                        <Link
                            href={socialLinks.perfis.caio}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4 hover:text-white hover:dark:text-primary focus-visible:outline-none focus-visible:ring-0 focus-visible:text-white transition-colors duration-200"
                        >
                            Caio
                        </Link>
                        ,{" "}
                        <Link
                            href={socialLinks.perfis.caio}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4 hover:text-white hover:dark:text-primary focus-visible:outline-none focus-visible:ring-0 focus-visible:text-white transition-colors duration-200"
                        >
                            Sara
                        </Link>
                        ,{" "}
                        <Link
                            href={socialLinks.perfis.sergio}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4 hover:text-white hover:dark:text-primary focus-visible:outline-none focus-visible:ring-0 focus-visible:text-white transition-colors duration-200"
                        >
                            Sérgio
                        </Link>
                        , e{" "}
                        <Link
                            href={socialLinks.perfis.sergio}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4 hover:text-white hover:dark:text-primary focus-visible:outline-none focus-visible:ring-0 focus-visible:text-white transition-colors duration-200"
                        >
                            Pedro
                        </Link>
                        .
                    </p>

                    <div className="flex items-center gap-2">
                        <Link
                            href={socialLinks.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center size-8 font-medium underline rounded-md underline-offset-4 hover:bg-white/15 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:text-white transition-colors duration-200"
                        >
                            <Icons.gitHub className="size-5" />
                        </Link>

                        <ModeToggle className="hover:bg-white/15 size-8 [&_svg]:size-5 text-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:text-white" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Footer };