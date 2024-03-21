import { FaWhatsapp, FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa"
import useScrollBelowThreshold from "../../hooks/scrollYOffset.hook"

export const TopbarHero = () => {

    const isBelow50px = useScrollBelowThreshold(50)
    
    const isLocation = (itemPath) => {
        const pathname = window.location.pathname
        return itemPath.includes(pathname)
    }

    return (
        <div className={"z-20 w-full fixed" + (!isBelow50px ? ' mt-[20px]' : ' mt-0')}>
            <div className={"w-full h-[40px] inline-flex gap-2 justify-end items-center px-5 sm:px-14 text-[#333] transition-all duration-200" + (isBelow50px ? ' bg-lLightGreen' : ' transparant')}>
                <p className={"md:flex hidden h-[25px] items-center px-2 text-[12px] mr-1" + (isBelow50px ? ' hover:bg-[#4e7d3b] rounded' : ' hover:text-lLightGreen')}>+569 5442 6329 | puertomontt@nueva-acropolis.cl</p>
                <a className={"w-[25px] h-[25px] flex items-center justify-center" + (isBelow50px ? ' hover:bg-[#4e7d3b] rounded' : ' hover:text-lLightGreen')} rel="noreferrer" target="_blank" href="https://web.whatsapp.com/send?phone=56954426329"><FaWhatsapp /></a>
                <a className={"w-[25px] h-[25px] flex items-center justify-center" + (isBelow50px ? ' hover:bg-[#4e7d3b] rounded' : ' hover:text-lLightGreen')} rel="noreferrer" target="_blank" href="https://www.facebook.com/acropolispuertomontt"><FaFacebookSquare /></a>
                <a className={"w-[25px] h-[25px] flex items-center justify-center" + (isBelow50px ? ' hover:bg-[#4e7d3b] rounded' : ' hover:text-lLightGreen')} rel="noreferrer" target="_blank" href="https://www.instagram.com/acropolisptomontt/"><FaInstagram /></a>
                <a className={"w-[25px] h-[25px] flex items-center justify-center" + (isBelow50px ? ' hover:bg-[#4e7d3b] rounded' : ' hover:text-lLightGreen')} rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCcgEJVynWQG1mxsU4cbDKpg"><FaYoutube /></a>
            </div>
            <div className={"px-5 sm:px-14 w-full h-[90px] sm:h-[60px] items-center inline-flex justify-end  transition-all duration-200" + (isBelow50px ? ' bg-[white] text-lText' : ' transparant text-[#333]')}>
                <ul className="block text-right sm:text-left md:inline-flex gap-6 text-[14px]">
                    <li className={(isLocation(['', '/', '/home']) && (isBelow50px ? 'font-semibold border-b-2 border-lGreen pb-1 px-2' : 'font-semibold border-b border-lLightGreen pb-1 px-2')) + (' cursor-pointer px-2 hover:border-b hover:border-lText py-1')}>9º VERSIÓN</li>
                    <li className={(isLocation(['/bases']) && (isBelow50px ? 'font-semibold border-b-2 border-lGreen pb-1 px-2' : 'font-semibold border-b border-lLightGreen pb-1 px-2')) + (' cursor-pointer px-2 hover:border-b hover:border-lText py-1')}>BASES</li>
                    <li className={(isLocation(['/version']) && (isBelow50px ? 'font-semibold border-b-2 border-lGreen pb-1 px-2' : 'font-semibold border-b border-lLightGreen pb-1 px-2')) + (' cursor-pointer px-2 hover:border-b hover:border-lText py-1')}>AÑOS ANTERIORES</li>
                    <li className={(isLocation(['/postular']) && (isBelow50px ? 'font-semibold border border-lGreen pb-1 px-2' : 'font-semibold border border-lLightGreen pb-1 px-2')) + (' cursor-pointer px-5 border hover:border-lText py-1')}>POSTULAR</li>
                </ul>
            </div>
            <div className={"cursor-pointer absolute w-[120px] sm:w-[150px] rounded-[75px] overflow-hidden transition-all duration-500 border" + (isBelow50px ? ' top-[3px] left-[20px] sm:left-[50px] sm:left-[100px] border-lGreen' : ' top-[10px] left-[20px] sm:left-[50px] border-[#333]')}>
                <img src={isBelow50px ? "./logo-puerto-montt.svg" : "./logo-puerto-montt_gray.svg"} alt="" />
            </div>
            <div></div>
        </div>
    )
}

export default TopbarHero