import { FaWhatsapp, FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa"

export const Topbar = () => {

    const isLocation = (itemPath) => {
        const pathname = window.location.pathname
        return itemPath.includes(pathname)
    }

    return (
        <div className={"z-20 w-full fixed mt-[20px]"}>
            <div className={"w-full h-[40px] inline-flex gap-2 justify-end items-center px-14 text-[white] transition-all duration-200 bg-lLightGreen"}>
                <p className={"md:flex hidden h-[25px] items-center px-2 text-[12px] mr-1 hover:bg-[#4e7d3b] rounded"}>+569 5442 6329 | puertomontt@nueva-acropolis.cl</p>
                <a className={"w-[25px] h-[25px] flex items-center justify-center hover:bg-[#4e7d3b] rounded"} rel="noreferrer" target="_blank" href="https://web.whatsapp.com/send?phone=56954426329"><FaWhatsapp /></a>
                <a className={"w-[25px] h-[25px] flex items-center justify-center hover:bg-[#4e7d3b] rounded"} rel="noreferrer" target="_blank" href="https://www.facebook.com/acropolispuertomontt"><FaFacebookSquare /></a>
                <a className={"w-[25px] h-[25px] flex items-center justify-center hover:bg-[#4e7d3b] rounded"} rel="noreferrer" target="_blank" href="https://www.instagram.com/acropolisptomontt/"><FaInstagram /></a>
                <a className={"w-[25px] h-[25px] flex items-center justify-center hover:bg-[#4e7d3b] rounded"} rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCcgEJVynWQG1mxsU4cbDKpg"><FaYoutube /></a>
            </div>
            <div className={"px-14 w-full h-[90px] sm:h-[60px] items-center inline-flex justify-end  transition-all duration-200 bg-[white] text-lText"}>
                <ul className="block text-right sm:text-left sm:inline-flex gap-10 text-[14px]">
                    <li className={(isLocation(['', '/', '/home']) && 'font-semibold border-b-2 border-lGreen pb-1 px-2 cursor-pointer px-2 hover:border-b hover:border-lText')}>9º VERSIÓN</li>
                    <li className={(isLocation(['/bases']) && 'font-semibold border-b-2 border-lGreen pb-1 px-2 cursor-pointer px-2 hover:border-b hover:border-lText')}>BASES</li>
                    <li className={(isLocation(['/version']) && 'font-semibold border-b-2 border-lGreen pb-1 px-2 cursor-pointer px-2 hover:border-b hover:border-lText')}>AÑOS ANTERIORES</li>
                </ul>
            </div>
            <div className={"cursor-pointer absolute w-[120px] sm:w-[150px] rounded-[75px] overflow-hidden transition-all duration-500 border-2 top-[3px] left-[50px] sm:left-[100px] border-lGreen"}>
                <img src={"./logo-puerto-montt.svg"} alt="" />
            </div>
            <div></div>
        </div>
    )
}

export default Topbar