import { useEffect, useState } from "react";
import CheckIcon from "../assets/svg/CheckIcon"
import { getSurvey } from "../hooks/getSurvey"
import { ModalAlert } from "./ModalAlert";

const $API_KEY: string = import.meta.env.VITE_API_KEY;

interface SurveyProps {
    theme: string;
    orderId: string | null;
    setIsOrderSumbit: React.Dispatch<React.SetStateAction<boolean>>;
    setLoader:React.Dispatch<React.SetStateAction<boolean>>;
    setLoaderMsj: React.Dispatch<React.SetStateAction<string>>;
}

interface Question {
    id: number;
    statement: string;
    answers: string[];
    required: boolean;
}

interface sendSurvey {
    responses: Array<Answers>
}

type Answers = {
    questionId: number;
    answer: string;
}

const Survey: React.FC<SurveyProps> = ({theme, orderId, setIsOrderSumbit, setLoader, setLoaderMsj}) => {

    const { data, error, loading } = getSurvey($API_KEY)

    const [questions, setQuestions] = useState<Question[]>([])
    const [ans, setAns] = useState<Answers[]>([]);
    const [message, setMessage] = useState<string>('')

    const showModalError = (msg: string) => {
        const modal = document.getElementById('modalInvalidData') as HTMLDialogElement | null
        setMessage(msg)

        if (modal) {
            modal.showModal()

        }
    }


    const handleChange = (id: number, value: string) => {
        setAns((prev) => {
            const existingAns = prev.find((ans) => ans.questionId === id)

            if (existingAns) {
                return prev.map((answ) => answ.questionId === id ? { ...answ, answer: value} : answ)
            } else {
                return [...prev, {questionId: id, answer: value}]
            }
        })
    }

    const sendSurvey = async (e: React.SyntheticEvent) => {
        e.preventDefault()

        console.log(orderId, ans);

        setLoader(true)
        setLoaderMsj('Enviando encuesta')

        try {

            const response = await fetch(`${$API_KEY}surveys/${orderId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    "responses": ans
                })
            })

            if (!response.ok) {
                console.log(response);

                throw new Error('Hubo un problema con la petición al server.')
            }

            const dataReceived = await response.json()
            setIsOrderSumbit(true)
            localStorage.clear()

        } catch (error) {
            console.error('Error al realizar la solicitud: ', error);
            showModalError(`Error: ${error}`)

        } finally {

            setLoader(false)
        }

    }

    useEffect(() => {
        if (data) {

            setQuestions(data)

        }
    }, [data])

    return (
        <>
            <h1 className="uppercase font-bold text-xl text-primary text-center">Pedido confirmado</h1>
            <p className="text-center text-secondary text-xs mt-3">Su pedido ha sido confirmado con éxito y tiene un tiempo estimado de 20 minutos.</p>
            <div className="flex justify-center my-6">
                <CheckIcon primaryColor={theme === 'carpediem' ? '#df0067' : '#ff5800'} secondaryColor={theme === 'carpediem' ? '#ac004f' : '#c24300'} />
            </div>

            {
                (!error && questions.length > 0) &&
                <>
                    <h2 className="font-bold text-lg text-center text-secondary">Ayúdanos a mejorar</h2>
                    <span className="text-center text-lg text-secondary">Solo te llevará 30 segundos.</span>

                    <form action="" className="flex flex-col my-5" onSubmit={sendSurvey}>

                        {
                            questions.map((question, index) => {
                                return (
                                    <div key={index} >
                                        <label htmlFor="" className="text-secondary font-medium text-sm">
                                            {index + 1}. {question.statement}
                                        </label>
                                        {
                                            (question.answers.length > 0) ?
                                                <div className="flex flex-row mt-2 mb-5">

                                                    {
                                                        question.answers.map((answer, ind) => {
                                                            return (
                                                                <label key={ind} className="flex items-center w-1/2"><input type="radio" name={`question-${index + 1}`} className="radio radio-xs radio-primary mr-2" value={answer} onChange={(e) => handleChange(question.id, e.target.value)} required={question.required} /> <span className="text-secondary text-xs font-light" >{answer}</span></label>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                :
                                                <textarea name="dish-comment" cols={3} maxLength={100} className='w-full rounded-md resize-none text-black text-xs p-2 focus:outline-none' placeholder="Responde brevemente..." onChange={(e) => handleChange(question.id, e.target.value)} required={question.required}></textarea>
                                        }
                                    </div>

                                )
                            })
                        }

                        <div className="flex justify-center mt-5">
                            <button type="submit" className={`btn ${theme === 'carpediem' ? 'rounded-xl bg-primary text-secondary' : 'rounded-full px-6 bg-primary text-secondary'} font-bold`}>Enviar respuestas</button>
                        </div>

                    </form>
                </>
            }

            <ModalAlert message={message} theme={theme} />

        </>
    )
}

export default Survey