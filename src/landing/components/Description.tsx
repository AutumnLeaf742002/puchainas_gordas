// icons imports
import { BsGeoAltFill } from "react-icons/bs"
import { RiSwordFill } from "react-icons/ri"

export const Description = () => {
    return (
        <section className="pt-10 pb-10 w-full bg-(--neutral-color) px-10 text-white">

            <span className="flex justify-center items-center gap-2 text-(--secondary-color)">
                <div className="sm:border flex-1 bg-(--secondary-color)"></div>
                <h3 className="font-label text-center font-semibold">
                    Las puchainas mas gordas de zona negra
                </h3>
                <div className="sm:border flex-1 bg-(--secondary-color)"></div>
            </span>

            <h3 className="font-title text-center text-2xl mt-5">
                Nuestro hogar: <strong>Quien-Qy-Vinsys</strong>
            </h3>

            <p className="sm:px-30 mt-5">
                Bien "metido" en las Tierras de avalon, nuestro mapa no es como los demas; es nuestro santuario de sex@. Su proximidad estratégica a las zonas de coito de caminos y su terreno escarpado la convierten en el nido de vaginas perfecto para gremios que viven por y para el PvP y ciertos locos que les gusta el PVE (cosmo)
            </p>

            <div className="mt-7 sm:px-30 flex flex-col gap-4">

                <div className="flex gap-2">
                    <BsGeoAltFill className="text-(--secondary-color)" size={25} />
                    <span>
                        <h4 className="text-xl font-semibold">
                            Dominio Geográfico
                        </h4>
                        <p className="text-sm">
                            No molestes nuestro nido o te comeras un enjambre de puchainas bien sidosas.
                        </p>
                    </span>
                </div>

                <div className="flex gap-2">
                    <RiSwordFill className="text-(--secondary-color)" size={25} />
                    <span>
                        <h4 className="text-xl font-semibold">
                            Estrategias Puchaineras
                        </h4>
                        <p className="text-sm">
                            Contamos con alto conocimiento en peleas y si nos salen las cosas mal corremos como ptas de esquina.
                        </p>
                    </span>
                </div>

            </div>

        </section>
    )
}