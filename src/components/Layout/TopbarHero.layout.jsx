import { FaWhatsapp, FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa"
import useScrollBelowThreshold from "../../hooks/scrollYOffset.hook"
import { Link } from "react-router-dom"

export const TopbarHero = () => {

    const isBelow50px = useScrollBelowThreshold(50)
    
    return (
        <div className={"z-20 w-full fixed" + (!isBelow50px ? ' mt-[20px]' : ' mt-0')}>
            <div className={"w-full h-[40px] inline-flex gap-2 justify-end items-center px-5 sm:px-14 text-[white] transition-all duration-200" + (isBelow50px ? ' bg-lLightGreen' : ' transparant')}>
                <p className={"md:flex hidden h-[25px] items-center px-2 text-[12px] mr-1" + (isBelow50px ? ' hover:bg-[#4e7d3b] rounded' : ' hover:text-lLightGreen')}>+569 5442 6329 | puertomontt@nueva-acropolis.cl</p>
                <a className={"w-[25px] h-[25px] flex text-[white] items-center justify-center" + (isBelow50px ? ' hover:bg-[#4e7d3b] hover:text-[white] rounded' : ' hover:text-lLightGreen')} rel="noreferrer" target="_blank" href="https://web.whatsapp.com/send?phone=56954426329"><FaWhatsapp /></a>
                <a className={"w-[25px] h-[25px] flex text-[white] items-center justify-center" + (isBelow50px ? ' hover:bg-[#4e7d3b] hover:text-[white] rounded' : ' hover:text-lLightGreen')} rel="noreferrer" target="_blank" href="https://www.facebook.com/acropolispuertomontt"><FaFacebookSquare /></a>
                <a className={"w-[25px] h-[25px] flex text-[white] items-center justify-center" + (isBelow50px ? ' hover:bg-[#4e7d3b] hover:text-[white] rounded' : ' hover:text-lLightGreen')} rel="noreferrer" target="_blank" href="https://www.instagram.com/acropolisptomontt/"><FaInstagram /></a>
                <a className={"w-[25px] h-[25px] flex text-[white] items-center justify-center" + (isBelow50px ? ' hover:bg-[#4e7d3b] hover:text-[white] rounded' : ' hover:text-lLightGreen')} rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCcgEJVynWQG1mxsU4cbDKpg"><FaYoutube /></a>
            </div>
            <div className={"px-5 sm:px-14 w-full h-[90px] md:h-[60px] items-center inline-flex justify-end  transition-all duration-200" + (isBelow50px ? ' bg-[white] text-lText shadow-[#ddd] shadow-bottom' : ' transparant text-[white]')}>
                <ul className="flex flex-col md:flex-row text-right text-left gap-x-6 text-[14px]">
                    <Link to={"/home"} className={(isBelow50px ? 'font-semibold border-b-2 text-lText hover:text-lText border-lLightGreen pb-1 px-2' : 'font-semibold text-[white] hover:text-[white] border-b border-lLightGreen pb-1 px-2') + (' cursor-pointer px-2 hover:border-b hover:border-lText py-1')}>10º VERSIÓN</Link>
                    <Link to={"/history"} className={(isBelow50px ? 'text-lText hover:text-lText pb-1 px-2' : 'text-[white] hover:text-[white] pb-1 px-2') + (' cursor-pointer px-2 hover:decoration-none hover:border-b hover:border-lText py-1')}>AÑOS ANTERIORES</Link>
                </ul>
            </div>
            <div className={"cursor-pointer absolute w-[120px] sm:w-[150px] rounded-[75px] overflow-hidden transition-all duration-500 border" + (isBelow50px ? ' top-[3px] left-[20px] sm:left-[50px] sm:left-[100px] border-lGreen' : ' top-[10px] left-[20px] sm:left-[50px] border-[white]')}>
                <img src={isBelow50px ? "./logo-puerto-montt.png" : "./logo-puerto-montt_gray.svg"} alt="" />
            </div>
            <div></div>
        </div>
    )
}

export default TopbarHero
