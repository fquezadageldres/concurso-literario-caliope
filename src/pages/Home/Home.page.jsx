import useScrollBelowThreshold from "../../hooks/scrollYOffset.hook"
import { BsArrowDown } from "react-icons/bs";
import { LayoutHero } from "../../components/Layout";

export const Home = () => {

    const isBelow50px = useScrollBelowThreshold(50)

    const onVerMas = () => {
        window.scrollBy({
            top: 600, 
            behavior: 'smooth' 
        })
    }

    return (
        <LayoutHero>
            <div style={{backgroundImage: 'url(./hero.jpg)', backgroundBlendMode: 'overlay', backgroundColor: '#dde8de', }} className="w-full h-screen relative bg-cover flex flex-col items-center justify-center">
                    <h2 className="text-[5em] sm:text-[9em] lg:text-[14em] text-lLightGreen dancing-script-regular"><b>Caliope</b></h2>
                    <h1 className="z-10 mt-[-50px] p-10 lg:mt-[-90px] text-[#333] text-center poppins-light text-[25px] lg:text-[45px]">9º Concurso Regional de Literatura</h1>
                    <div className="text-[12px] sm:text-[14px] lg:text-[16px] mt-[-30px]">
                        <p className="px-2 w-[400px] sm:w-[450px] lg:w-[550px] text-center text-[#333] poppins-light">La <span className="underline text-lLightGreen bad-script-regular text-[14px] sm:text-[16px] lg:text-[18px]"><b>novena edición del concurso de literatura Calíope</b></span> está a punto de comenzar, y queremos que formes parte de esta experiencia única.</p>
                        <p className="px-2 w-[400px] sm:w-[450px] lg:w-[550px] text-center mt-5 text-[#333] poppins-light">Este año, bajo el tema de <span className="underline text-lLightGreen bad-script-regular text-[14px] sm:text-[16px] lg:text-[18px]"><b>"Unidad y Diversidad",</b></span> queremos celebrar la riqueza de perspectivas, experiencias y voces que enriquecen nuestra sociedad.</p>
                    </div>
                {!isBelow50px && <div onClick={() => onVerMas()} className="cursor-pointer absolute flex flex-col items-center justify-center bottom-[20px] text-[#333] text-[30px] animate-bounce">
                    <BsArrowDown />
                    <small className="text-[10px]"><i>Ver mas...</i></small>
                </div>}
            </div>
            <div className="h-[1000px]"></div>
        </LayoutHero>
    )
}

export default Home