import { Outlet } from "react-router-dom";
import { menuRoutes } from "../router/router";
import { SidebarMenuItems } from "../components/sidebar/SidebarMenuItems";

export const DashboardLayout = () => {
  return (
    <main className="flex flex-row mt-7">
      {/* En el nav al inicio del className hay un hidden, lo quité porque no me aparecía el sidebar */}
      <nav className="sm:flex flex-col ml-5 w-[370px] min-h-[calc(100vh-3.0rem)] bg-white bg-opacity-10 p-5 rounded-3xl">
        <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 bg-clip-text text-transparent">
          LeyesGPT<span className="text-indigo-500">.</span>
        </h1>
        <span className="text-xl text-orange-700">Bienvenido</span>

        <div className="border-gray-700 border my-3" />

        {/* Opciones del menú */}
        
        {
          menuRoutes.map(option => (
            <SidebarMenuItems key={option.to} {...option}/>
          ))
        }

      </nav>

      <section className="mx-3 sm:mx-20 flex flex-col w-full h-[calc(100vh-50px)]  bg-white bg-opacity-10 p-5 rounded-3xl">
        <div className="flex flex-row h-full">
          <div className="flex flex-col flex-auto h-full p-1">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};