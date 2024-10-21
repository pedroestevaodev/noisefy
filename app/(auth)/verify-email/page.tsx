import VerificationForm from "@/components/auth/VerificationForm";
import { Suspense } from "react";

const VerifyEmailPage = () => {
    return (
        <Suspense>
            <VerificationForm />
        </Suspense>
    );
};

export default VerifyEmailPage;