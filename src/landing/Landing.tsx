// components imports
import { Header } from './components';
import { Presentation } from './components/Presentation';
import { Description } from './components/Description';

export const Landing = () => {

    return (
        <main className="w-screen h-screen overflow-x-hidden bg-black">

            <Header />

            <Presentation />

            <Description />


        </main>
    )
}
