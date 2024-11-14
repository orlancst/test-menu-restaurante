import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


interface QueryData {
    data: any;
    loading: boolean;
    error: string | null;
}

interface DishData {
    findDishData: any;
    findDisherror: string | null;
}

interface ErrorResponse {
    message:string;
    statusCode: number;
    
}

export const validateAccess = (branch: string, room: string, endpointUrl: string): QueryData => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const location = useLocation()

    const getParam = (param: string) => {
        const searchParams = new URLSearchParams(location.search)
        return searchParams.get(param)
    }

    const apiCall = async (branchParam: string, roomParam: string, endpointUrl: string) => {
        let list = [];
        try {
            const response = await fetch(`${endpointUrl}restaurants/menu?branch=${branchParam}&room=${roomParam}`)
            if (!response.ok) throw new Error(`${response.status}: ${response.statusText}`)
            const result = await response.json()
            list = result
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

        if (branchParam && roomParam) {

            apiCall(branchParam, roomParam, endpointUrl)

            // fetch(`${endpointUrl}restaurants/menu?branch=${branchParam}&room=${roomParam}`)
            //     .then((response) => {
            //         if (!response.ok) {
            //             return response.json().then((errorData) => {
            //                 throw new Error(`${response.status}: ${errorData.message}`)
            //             })
            //         }
            //         return response.json()
            //     })
            //     .then((result) => {
            //         setData(result)
            //         setLoading(false);

            //     })
            //     .catch((err) => {
            //         setError(err.message || 'Hubo un problema')
            //         setLoading(false);
            //     })

        } else {
            setError('Query params no encontrados')
            setLoading(false);
        }
    }, [location.search, branch, room, endpointUrl])

    return { data, loading, error }
}

export const findDish = (idDish: number, endpointUrl: string): DishData => {
    const [findDishData, setFindDishData] = useState(null)
    const [findDisherror, setFindDisherror] = useState<string | null>(null)

    useEffect(() => {
        fetch(`${endpointUrl}restaurants/menu/${idDish}`)
            .then((response) => response.json())
            .then((result) => {
                setFindDishData(result);
            })
            .catch((err) => {
                setFindDisherror('Hubo un problema')
            })
    }, [endpointUrl, idDish])

    return { findDishData, findDisherror }

}