"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NewsletterSchema } from "@/schemas";
import { toast } from "sonner";



const NewsletterForm = () => {
    const form = useForm<z.infer<typeof NewsletterSchema>>({
        resolver: zodResolver(NewsletterSchema),
        defaultValues: {
            email: "",
        },
    });

    function onSubmit(data: z.infer<typeof NewsletterSchema>) {
        form.reset();
        toast("success");
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-2 sm:max-w-sm"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel 
                                htmlFor="footer-email-newsletter"
                                className="text-white max-sm:text-center max-sm:mx-auto max-sm:block max-sm:mb-4"
                            >
                                Inscreva-se em nossa Newsletter
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    id="footer-email-newsletter"
                                    className="dark:border-white/40 text-white placeholder:text-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full px-4"
                                    placeholder="janedoe@example.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-danger-400" />
                        </FormItem>
                    )}
                />
                <Button 
                    type="submit"
                    rounded="full" 
                    className="bg-white hover:bg-white/70 text-black font-semibold !mt-4 px-4 max-sm:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                    Subscribe
                </Button>
            </form>
        </Form>
    );
};

export { NewsletterForm };