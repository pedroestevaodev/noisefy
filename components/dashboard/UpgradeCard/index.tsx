import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const UpgradeCard = ({ ...props }) => {
    return (
        <Card className={`md:max-xl:rounded-none md:max-xl:border-none md:max-xl:shadow-none bg-noisefy-50 ${props.className}`}>
            <CardHeader className="md:max-xl:px-4">
                <CardTitle>Faça upgrade!</CardTitle>
                <CardDescription>
                    Desbloquei todas funções com o plano Pro e garanta acesso ilimitado com nosso time de suporte.
                </CardDescription>
            </CardHeader>
            <CardContent className="md:max-xl:px-4">
                <Button size="sm" className="w-full text-sm">
                    Upgrade
                </Button>
            </CardContent>
        </Card>
    );
};

export { UpgradeCard };