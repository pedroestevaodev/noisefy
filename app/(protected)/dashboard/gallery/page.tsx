import { GalleryGrid } from "@/components/dashboard/GalleryGrid";
import { listAllImages, listImagesFromFolder } from "@/lib/cloudinary";
import { cn } from "@/lib/utils";
import { auth } from "@/services/auth";
import { ImageOff } from "lucide-react";

const GalleryPage = async () => {
    const session = await auth();
    const results = await listImagesFromFolder(session?.user.id ?? "");

    return (
        <div className={cn("flex", results.length === 0 && "flex-1")}>
            {results.length === 0 ? (
                <div className="flex-1 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <ImageOff size={128} className="text-gray-300" />
                        <p className="text-center text-gray-400 text-lg font-semibold mt-4">Sem imagens para exibir</p>
                    </div>
                </div>
            ) : (
                <GalleryGrid images={results} />
            )}
        </div>
    );
};

export default GalleryPage;