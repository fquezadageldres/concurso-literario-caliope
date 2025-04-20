import { Layout } from "../../components/Layout"
import Version2023 from "./components/2023.component"
import Version2024 from "./components/2024.component"
import Version2025 from "./components/2025.component"
import { useState } from "react"

export const History = () => {

    const [version, setVersion] = useState("2023")

    return (
        <Layout>
            <div style={{backgroundImage: 'url(./history.jpg)', backgroundBlendMode: 'overlay', backgroundColor: '#2f302b', }} className="flex flex-wrap gap-3 md:gap-10 h-[300px] w-full justify-center items-center">
                <div onClick={() => setVersion("2025")} className={"cursor-pointer mt-[250px] md:mt-[210px] rounded-xl border-2 border-[white] flex flex-col items-center justify-center transition-all" + (version == "2025" ? " text-[24px] w-[180px] h-[100px] md:text-[32px] md:w-[300px] md:h-[160px] bg-lLightGreen text-[white]" : " text-[18px] w-[150px] h-[90px] md:text-[26px] md:w-[250px] md:h-[140px] bg-[#ddd] text-lText")}>
                    <p className="text-center">Caliope - 2025 <br/></p>
                    <p className="text-center text-[.5em]">(Unidad y Diversidad)</p>
                </div>
                <div onClick={() => setVersion("2024")} className={"cursor-pointer mt-[250px] md:mt-[210px] rounded-xl border-2 border-[white] flex flex-col items-center justify-center transition-all" + (version == "2024" ? " text-[24px] w-[180px] h-[100px] md:text-[32px] md:w-[300px] md:h-[160px] bg-lLightGreen text-[white]" : " text-[18px] w-[150px] h-[90px] md:text-[26px] md:w-[250px] md:h-[140px] bg-[#ddd] text-lText")}>
                    <p className="text-center">Caliope - 2024 <br/></p>
                    <p className="text-center text-[.5em]">(Unidad y Diversidad)</p>
                </div>
                <div onClick={() => setVersion("2023")} className={"cursor-pointer mt-[250px] md:mt-[210px] rounded-xl border-2 border-[white] flex flex-col items-center justify-center transition-all" + (version == "2023" ? " text-[24px] w-[180px] h-[100px] md:text-[32px] md:w-[300px] md:h-[160px] bg-lLightGreen text-[white]" : " text-[18px] w-[150px] h-[90px] md:text-[26px] md:w-[250px] md:h-[140px] bg-[#ddd] text-lText")}>
                    <p className="text-center">Caliope - 2023 <br/></p>
                    <p className="text-center text-[.5em]">(Historia y/o Mitología Nacional)</p>
                </div>
            </div>
            {version == "2023" && <Version2023/>}
            {version == "2024" && <Version2024/>}
            {version == "2025" && <Version2025/>}
        </Layout>
    )
}

export default History
