'use client';

import Icons from "@/components/common/Icons";
import { Button } from "@/components/ui/button";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { DashboardSidebarProps } from "@/types/components";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const SearchCommand = ({ links }: DashboardSidebarProps) => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);

        return () => {
            document.removeEventListener("keydown", down);
        };
    }, []);

    const runCommand = useCallback((command: () => unknown) => {
        setOpen(false);
        command();
    }, []);

    return (
        <>
            <Button
                variant="outline"
                className={cn(
                    "relative h-9 w-full justify-start rounded-md bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-72",
                )}
                onClick={() => setOpen(true)}
            >
                <span className="inline-flex">
                    Procure a
                    <span className="hidden sm:inline-flex">&nbsp;documentação</span>...
                </span>
                <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.45rem] hidden h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <img className="w-4 h-4" src="/imgs/icon-lupa.png" alt="" />
                </kbd>
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Escolha um comando ou procure..." />
                <CommandList>
                    <CommandEmpty>Sem resultados</CommandEmpty>
                    {links.map((section) => (
                        <CommandGroup key={section.title} heading={section.title}>
                            {section.items.map((item) => {
                                const Icon = Icons[item.icon || "arrowRight"];
                                return (
                                    <CommandItem
                                        key={item.title}
                                        onSelect={() => {
                                            runCommand(() => router.push(item.href as string));
                                        }}
                                    >
                                        <Icon className="mr-2 size-5" />
                                        {item.title}
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                    ))}
                </CommandList>
            </CommandDialog>
        </>
    );
};

export default SearchCommand;