//import { useState, useEffect } from "react";
//import axios from "axios";
import "./style.css";
import Logopequena from "../Images/Home_47.avif";

/*interface Features {
  id: number;
  nome: string;
  espaco_em_disco: string;
  trafego_mensal: string;
  created_at: string;
  updated_at: string;
}*/

function Plans() {
  /* const [planos, setPortfolio] = useState<{
    plano1: { nome: string; espaco_em_disco: string; trafego_mensal: string };
    plano2: { nome: string; espaco_em_disco: string; trafego_mensal: string };
    plano3: { nome: string; espaco_em_disco: string; trafego_mensal: string };
    descricao1: { nome: string };
    descricao2: { nome: string };
    descricao3: { nome: string };
    descricao4: { nome: string };
    descricao5: { nome: string };
  }>({
    plano1: { nome: "", espaco_em_disco: "", trafego_mensal: "" },
    plano2: { nome: "", espaco_em_disco: "", trafego_mensal: "" },
    plano3: { nome: "", espaco_em_disco: "", trafego_mensal: "" },
    descricao1: { nome: "" },
    descricao2: { nome: "" },
    descricao3: { nome: "" },
    descricao4: { nome: "" },
    descricao5: { nome: "" },
  });

  useEffect(() => {
    axios
      .get<Features[]>("https://novo.topdns.com.br/planos")
      .then((response) => {
        const data = response.data;

        setPortfolio({
          plano1: data.find((c) => c.id === 1) || {
            nome: "",
            espaco_em_disco: "",
            trafego_mensal: "",
          },
          plano2: data.find((c) => c.id === 2) || {
            nome: "",
            espaco_em_disco: "",
            trafego_mensal: "",
          },
          plano3: data.find((c) => c.id === 3) || {
            nome: "",
            espaco_em_disco: "",
            trafego_mensal: "",
          },
          descricao1: data.find((c) => c.id === 4) || {
            nome: "",
          },
          descricao2: data.find((c) => c.id === 5) || {
            nome: "",
          },
          descricao3: data.find((c) => c.id === 6) || {
            nome: "",
          },
          descricao4: data.find((c) => c.id === 7) || {
            nome: "",
          },
          descricao5: data.find((c) => c.id === 8) || {
            nome: "",
          },
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar os contatos:", error);
      });
  }, []); */

  return (
    <section>
      <div className="divprue w-full flex flex-wrap  gap-[50px]  justify-center pt-[30px] pb-[60px]">
        <div className="flex">
          <div className="ballon   grid justify-center items-center bg-[#ff8400] p-[10px] pt-[20px] pr-[15px] h-[210px] w-[210px] border-2 border-[#ff8400] rounded-[2em]">
            <div className="flex items-center mb-2">
              <img className="logop mr-2" src={Logopequena} />
              <h1 className="text-gray-800">ESPAÇO EM DISCO</h1>
            </div>
            <div className="flex items-center mb-2">
              <img className="logop mr-2" src={Logopequena} />
              <h1 className="text-gray-800">TRÁFEGO MENSAL</h1>
            </div>
            <div className="flex items-center mb-2">
              <img className="logop mr-2" src={Logopequena} />
              <h1 className="text-gray-800">BANCO DE DADOS</h1>
            </div>
            <div className="flex items-center mb-2">
              <img className="logop mr-2" src={Logopequena} />
              <h1 className="text-gray-800">CONTA DE EMAIL</h1>
            </div>
            <div className="flex items-center mb-2">
              <img className="logop mr-2" src={Logopequena} />
              <h1 className="font-bold">MUITO +</h1>
            </div>
          </div>
        </div>
        <div className="ballon cursor-pointer bg-[#f4eeee] h-[210px] w-[210px] border-2 border-[#ff8400] rounded-[2em]">
          <a href="https://topdns.com.br/assine">
            <div className="flex justify-center bg-[#ff8400] p-[12px]  rounded-t-[1.8em]">
              <h1 className="text-[18px] font-bold">TOP BÁSICO</h1>
            </div>
            <div className="flex justify-center mt-[30px] text-gray-600">
              A partir de
            </div>
            <div className="on justify-center flex  text-[75px] mt-[-15px] mr-[52px] ">
              19
            </div>
            <div className="flex justify-end mt-[-85px]  pr-[47px] text-[28px]">
              <div className="translate-x-[2px]">,</div>
              90
            </div>
            <div className="flex justify-end pr-[45px] mt-[-12px] text-[20px]">
              Mês
            </div>
          </a>
        </div>

        <div className="ballon cursor-pointer  bg-[#f4eeee] h-[210px] w-[210px] border-2 border-[#ff8400] rounded-[2em]">
          <a href="https://topdns.com.br/assine">
            <div className="flex justify-center bg-[#ff8400] p-[12px] rounded-t-[1.8em]">
              <h1 className="text-[18px] font-bold">TOP BÁSICO</h1>
            </div>
            <div className="flex justify-center mt-[30px] text-gray-600">
              A partir de
            </div>
            <div className=" justify-center flex  text-[75px] mt-[-15px] mr-[52px] ">
              20
            </div>
            <div className="flex justify-end mt-[-85px]  pr-[47px] text-[28px]">
              <div className="translate-x-[2px]">,</div>
              90
            </div>
            <div className="flex justify-end pr-[45px] mt-[-12px] text-[20px]">
              Mês
            </div>
          </a>
        </div>
        <div className="ballon cursor-pointer  bg-[#f4eeee] h-[210px] w-[210px] border-2 border-[#ff8400] rounded-[2em]">
          <a href="https://topdns.com.br/assine">
            <div className="flex justify-center bg-[#ff8400] p-[12px]  rounded-t-[1.8em]">
              <h1 className="text-[18px] font-bold">TOP AVANÇADO</h1>
            </div>
            <div className="flex justify-center mt-[30px] text-gray-600">
              A partir de
            </div>
            <div className=" justify-center flex  text-[75px] mt-[-15px] mr-[52px] ">
              30
            </div>
            <div className="flex justify-end mt-[-85px]  pr-[47px] text-[28px]">
              <div className="translate-x-[2px]">,</div>
              90
            </div>
            <div className="flex justify-end pr-[45px] mt-[-12px] text-[20px] ">
              Mês
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Plans;
