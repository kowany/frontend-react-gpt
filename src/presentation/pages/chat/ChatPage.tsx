import { useState } from "react"
import { GptMessages } from "../../components/chat-bubbles/GptMessages";
import { MyMessage } from "../../components/chat-bubbles/MyMessage";
import { TypingLoader } from "../../components/loaders/TypingLoader";
import { GptChatMessages, TextMessageBox } from "../../components";
import { ChatUseCase } from "../../../core/use-cases";

interface Message {
  text: string;
  isGpt: boolean;
  // info?: {
  //   message: string;
  // }
}
export const ChatPage = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])

  const handlePost = async(text: string) => {
    setIsLoading(true)
    setMessages((prev) => [...prev, {text: text, isGpt: false}])
    
    const {ok, respuesta} = await ChatUseCase(text)
    if (!ok) {
      setMessages((prev) => [...prev, {text: 'No se pudo obtener resultado', isGpt: true}])
    } else {
      setMessages((prev) => [...prev, {text: respuesta, isGpt: true}])
    }
    console.log(respuesta)
    
    //TODO: Añadir el mensaje de isGpt a true
    setIsLoading(false)
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
                  <GptChatMessages
                    key={index}
                    respuesta={message.text}
                  />
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