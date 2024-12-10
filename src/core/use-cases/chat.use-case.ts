import { ChatResponse } from "../../interfaces";


export const ChatUseCase = async(prompt: string) => {

    try {
        const resp = await fetch(`${import.meta.env.VITE_GPT_API}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({prompt})
        });

        if (!resp.ok) throw new Error('No se pudo realizar la conexión');

        const data = await resp.json() as ChatResponse;

        return {
            ok: true,
            ...data
        }
    } catch (error) {
        return {
            ok: false,
            respuesta: 'Hubo un problema de conexión' + error
        }
    }
}