import { useState } from "react"
import { GptMessages } from "../../components/chat-bubbles/GptMessages";
import { MyMessage } from "../../components/chat-bubbles/MyMessage";
import { TypingLoader } from "../../components/loaders/TypingLoader";
import { TextMessageBox } from "../../components";

interface Message {
  text: string;
  isGpt: boolean;
}
export const ChatPage = () => {

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
          <GptMessages text="¿En qué puedo ayudarte?"/>
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
      {/* <TextMessageBoxFile
        onSendMessage={ handlePost}
        placeholder="Escribe aquí lo que desees"
      /> */}
      {/* <TextMessageBoxSelect
        onSendMessage={console.log}
        options={[{id:"1", text: 'Hola'}, {id: '2', text: 'Mundo'}]}
      /> */}

    </div>
  )
}

// ASSISTANT_ID
// asst_TRDMGgFsFDzADB4WG4MAP9N6