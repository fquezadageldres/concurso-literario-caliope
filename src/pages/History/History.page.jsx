import { Layout } from "../../components/Layout";
import Version2023 from "./components/2023.component";
import Version2024 from "./components/2024.component";
import Version2025 from "./components/2025.component";
import { useState } from "react";
import history from "./history.jpg";

export const History = () => {
  const [version, setVersion] = useState("2025");

  return (
    <Layout>
      <div
        style={{
          backgroundImage: `url(${history})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "#2f302b",
        }}
        className="flex flex-col md:flex-row pt-[200px] gap-3 lg:gap-10 h-[300px] w-full justify-center items-center"
      >
        <div
          onClick={() => setVersion("2025")}
          className={
            "cursor-pointer py-3 min-w-[300px] md:min-w-[220px] rounded-xl border-2 border-[white] flex flex-col items-center justify-center transition-all" +
            (version == "2025"
              ? " text-[24px] w-[180px] h-[140px] lg:text-[32px] lg:w-[300px] lg:h-[160px] bg-lLightGreen text-[white]"
              : " text-[18px] w-[150px] h-[120px] lg:text-[26px] lg:w-[250px] lg:h-[140px] bg-[#ddd] text-lText")
          }
        >
          <p className="text-center">
            Calíope - 2025 <br />
          </p>
          <p className="text-center text-[.5em] mt-0">
            (Mitología de los pueblos originarios Chilenos)
          </p>
        </div>
        <div
          onClick={() => setVersion("2024")}
          className={
            "cursor-pointer py-3 min-w-[300px] md:min-w-[220px] rounded-xl border-2 border-[white] flex flex-col items-center justify-center transition-all" +
            (version == "2024"
              ? " text-[24px] w-[180px] h-[140px] lg:text-[32px] lg:w-[300px] lg:h-[160px] bg-lLightGreen text-[white]"
              : " text-[18px] w-[150px] h-[120px] lg:text-[26px] lg:w-[250px] lg:h-[140px] bg-[#ddd] text-lText")
          }
        >
          <p className="text-center">
            Calíope - 2024 <br />
          </p>
          <p className="text-center text-[.5em] mt-0">(Unidad y Diversidad)</p>
        </div>
        <div
          onClick={() => setVersion("2023")}
          className={
            "cursor-pointer py-3 min-w-[300px] md:min-w-[220px] rounded-xl border-2 border-[white] flex flex-col items-center justify-center transition-all" +
            (version == "2023"
              ? " text-[24px] w-[180px] h-[140px] lg:text-[32px] lg:w-[300px] lg:h-[160px] bg-lLightGreen text-[white]"
              : " text-[18px] w-[150px] h-[120px] lg:text-[26px] lg:w-[250px] lg:h-[140px] bg-[#ddd] text-lText")
          }
        >
          <p className="text-center">
            Calíope - 2023 <br />
          </p>
          <p className="text-center text-[.5em] mt-0">
            (Historia y/o Mitología Nacional)
          </p>
        </div>
      </div>
      {version == "2023" && <Version2023 />}
      {version == "2024" && <Version2024 />}
      {version == "2025" && <Version2025 />}
    </Layout>
  );
};

export default History;
