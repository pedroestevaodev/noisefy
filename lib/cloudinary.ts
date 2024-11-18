import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadCloudinary = async (file: File, userId: string) => {
    const buffer = Buffer.from(await file.arrayBuffer());

    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ folder: `${userId}`, resource_type: 'auto' }, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result?.secure_url);
            }
        }).end(buffer);
    });
};

export const deleteCloudinary = async (imageName: string) => {
    await cloudinary.uploader.destroy(`uploads/${imageName}`);
};

export const listImagesFromFolder = async (folderName: string) => {
    try {
        const result = await cloudinary.api.resources({
            type: 'upload',
            prefix: folderName,
            resource_type: 'image',
            max_results: 500,
        });

        return result.resources;
    } catch (error) {
        console.error("Error while listing images from Cloudinary:", error);
        return [];
    }
};

export const listAllImages = async () => {
    try {
        const result = await cloudinary.api.resources({
            type: 'upload',
            resource_type: 'image',
            max_results: 500,
        });

        return result.resources;
    } catch (error) {
        console.error('Erro ao listar imagens:', error);
        throw error;
    }
};