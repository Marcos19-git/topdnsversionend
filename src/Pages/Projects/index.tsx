//import { useState, useEffect } from "react";
//import axios from "axios";
import "./style.css";
import Cinza1 from "../Images/Home_36.avif";
import Cinza2 from "../Images/Home_30.avif";
import Cinza3 from "../Images/Home_27.avif";
import Cinza4 from "../Images/Home_39.avif";
import Cinza5 from "../Images/Home_33.avif";

/*interface Portfolios {
  id: number;
  link: string;
  imagem: string;
  created_at: string;
  updated_at: string;
}*/

function Projects() {
  /*const [contatos, setPortfolio] = useState<{
    imagem1: { link: string; imagem: string };
    imagem2: { link: string; imagem: string };
    imagem3: { link: string; imagem: string };
    imagem4: { link: string; imagem: string };
    imagem5: { link: string; imagem: string };
  }>({
    imagem1: { link: "", imagem: "" },
    imagem2: { link: "", imagem: "" },
    imagem3: { link: "", imagem: "" },
    imagem4: { link: "", imagem: "" },
    imagem5: { link: "", imagem: "" },
  });

  useEffect(() => {
    axios
      .get<Portfolios[]>("https://novo.topdns.com.br/portfolios")
      .then((response) => {
        const data = response.data;

        setPortfolio({
          imagem1: data.find((c) => c.id === 25) || {
            link: "",
            imagem: "",
          },
          imagem2: data.find((c) => c.id === 26) || {
            link: "",
            imagem: "",
          },
          imagem3: data.find((c) => c.id === 27) || {
            link: "",
            imagem: "",
          },
          imagem4: data.find((c) => c.id === 28) || {
            link: "",
            imagem: "",
          },
          imagem5: data.find((c) => c.id === 29) || {
            link: "",
            imagem: "",
          },
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar os contatos:", error);
      });
  },[]); */

  return (
    <section>
      <div className="grey">
        <div className="w-full grid justify-center pb-[50px] pt-[30px]">
          <h1 className="text-orange-400 cursor-default transition-all duration-200 ease-in-out text-[clamp(1.5rem,3vw,2rem)] mb-[-5px] text-center">
            VEJA ALGUNS DOS NOSSOS TRABALHOS
          </h1>
          <h2 className=" text-[clamp(1.3rem,1.5vw,1.4rem)] cursor-default transition-all pr-[5px]  duration-200 ease-in-out text-gray-600 flex justify-center text-center">
            Toque na imagem para ver o projeto completo
          </h2>
        </div>
        <div className="w-full transition-all duration-300 flex justify-center items-center gap-[40px] flex-wrap pb-[200px]">
          <a href="https://yunenet.com.br/" target="_blank" title="Yune Net">
            <img
              className=" img1 p-[5px] rounded-[6px] bg-white"
              src={Cinza1}
            ></img>
          </a>

          <a
            href="https://site.twspeed.com.br/"
            target="_blank"
            title="Tw Speed"
          >
            <img
              className="img2 p-[5px] rounded-[6px] bg-white"
              src={Cinza2}
            ></img>
          </a>
          <a
            href="https://topsapp.com.br/central"
            target="_blank"
            title="Central do Assinante"
          >
            <img
              className="img3 p-[5px] rounded-[6px] bg-white"
              src={Cinza3}
            ></img>
          </a>
          <a href="https://topsapp.com.br" target="_blank" title="Top Sapp">
            <img
              className="img4 p-[5px] rounded-[6px] bg-white"
              src={Cinza5}
            ></img>
          </a>
          <a
            href="https://topsapp.com.br/topcrm"
            target="_blank"
            title="Top Crm"
          >
            <img
              className="img5 p-[5px] rounded-[6px] bg-white"
              src={Cinza4}
            ></img>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
