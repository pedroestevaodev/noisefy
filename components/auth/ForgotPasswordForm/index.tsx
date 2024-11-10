'use client';

import { useState, useTransition } from "react";
import * as z from "zod";
import CardWrapper from "@/components/auth/CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordSchema } from "@/schemas";
import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/common/FormError";
import { FormSuccess } from "@/components/common/FormSuccess";
import { forgotPassword } from "@/actions/forgot-password";

const ForgotPasswordForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
        resolver: zodResolver(ForgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = (values: z.infer<typeof ForgotPasswordSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            forgotPassword(values)
                .then((data) => {
                    setError(data?.error);
                    setSuccess(data?.success);
                })
        });
    };

    return (
        <CardWrapper
            headerLabel="Esqueceu sua senha?"
            backButtonLabel="Volte para o login"
            backButtonHref="/login"
        >
            <Form {...form}>
                <form
                    className="space-y-6"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>E-mail</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            type="email"
                                            placeholder="seuemail@example.com"
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex-col justify-center items-end">
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <Button
                            type="submit"
                            className="w-full"
                            size="lg"
                            disabled={isPending}
                        >
                            Enviar e-mail
                        </Button>
                    </div>
                </form>
            </Form>
        </CardWrapper>
    );
};

export default ForgotPasswordForm;