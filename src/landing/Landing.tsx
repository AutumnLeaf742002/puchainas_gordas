import { FaShield, FaDiscord } from "react-icons/fa6";

import logo from "../assets/logo.png"

export const Landing = () => {

    return (
        <main className="w-screen h-screen overflow-x-hidden bg-black">
            <header className="w-full h-16 px-6 bg-(--primary-color) flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <span>
                        <FaShield className="secondary-color" />
                    </span>
                    <h1 className="secondary-color font-bold text-xl font-title">
                        PUCHAINAS GORDAS
                    </h1>
                </div>

                <a href="https://discord.gg/a7FBcPHV" target="_blank" className="bg-(--secondary-color) px-6 py-1 cursor-pointer border-b-2 border-b-red-500 text-(--neutral-color) font-title">
                    UNIRSE
                </a>

            </header>

            <section className="w-full bg-[url('src/assets/background.png')] bg-blend-overlay bg-black/75 flex flex-col items-center gap-4 pt-16 bg-cover bg-center pb-10">

                <span className="border border-(--secondary-color) rounded-lg bg-black w-50 p-3">
                    <img src={logo} alt="logo" className="w-full" />
                </span>

                <h2 className="text-white font-title text-3xl font-semibold">Puchainas Gordas</h2>

                <p className="font-semibold text-lg font-title text-(--secondary-color) flex-wrap text-center">
                    SANGRE Y MENSTRUACION EN ALBION ONLINE
                </p>

                <a href="https://discord.gg/a7FBcPHV" target="_blank" className="flex flex-col items-center bg-(--secondary-color) px-10 py-2 font-semibold tex-lg text-(--neutral-color) cursor-pointer border-b-4 border-b-red-500">
                    <FaDiscord size={26} />
                    ¡UNETE AL DISCORD!
                </a>

            </section>

            <section>

            </section>


        </main>
    )
}
