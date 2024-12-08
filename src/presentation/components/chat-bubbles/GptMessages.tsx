import Markdown from 'react-markdown'

import MyImage from '../../../assets/robot-leyes.jpg'
interface Props {
  text: string;
}
export const GptMessages = ({text}:Props) => {
  return (
    <div className="col-start-1 col-end-9 p-3 rounded-lg">
        <div className="flex flex-row items-start">
        <img
          src={MyImage}  // Asegúrate de colocar aquí la ruta a tu imagen
          alt="Robot"
          className="flex items-center justify-center h-10 w-10 rounded-full"
        />
            {/* <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600 flex-shrink-0">
                G
            </div> */}
            <div className="relative ml-3 text-sm bg-black bg-opacity-25 p-3 shadow rounded-xl">
              <Markdown>{text}</Markdown>
            </div>
        </div>
    </div>
  )
}
