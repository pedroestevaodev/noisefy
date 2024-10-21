import { Button } from "@/components/ui/button"
import { sendMail } from "@/lib/mail";

const SendTest = () => {
    const sendMailF = async () => {
        'use server'
        await sendMail({
            to: "pedropaulista11@gmail.com",
            name: "Pedro",
            subject: "Test",
            body: "Test",
        });
    };

    return (
        <form>
            <Button
                // type="button"
                formAction={sendMailF}
            >
                Send mail
            </Button>
        </form>
    );
};

export default SendTest;