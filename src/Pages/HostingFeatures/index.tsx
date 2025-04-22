import "./style.css";
//import { useState, useEffect } from "react";
//import axios from "axios";
import Laranja1 from "../Images/Home_15.avif";
import Laranja2 from "../Images/Home_17.avif";
import Laranja3 from "../Images/Home_19.avif";

/*interface Features {
  id: number;
  nome: string;
  descricao: string;
  created_at: string;
  updated_at: string;
}*/

function HostingFeatures() {
  /* const [imagens, setPortfolio] = useState<{
    nome1: { nome: string; descricao: string };
    nome2: { nome: string; descricao: string };
    nome3: { nome: string; descricao: string };
  }>({
    nome1: { nome: "", descricao: "" },
    nome2: { nome: "", descricao: "" },
    nome3: { nome: "", descricao: "" },
  });

  useEffect(() => {
    axios
      .get<Features[]>("https://novo.topdns.com.br/features")
      .then((response) => {
        const data = response.data;

        setPortfolio({
          nome1: data.find((c) => c.id === 1) || {
            nome: "",
            descricao: "",
          },
          nome2: data.find((c) => c.id === 2) || {
            nome: "",
            descricao: "",
          },
          nome3: data.find((c) => c.id === 3) || {
            nome: "",
            descricao: "",
          },
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar os contatos:", error);
      });
  }, []);*/

  return (
    <section>
      <div className="justify-center  w-full grid pt-[30px] bg-[#ff8400]">
        <h1 className="text-white pr-[10px]  transition-all duration-200 cursor-default ease-in-out text-center  text-[clamp(1.5rem,3vw,2rem)] mb-[-5px] ">
          FUNCIONALIDADES DA HOSPEDAGEM DE SITES
        </h1>
        <h2 className="text-[clamp(1.2rem,1.4vw,1.6rem)] cursor-default transition-all duration-200 ease-in-out  text-gray-700 flex justify-center pr-[15px] pl-[15px]  text-center">
          Muito mais recursos disponíveis para o seu site
        </h2>
      </div>
      <div className="divimg11 flex flex-wrap pt-[30px] gap-[40px] pb-[60px] justify-center w-full bg-[#ff8400]">
        <img className="i1 w-[345px] h-[385px]" src={Laranja1}></img>
        <img className="i2 w-[345px] h-[385px]" src={Laranja2}></img>
        <img className="i3 w-[345px] h-[385px]" src={Laranja3}></img>
      </div>
    </section>
  );
}

export default HostingFeatures;
