import { Icons } from "@/components/common/Icons";
import { useDeleteAccountModal } from "../modals/DeleteAccountModal";
import { SectionColumns } from "../SectionColumns";
import { Button } from "@/components/ui/button";
import { siteMetadata } from "@/config/site";

const DeleteAccountSection = () => {
    const { setShowDeleteAccountModal, DeleteAccountModal } = useDeleteAccountModal();

    const userPaidPlan = true;

    return (
        <>
            <DeleteAccountModal />
            <SectionColumns
                title="Delete Account"
                description="This is a danger zone - Be careful !"
            >
                <div className="flex flex-col gap-4 rounded-xl border border-red-400 p-4 dark:border-red-900">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <span className="text-[15px] font-medium">Você tem certeza ?</span>

                            {userPaidPlan ? (
                                <div className="flex items-center gap-1 rounded-md bg-red-600/10 p-1 pr-2 text-xs font-medium text-red-600 dark:bg-red-500/10 dark:text-red-500">
                                    <div className="m-0.5 rounded-full bg-red-600 p-[3px]">
                                        <Icons.close size={10} className="text-background" />
                                    </div>
                                    Assinatura Ativa
                                </div>
                            ) : null}
                        </div>
                        <div className="text-balance text-sm text-muted-foreground">
                            Exclua permanentemente sua conta {siteMetadata.applicationName}
                            {userPaidPlan ? " e sua assinatura" : ""}. Esta ação não pode ser desfeita - prossiga com cautela.
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            type="submit"
                            variant="destructive"
                            onClick={() => setShowDeleteAccountModal(true)}
                        >
                            <Icons.trash className="mr-2 size-4" />
                            <span>Excluir conta</span>
                        </Button>
                    </div>
                </div>
            </SectionColumns>
        </>
    );
};

export { DeleteAccountSection };