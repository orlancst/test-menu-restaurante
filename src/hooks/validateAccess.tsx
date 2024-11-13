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

export const validateAccess = (branch: string, room: string, endpointUrl: string): QueryData => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const location = useLocation()

    const getParam = (param: string) => {
        const searchParams = new URLSearchParams(location.search)
        return searchParams.get(param)
    }

    useEffect(() => {
        const branchParam = getParam(branch)
        const roomParam = getParam(room)

        if (branchParam && roomParam) {

            fetch(`${endpointUrl}restaurants/menu?branch=${branchParam}&room=${roomParam}`)
                .then((response) => response.json())
                .then((result) => {
                    setData(result)
                    setLoading(false);

                })
                .catch((err) => {
                    setError('Hubo un problema')
                    setLoading(false);
                })

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