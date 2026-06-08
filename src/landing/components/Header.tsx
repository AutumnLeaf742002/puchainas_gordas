// icons imports
import { FaShield } from "react-icons/fa6";

// env imports
const discord_url = import.meta.env.VITE_DISCORD_URL

export const Header = () => {

    return (
        <header className="w-full h-16 px-6 bg-(--primary-color) flex items-center justify-between">

            <div className="flex items-center gap-2">
                <span>
                    <FaShield className="secondary-color" />
                </span>
                <h1 className="secondary-color font-bold text-xl font-title">
                    PUCHAINAS GORDAS
                </h1>
            </div>

            <a href={discord_url} target="_blank" className="bg-(--secondary-color) px-6 py-1 cursor-pointer border-b-2 border-b-red-500 text-(--neutral-color) font-title">
                UNIRSE
            </a>

        </header>
    )
}