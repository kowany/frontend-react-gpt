import { createBrowserRouter, Navigate } from "react-router-dom";
import { ChatPage } from "../pages/chat/ChatPage"
import { AssistantPage } from "../pages/assistant/AssistantPage";
// import { AudioToTextPage } from "../pages/audio-to-text/AudioToTextPage";
// import { ImageTunningPage } from "../pages/image-generation/ImageTunningPage";
// import { ImageGenerationPage } from "../pages/image-generation/ImageGenerationPage";
// import { TextToAudioPage } from "../pages/text-to-audio/TextToAudioPage";
// import { TranslatePage } from "../pages/traslate/TranslatePage";
// import { ProsConsStreamPage } from "../pages/pros-cons-stream/ProsConsStreamPage";
// import { ProsConsPage } from "../pages/pros-cons/ProsConsPage";
// import { OrthographyPage } from "../pages/orthography/OrthographyPage";
import { DashboardLayout } from "../layouts/DashboardLayout";

export const menuRoutes = [
    {
      to: "/chat",
      icon: "fa-brands fa-rocketchat",
      title: "Chat",
      description: "Espacio para el progreso y la excelencia",
      component: <ChatPage />
    },
    // {
    //   to: "/pros-cons",
    //   icon: "fa-solid fa-code-compare",
    //   title: "Pros & Cons",
    //   description: "Comparar pros y contras",
    //   component: <ProsConsPage />
    // },
    // {
    //   to: "/pros-cons-stream",
    //   icon: "fa-solid fa-water",
    //   title: "Como stream",
    //   description: "Con stream de mensajes",
    //   component: <ProsConsStreamPage />
    // },
    // {
    //   to: "/translate",
    //   icon: "fa-solid fa-language",
    //   title: "Traducir",
    //   description: "Textos a otros idiomas",
    //   component: <TranslatePage />
    // },
    // {
    //   to: "/text-to-audio",
    //   icon: "fa-solid fa-podcast",
    //   title: "Texto a audio",
    //   description: "Convertir texto a audio",
    //   component: <TextToAudioPage />
    // },
    // {
    //   to: "/image-generation",
    //   icon: "fa-solid fa-image",
    //   title: "Imágenes",
    //   description: "Generar imágenes",
    //   component: <ImageGenerationPage />
    // },
    // {
    //   to: "/image-tunning",
    //   icon: "fa-solid fa-wand-magic",
    //   title: "Editar imagen",
    //   description: "Generación continua",
    //   component: <ImageTunningPage />
    // },
    // {
    //   to: "/audio-to-text",
    //   icon: "fa-solid fa-comment-dots",
    //   title: "Audio a texto",
    //   description: "Convertir audio a texto",
    //   component: <AudioToTextPage />
    // },
    {
      to: "/assistant",
      icon: "fa-solid fa-user",
      title: "Código del trabajo",
      description: "Asistente",
      component: <AssistantPage />
    },
  ];

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout/>,
        children: [
          ...menuRoutes.map(route => ({
            path: route.to,
            element: route.component
          })),
          {
            path: '',
            element: <Navigate to={ menuRoutes[0].to }/>
          }
        ]
    }
])