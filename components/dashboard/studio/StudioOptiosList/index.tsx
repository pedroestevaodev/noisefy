'use client';

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Download, FlipHorizontal, FlipHorizontal2, FlipVertical2, ImageUp, Maximize2, Pencil, Redo2, RotateCcw, RotateCw, Scissors, Undo2, WandSparkles, ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStudio } from "@/contexts/studioCtx";
import { appendNewToName, downloadPhoto } from "@/utils/studio";
import { useApiData } from "@/hooks/useApiData";
import { useEffect } from "react";

const StudioOptionsList = () => {
    const {
        cropper,
        cropping,
        error,
        // history,
        loading,
        originalPhoto,
        photoName,
        restoredImage,
        restoredLoaded,
        sideBySide,
    } = useStudio();
    const { mutate } = useApiData('/api/remaining');

    const generatePhoto = async (fileUrl: string): Promise<void> => {
        if (!fileUrl) {
            error.setMessage("File URL is required.");
            return;
        }

        loading.setLoading(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 500));

            const res = await fetch("/api/images/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ imageUrl: fileUrl }),
            });

            const responseData = await res.json();

            if (!res.ok) {
                throw new Error(responseData.error || "An error occurred while generating the photo.");
            }

            mutate();
            restoredImage.setContent(responseData.restoredImage);
        } catch (err) {
            console.error("Error during photo generation:", err);
            error.setMessage((err as Error).message || "Unexpected error occurred.");
        } finally {
            loading.setLoading(false);
        }
    };

    // const saveToHistory = (newImageUrl: string) => {
    //     if (history.index === 0 && history.book.length === 0) {
    //         history.setBook([newImageUrl]);
    //         return;
    //     }

    //     const newHistory = history.book.slice(0, history.index + 1);
    //     newHistory.push(newImageUrl);
    //     history.setBook(newHistory);
    //     history.setIndex(newHistory.length - 1);
    // };

    // const undoHistory = () => {
    //     if (history.index > 0) {
    //         if (restoredImage.content) {
    //             restoredImage.setContent(history.book[history.index - 1]);
    //         } else {
    //             originalPhoto.setContent(history.book[history.index - 1]);
    //         }
    //         history.setIndex(history.index - 1);
    //     }
    // };

    // const redoHistory = () => {
    //     if (history.index < history.book.length - 1) {
    //         if (restoredImage.content) {
    //             restoredImage.setContent(history.book[history.index + 1]);
    //         } else {
    //             originalPhoto.setContent(history.book[history.index + 1]);
    //         }
    //         history.setIndex(history.index + 1);
    //     }
    // };

    // useEffect(() => {
    //     console.log("History:", history);
    // });

    return (
        <div className="flex flex-col border-t min-h-[150px] -mx-4 xl:-mx-8 -mb-4">
            <div className="flex items-center justify-between gap-5 px-4 max-sm:px-[10px] pt-4 pb-[10px]">
                <ScrollArea className="grid whitespace-nowrap w-full">
                    <div className="flex flex-row items-center justify-start gap-[2px] w-max">
                        {!cropping.isCropping && (
                            <>
                                <Button
                                    type="button"
                                    className={cn(
                                        "flex items-center gap-2 bg-transparent border-none shadow-none h-auto rounded-md px-[11px] py-[7px] text-sm text-inherit font-normal hover:bg-muted",
                                    )}
                                    {...(originalPhoto.content && !loading.isLoading && {
                                        onClick: () => cropping.setCropping(true)
                                    })}
                                    disabled={!originalPhoto.content || loading.isLoading}
                                >
                                    <Pencil className="text-muted-foreground" size={16} />
                                    <span>Editar</span>
                                </Button>
                                <Button
                                    type="button"
                                    className={cn(
                                        "flex items-center gap-2 bg-transparent border-none shadow-none h-auto rounded-md px-[11px] py-[7px] text-sm text-inherit font-normal hover:bg-muted",
                                    )}
                                    {...(originalPhoto.content && !loading.isLoading && restoredImage.content && {
                                        onClick: () => sideBySide.setSideBySide(!sideBySide.isSideBySide)
                                    })}
                                    disabled={!originalPhoto.content || loading.isLoading || !restoredImage.content}
                                >
                                    <FlipHorizontal className="text-muted-foreground" size={16} />
                                    <span>Compare</span>
                                </Button>
                            </>
                        )}
                        {cropping.isCropping && (
                            <>
                                <Button
                                    type="button"
                                    className={cn(
                                        "flex items-center gap-2 bg-transparent border-none shadow-none h-auto rounded-md px-[11px] py-[7px] text-sm text-inherit font-normal hover:bg-muted",
                                    )}
                                    onClick={() => {
                                        if (cropper) {
                                            // const previusImage = cropper.instance?.getCroppedCanvas().toDataURL();
                                            // if (previusImage) saveToHistory(previusImage);

                                            cropper.instance?.crop();

                                            const croppedImage = cropper.instance?.getCroppedCanvas().toDataURL();
                                            if (croppedImage) {
                                                if (restoredImage.content) {
                                                    restoredImage.setContent(croppedImage);
                                                } else {
                                                    originalPhoto.setContent(croppedImage);
                                                }
                                            }
                                        }
                                    }}
                                >
                                    <Scissors className="text-muted-foreground" size={16} />
                                </Button>
                                <Button
                                    type="button"
                                    className={cn(
                                        "flex items-center gap-2 bg-transparent border-none shadow-none h-auto rounded-md px-[11px] py-[7px] text-sm text-inherit font-normal hover:bg-muted",
                                    )}
                                    onClick={() => {
                                        if (cropper) {
                                            // const previusImage = cropper.instance?.getCroppedCanvas().toDataURL();
                                            // if (previusImage) saveToHistory(previusImage);

                                            cropper.instance?.rotate(-45);
                                        }
                                    }}
                                >
                                    <RotateCcw className="text-muted-foreground" size={16} />
                                </Button>
                                <Button
                                    type="button"
                                    className={cn(
                                        "flex items-center gap-2 bg-transparent border-none shadow-none h-auto rounded-md px-[11px] py-[7px] text-sm text-inherit font-normal hover:bg-muted",
                                    )}
                                    onClick={() => {
                                        if (cropper) {
                                            // const previusImage = cropper.instance?.getCroppedCanvas().toDataURL();
                                            // if (previusImage) saveToHistory(previusImage);

                                            cropper.instance?.rotate(45);
                                        }
                                    }}
                                >
                                    <RotateCw className="text-muted-foreground" size={16} />
                                </Button>
                                <Button
                                    type="button"
                                    className={cn(
                                        "flex items-center gap-2 bg-transparent border-none shadow-none h-auto rounded-md px-[11px] py-[7px] text-sm text-inherit font-normal hover:bg-muted",
                                    )}
                                    onClick={() => {
                                        if (cropper) {
                                            // const previusImage = cropper.instance?.getCroppedCanvas().toDataURL();
                                            // if (previusImage) saveToHistory(previusImage);

                                            cropper.instance?.scaleX(-1);
                                        }
                                    }}
                                >
                                    <FlipHorizontal2 className="text-muted-foreground" size={16} />
                                </Button>
                                <Button
                                    type="button"
                                    className={cn(
                                        "flex items-center gap-2 bg-transparent border-none shadow-none h-auto rounded-md px-[11px] py-[7px] text-sm text-inherit font-normal hover:bg-muted",
                                    )}
                                    onClick={() => {
                                        if (cropper) {
                                            // const previusImage = cropper.instance?.getCroppedCanvas().toDataURL();
                                            // if (previusImage) saveToHistory(previusImage);

                                            cropper.instance?.scaleY(-1);
                                        }
                                    }}
                                >
                                    <FlipVertical2 className="text-muted-foreground" size={16} />
                                </Button>
                                <Button
                                    type="button"
                                    className={cn(
                                        "flex items-center gap-2 bg-transparent border-none shadow-none h-auto rounded-md px-[11px] py-[7px] text-sm text-inherit font-normal hover:bg-muted",
                                    )}
                                    onClick={() => {
                                        if (cropper) {
                                            // const previusImage = cropper.instance?.getCroppedCanvas().toDataURL();
                                            // if (previusImage) saveToHistory(previusImage);

                                            cropper.instance?.zoom(0.1);
                                        }
                                    }}
                                >
                                    <ZoomIn className="text-muted-foreground" size={16} />
                                </Button>
                                <Button
                                    type="button"
                                    className={cn(
                                        "flex items-center gap-2 bg-transparent border-none shadow-none h-auto rounded-md px-[11px] py-[7px] text-sm text-inherit font-normal hover:bg-muted",
                                    )}
                                    onClick={() => {
                                        if (cropper) {
                                            // const previusImage = cropper.instance?.getCroppedCanvas().toDataURL();
                                            // if (previusImage) saveToHistory(previusImage);

                                            cropper.instance?.zoom(-0.1);
                                        }
                                    }}
                                >
                                    <ZoomOut className="text-muted-foreground" size={16} />
                                </Button>
                                {/* <div className="grid border-r h-[30px] mx-2" />
                                <Button
                                    type="button"
                                    className={cn(
                                        "flex items-center gap-2 bg-transparent border-none shadow-none h-auto rounded-md px-[11px] py-[7px] text-sm text-inherit font-normal hover:bg-muted",
                                    )}
                                    onClick={undoHistory}
                                    disabled={history.index <= 0}
                                >
                                    <Undo2 className="text-muted-foreground" size={16} />
                                </Button>
                                <Button
                                    type="button"
                                    className={cn(
                                        "flex items-center gap-2 bg-transparent border-none shadow-none h-auto rounded-md px-[11px] py-[7px] text-sm text-inherit font-normal hover:bg-muted",
                                    )}
                                    onClick={redoHistory}
                                    disabled={history.index >= history.book.length - 1}
                                >
                                    <Redo2 className="text-muted-foreground" size={16} />
                                </Button> */}
                                <div className="grid border-r h-[30px] mx-2" />
                                <Button
                                    type="button"
                                    className={cn(
                                        "flex items-center gap-2 bg-transparent border-none shadow-none h-auto rounded-md px-[11px] py-[7px] text-sm text-inherit font-normal hover:bg-muted",
                                    )}
                                    onClick={() => {
                                        if (cropper) {
                                            const croppedImage = cropper.instance?.getCroppedCanvas().toDataURL();
                                            if (croppedImage) {
                                                if (restoredImage.content) {
                                                    originalPhoto.setContent(croppedImage);
                                                    restoredImage.setContent(null);
                                                } else {
                                                    originalPhoto.setContent(croppedImage);
                                                }
                                            }
                                            cropping.setCropping(false);
                                        }
                                    }}
                                >
                                    Salvar
                                </Button>
                                <Button
                                    type="button"
                                    className={cn(
                                        "flex items-center gap-2 bg-transparent border-none shadow-none h-auto rounded-md px-[11px] py-[7px] text-sm text-inherit font-normal hover:bg-muted",
                                    )}
                                    onClick={() => cropping.setCropping(false)}
                                >
                                    Cancelar
                                </Button>
                            </>
                        )}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>

                <div className="flex items-center gap-4">
                    <Button
                        type="button"
                        className="bg-blue-50 text-blue-500 border-none hover:bg-blue-100 hover:text-blue-500 hover:shadow-none transition-colors duration-200"
                        onClick={() => {
                            originalPhoto.setContent(null);
                            restoredImage.setContent(null);
                            restoredLoaded.setLoaded(false);
                            error.setMessage(null);
                        }}
                        disabled={!originalPhoto.content || loading.isLoading || cropping.isCropping}
                    >
                        <ImageUp size={16} />
                        <span>Novo Envio</span>
                    </Button>
                    <Button
                        type="button"
                        className="bg-blue-50 text-blue-500 border-none hover:bg-blue-100 hover:text-blue-500 hover:shadow-none transition-colors duration-200"
                        {...(originalPhoto.content && !loading.isLoading && !cropping.isCropping && restoredImage.content && {
                            onClick: () => downloadPhoto(restoredImage.content!, appendNewToName(photoName.name!))
                        })}
                        disabled={!originalPhoto.content || loading.isLoading || cropping.isCropping || !restoredImage.content}
                    >
                        <Download size={16} />
                        <span>Baixar</span>
                    </Button>
                    <div className="grid border-r h-[30px]" />
                    <Button
                        type="button"
                        className="bg-blue-500 text-white border-none hover:bg-blue-100 hover:text-blue-500 hover:shadow-none transition-colors duration-200"
                        {...((!!originalPhoto.content && !loading.isLoading && !cropping.isCropping && !restoredImage.content) && {
                            onClick: () => generatePhoto(originalPhoto.content!)
                        })}
                        disabled={!originalPhoto.content || loading.isLoading || cropping.isCropping || !!restoredImage.content}
                    >
                        <WandSparkles size={16} />
                        <span>Transformar</span>
                    </Button>
                </div>
            </div>

            <ScrollArea className="grid flex-1 whitespace-nowrap w-full px-4 max-sm:px-[10px] pt-[10px] pb-4">
                <div className="flex flex-row items-center justify-start gap-4 h-full">
                    <Button
                        type="button"
                        className="flex items-center justify-start gap-2 h-auto bg-blue-100 shadow-none text-blue-500 rounded-[10px] p-4 border-1 border-blue-500 hover:bg-blue-100 hover:text-blue-500 transition-all duration-200"
                    >
                        <Maximize2 size={16} />
                        <span>Enhance</span>
                    </Button>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
};

export { StudioOptionsList };