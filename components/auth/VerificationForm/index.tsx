'use client';

import { useSearchParams } from "next/navigation";
import { CardWrapper } from "../CardWrapper";
import { BeatLoader } from "react-spinners";
import { useCallback, useEffect, useState } from "react";
import { verification } from "@/actions/mail-verification";
import { FormSuccess } from "@/components/common/FormSuccess";
import { FormError } from "@/components/common/FormError";

const VerificationForm = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const searchParams = useSearchParams();

    const token = searchParams.get("token");

    const onSubmit = useCallback(() => {
        if (success || error) return;

        if (!token) {
            setError("Código ausente!");
            return;
        };

        verification(token).then((data) => {
            setSuccess(data.success);
            setError(data.error);
        }).catch((error) => {
            setError("Algo deu errado!");
        });
    }, [token, success, error]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <CardWrapper
            headerLabel="Confirme seu e-mail"
            backButtonLabel="Volte para o login"
            backButtonHref="/login"
        >
            <div className="flex flex-col items-center justify-center w-full">
                {!success && !error && (
                    <BeatLoader />
                )}
                <FormSuccess message={success} />
                {!success && (
                    <FormError message={error} />
                )}
            </div>
        </CardWrapper>
    );
};

export { VerificationForm };