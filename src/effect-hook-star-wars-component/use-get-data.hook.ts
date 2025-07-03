import {useEffect, useState} from "react";
import {getDataFromApi} from "./effects-hook-star-wars.component";


export const useGetData = <T>(url: string): T | undefined => {
    const [data, setData] = useState<T>();

    useEffect(() => {
        const controller = new AbortController();
        getDataFromApi<T>(url, controller).then((character) => setData(character));
        return () => controller.abort("useGetData - Aborting fetch!");
    }, [url]);

    return data;
}
