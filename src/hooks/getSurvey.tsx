import { useEffect, useState } from "react"

interface QueryData {
    data: any;
    loading: boolean;
    error: string | null;
}

interface ErrorResponse {
    message: string;
    statusCode: number;

}

export const getSurvey = (endpointUrl: string): QueryData => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const apiCall = async () => {
        let list = [];

        try {

            const response = await fetch(`${endpointUrl}surveys`)
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

        apiCall()

    }, [endpointUrl])

    return { data, error, loading }
}