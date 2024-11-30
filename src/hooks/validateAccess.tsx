import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface QueryData {
    data: any;
    loading: boolean;
    error: string | null;
}

interface ErrorResponse {
    message:string;
    statusCode: number;
    
}

export const validateAccess = (branch: string, room: string, theme: string, endpointUrl: string): QueryData => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const location = useLocation()

    const getParam = (param: string) => {
        const searchParams = new URLSearchParams(location.search)
        return searchParams.get(param)
    }

    const apiCall = async (branchParam: string, roomParam: string, themeParam: string, endpointUrl: string) => {
        let list = [];
        try {
            const response = await fetch(`${endpointUrl}restaurants/menu?branch=${branchParam}&room=${roomParam}&theme=${themeParam}`)
            if (!response.ok) throw new Error(`${response.status}: ${response.statusText}`)
            const result = await response.json()
            list = result

            const resp2 = await fetch(import.meta.env.VITE_FAKE_API)
            const resul2 = await resp2.json()
            console.log(resul2);
            
            
        } catch (err) {
            const error = err as ErrorResponse;
            setError(error.message || 'Hubo un problema')
        } finally {
            setLoading(false);
            setData(list)
        }
    }

    useEffect(() => {
        const branchParam = getParam(branch)
        const roomParam = getParam(room)
        const themeParam = getParam(theme)

        if (branchParam && roomParam && themeParam) {

            apiCall(branchParam, roomParam, themeParam, endpointUrl)


        } else {
            setError('Query params no encontrados')
            setLoading(false);
        }
    }, [location.search, branch, room, theme, endpointUrl])

    return { data, loading, error }
}
