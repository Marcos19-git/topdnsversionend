//import { useState, useEffect } from "react";
//import axios from "axios";
import Icone1 from "../Images/Home_04.avif";
import Icone2 from "../Images/Home_06.avif";
import Icone3 from "../Images/Home_09.avif";
//import "./style.css";

/*interface Paragrafo {
  id: number;
  tipo: string;
  descricao: string;
  created_at: string;
  updated_at: string;
} */

function Features() {
  /*  const [contatos, setContatos] = useState<{
    paragrafo1: { tipo: string; descricao: string };
    paragrafo2: { tipo: string; descricao: string };
    paragrafo3: { tipo: string; descricao: string };
    imagemsegurança: { tipo: string };
    imagemvelocidade: { tipo: string };
    imagemsuporte: { tipo: string };
  }>({
    paragrafo1: { tipo: "", descricao: "" },
    paragrafo2: { tipo: "", descricao: "" },
    paragrafo3: { tipo: "", descricao: "" },
    imagemsegurança: { tipo: "" },
    imagemvelocidade: { tipo: "" },
    imagemsuporte: { tipo: "" },
  });

  /*useEffect(() => {
    axios
      .get<Paragrafo[]>("https://novo.topdns.com.br/paragrafos")
      .then((response) => {
        const data = response.data;

        setContatos({
          paragrafo1: data.find((c) => c.id === 1) || {
            tipo: "",
            descricao: "",
          },
          paragrafo2: data.find((c) => c.id === 2) || {
            tipo: "",
            descricao: "",
          },
          paragrafo3: data.find((c) => c.id === 3) || {
            tipo: "",
            descricao: "",
          },
          imagemsegurança: data.find((c) => c.id === 4) || {
            tipo: "",
          },
          imagemvelocidade: data.find((c) => c.id === 5) || {
            tipo: "",
          },
          imagemsuporte: data.find((c) => c.id === 6) || {
            tipo: "",
          },
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar os contatos:", error);
      });
  }, []); */

  return (
    <section>
      <div className="divplo flex-wrap flex gap-[70px] pt-[100px] pb-[70px] justify-center">
        <div className="flex cursor-default items-center text-center flex-col justify-center w-[400px] transition-all duration-700">
          <img className="image" src={Icone1}></img>
          <h2 className="flex justify-center text-[22px] font-bold mt-[20px] mb-[20px]">
            Segurança
          </h2>
          <p className="flex text-center text-gray-600 text-[18px]">
            A segurança do ambiente é um compromisso e o nosso diferencial no
            mercado e oferecemos aos nossos clientes sem custo adicional.
          </p>
        </div>
        <div className="container2 flex flex-col cursor-default w-[400px] ">
          <div className="flex items-center w-full text-center h-auto flex-col justify-center">
            <img className="image" src={Icone2}></img>
            <h2 className="flex justify-center mt-[20px] font-bold text-[22px] mb-[20px]">
              Velocidade
            </h2>
            <p className="flex text-center text-gray-600 text-[18px]">
              Servidores de última geração, grande capacidade e ótimo desempenho
              para sites de todos os portes.
            </p>
          </div>
        </div>
        <div className="container3 flex flex-col cursor-default w-[400px]">
          <div className="flex items-center text-center flex-col justify-center w-full">
            <img className="image" src={Icone3}></img>
            <h2 className="flex  mt-[20px] text-[22px] font-bold justify-center mb-[20px]">
              Suporte
            </h2>
            <p className="flex text-center text-gray-600 text-[18px]">
              Empresa estabelecida há 10 anos no mercado nacional brasileiro de
              hospedagem de sites com a proposta de ser uma inovadora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
