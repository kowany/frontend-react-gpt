import { useState } from "react"
import { GptMessages, MyMessage, TextMessageBox, TypingLoader } from "../../components"

interface Message {
  text: string;
  isGpt: boolean;
}
export const AssistantPage = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])

  const handlePost = async(text: string) => {
    setIsLoading(true)
    setMessages((prev) => [...prev, {text: text, isGpt: false}])

    //TODO: UseCase

    setIsLoading(false)

    //TODO: Añadir el mensaje de isGpt a true
  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          

          {/* Bienvenida */}
          <GptMessages text="Hola, soy tu asistente legal. Puedes realizar las preguntas que desees del Código del trabajo"/>
          {
            messages.map((message, index) =>(
              message.isGpt
                ? (
                  <GptMessages key={index} text="Esto es de OpenAI"/>
                )
                : (
                  <MyMessage key={index} text={message.text} />
                )
            ))
          }
        
          {/* <MyMessage text="Hola Mundo"/> */}
        
          {
            isLoading && (
              <div className="col-start-1 col-end-12 fade-in">
                <TypingLoader/>
              </div>
            )
          }

        </div>
      </div>
      <TextMessageBox
        onSendMessage={ handlePost}
        placeholder="Escribe aquí lo que desees"
        disableCorrections
      />
    </div>
  )
}

// ASSISTANT_ID
// asst_TRDMGgFsFDzADB4WG4MAP9N6