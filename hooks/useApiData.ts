import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useApiData = (endpoint: string) => {
    const { data, error, mutate } = useSWR(endpoint, fetcher);

    return { 
        data, 
        error,
        isLoading: !data && !error,
        mutate,
    };
};