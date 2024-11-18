import * as tf from "@tensorflow/tfjs";
import * as nsfwjs from "nsfwjs";

tf.enableProdMode();

let model: nsfwjs.NSFWJS | null = null;

/**
 * Carrega o modelo NSFWJS uma única vez.
 */
async function loadModel() {
    if (!model) {
        try {
            model = await nsfwjs.load(
                "https://nsfw-model-1.s3.us-west-2.amazonaws.com/nsfw-predict-model/",
                // @ts-ignore
                { type: "graph" }
            );
        } catch (error) {
            console.error("Erro ao carregar o modelo:", error);
            throw error;
        }
    }
    return model;
}

/**
 * Classifica uma imagem HTML usando o modelo NSFWJS.
 * @param element Elemento de imagem HTML a ser classificado.
 * @param guesses Número de previsões a serem retornadas.
 * @returns Previsões do modelo.
 */
async function predict(element: HTMLImageElement, guesses: number) {
    if (!model) {
        throw new Error("O modelo ainda não foi carregado. Tente novamente mais tarde.");
    }
    return model.classify(element, guesses);
}

/**
 * Classifica uma imagem a partir de um arquivo.
 * @param file Arquivo de imagem a ser analisado.
 * @param guesses Número de previsões a serem retornadas.
 * @returns Previsões do modelo.
 */
async function predictImg(file: File, guesses = 5) {
    const url = URL.createObjectURL(file);
    try {
        const img = document.createElement("img");
        img.width = 400;
        img.height = 400;
        img.src = url;

        return new Promise<nsfwjs.PredictionType[]>((resolve, reject) => {
            img.onload = async () => {
                try {
                    const results = await predict(img, guesses);
                    URL.revokeObjectURL(url);
                    resolve(results);
                } catch (error) {
                    URL.revokeObjectURL(url);
                    reject(error);
                }
            };
            img.onerror = (error) => {
                URL.revokeObjectURL(url);
                reject(error);
            };
        });
    } catch (error) {
        console.error("Erro ao processar a imagem:", error);
        URL.revokeObjectURL(url);
        throw error;
    }
}

/**
 * Verifica se uma imagem é segura (não NSFW).
 * @param file Arquivo de imagem a ser analisado.
 * @returns `true` se a imagem for segura, `false` caso contrário.
 */
async function isSafeImg(file: File) {
    try {
        const predictions = await predictImg(file, 3);
        const pornPrediction = predictions.find(({ className }) => className === "Porn");
        const hentaiPrediction = predictions.find(({ className }) => className === "Hentai");

        if (!pornPrediction || !hentaiPrediction) {
            return true;
        }
        return !(
            pornPrediction.probability > 0.25 || hentaiPrediction.probability > 0.25
        );
    } catch (error) {
        console.error("Erro ao verificar segurança da imagem:", error);
        throw error;
    }
}

export { loadModel, predictImg, isSafeImg };