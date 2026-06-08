// icons imports
import { FaDiscord } from "react-icons/fa6"

// images imports
import background from "../../assets/background.png"
import logo from "../../assets/logo.png"

// env imports
const discord_url = import.meta.env.VITE_DISCORD_URL

export const Presentation = () => {
    return (
        <section style={{ backgroundImage: `url(${background})` }} className="w-full bg-blend-overlay bg-black/75 flex flex-col items-center gap-4 pt-16 bg-cover bg-center pb-10">

            <span className="border border-(--secondary-color) rounded-lg bg-black w-50 p-3">
                <img src={logo} alt="logo" className="w-full" />
            </span>

            <h2 className="text-white font-title text-3xl font-semibold">Puchainas Gordas</h2>

            <p className="font-semibold text-lg font-title text-(--secondary-color) flex-wrap text-center">
                SANGRE Y MENSTRUACION EN ALBION ONLINE
            </p>

            <a href={discord_url} target="_blank" className="flex flex-col items-center bg-(--secondary-color) px-10 py-2 font-semibold tex-lg text-(--neutral-color) cursor-pointer border-b-4 border-b-red-500">
                <FaDiscord size={26} />
                ¡UNETE AL DISCORD!
            </a>

        </section>
    )
}