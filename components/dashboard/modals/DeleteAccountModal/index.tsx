import { useCallback, useMemo, useState } from "react";
import UserAvatar from "../../UserAvatar";
import useCurrentUser from "@/hooks/useCurrentUser";
import { logout } from "@/actions/logout";
import { Modal } from "@/components/ui/modal";
import { DeleteAccountModalProps } from "@/types/components";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DeleteAccountModal = ({
    showDeleteAccountModal,
    setShowDeleteAccountModal,
}: DeleteAccountModalProps) => {
    const session = useCurrentUser();
    const [deleting, setDeleting] = useState<boolean>(false);

    const deleteAccount = async () => {
        setDeleting(true);

        try {
            const response = await fetch("/api/auth/delete-account", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                setDeleting(false);
                const error = await response.text();
                throw new Error(error);
            }

            logout(`${window.location.origin}/`);
        } catch (error) {
            console.error(error);
        }

        setDeleting(false);
    };

    return (
        <Modal
            showModal={showDeleteAccountModal}
            setShowModal={setShowDeleteAccountModal}
            className="gap-0"
        >
            <div className="flex flex-col items-center justify-center space-y-3 border-b p-4 pt-8 sm:px-16">
                <UserAvatar
                    user={{
                        name: session?.name || null,
                        image: session?.image || null,
                    }}
                />
                <h3 className="text-lg font-semibold">Excluir conta</h3>
                <p className="text-center text-sm text-muted-foreground">
                    <b>Atenção: </b> 
                    Isso excluirá permanentemente sua conta e sua
                    assinatura ativa!
                </p>

                {/* TODO: Use getUserSubscriptionPlan(session.user.id) to display the user's subscription if he have a paid plan */}
            </div>

            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    toast.promise(deleteAccount(), {
                        loading: "Deleting account...",
                        success: "Account deleted successfully!",
                        error: (err) => err,
                    });
                }}
                className="flex flex-col space-y-6 bg-accent px-4 py-8 text-left sm:px-16"
            >
                <div>
                    <label htmlFor="verification" className="block text-sm">
                        Para verificar, digite{" "}
                        <span className="font-semibold text-black dark:text-white">
                            confirmar excluir conta
                        </span>{" "}
                        abaixo
                    </label>
                    <Input
                        type="text"
                        name="verification"
                        id="verification"
                        pattern="confirm delete account"
                        required
                        autoFocus={false}
                        autoComplete="off"
                        className="mt-1 w-full border bg-background"
                    />
                </div>

                <Button
                    variant={deleting ? "disable" : "destructive"}
                    disabled={deleting}
                >
                    Confirme a exclusão da conta
                </Button>
            </form>
        </Modal>
    );
};

const useDeleteAccountModal = () => {
    const [showDeleteAccountModal, setShowDeleteAccountModal] = useState<boolean>(false);

    const DeleteAccountModalCallback = useCallback(() => {
        return (
            <DeleteAccountModal
                showDeleteAccountModal={showDeleteAccountModal}
                setShowDeleteAccountModal={setShowDeleteAccountModal}
            />
        );
    }, [showDeleteAccountModal, setShowDeleteAccountModal]);

    return useMemo(() => ({ 
        setShowDeleteAccountModal, 
        DeleteAccountModal: DeleteAccountModalCallback 
    }), [
        setShowDeleteAccountModal,
        DeleteAccountModalCallback,
    ]);
};

export { DeleteAccountModal, useDeleteAccountModal };