export const transformationsLibrary = [
    {
        name: "",
        description: "",
        thumbnail: "",
        isExternal: true,
        configurations: {
            id: "dfad41707589d68ecdccd1dfa600d55a208f9310748e44bfe35b4a6291453d5e",
            default: {
                seed: 1337,
                prompt: "masterpiece, best quality, highres, <lora:more_details:0.5> <lora:SDXLrender_v2.0:1>",
                dynamic: 6,
                handfix: "disabled",
                pattern: false,
                sharpen: 0,
                sd_model: "juggernaut_reborn.safetensors [338b85bc4f]",
                scheduler: "DPM++ 3M SDE Karras",
                creativity: 0.35,
                lora_links: "",
                downscaling: false,
                resemblance: 0.6,
                scale_factor: 2,
                tiling_width: 112,
                output_format: "png",
                tiling_height: 144,
                custom_sd_model: "",
                negative_prompt: "(worst quality, low quality, normal quality:2) JuggernautNegative-neg",
                num_inference_steps: 18,
                downscaling_resolution: 768,
            },
            manual: {
                img: "",
            },
        },
    }
];

const forceDownload = (blobUrl: string, filename: string) => {
    const anchor = document.createElement('a');
    anchor.download = filename;
    anchor.href = blobUrl;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(blobUrl);
};

export const downloadPhoto = async (url: string, filename: string) => {
    if (!url || !filename) {
        console.error("URL and filename are required for downloading.");
        return;
    }

    try {
        const response = await fetch(url, {
            headers: new Headers({
                Origin: window.location.origin,
            }),
            mode: "cors",
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch the file: ${response.status} ${response.statusText}`);
        }

        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        forceDownload(blobUrl, filename);
    } catch (error) {
        console.error("Error while downloading the photo:", error);
    }
};

export const appendNewToName = (name: string) => {
    const insertPos = name.lastIndexOf(".");
    if (insertPos === -1) {
        return `${name}-new`;
    }

    const baseName = name.substring(0, insertPos);
    const extension = name.substring(insertPos);
    return `${baseName}-new${extension}`;
};