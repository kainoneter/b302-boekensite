import { Logo } from "../../components/logo";
import heroShapes from "../../assets/hero-shapes.svg"

export function LoginPage(){
    return (
        <>
            <div>
                <div className="w-[55%] h-[100vh] bg-cobalt p-20 flex flex-col justify-between">
                    <Logo textColor="text-white"/>
                    <img src={heroShapes} alt="Hero Shapes" className="max-w-[75%]" />
                    <h1 className="font-display text-white text-8xl">Welkom terug, <br/> <i>boekenwurm.</i></h1>
                </div>
                <div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    );
}