import ImgHeader from "./Images/Hospedagem_01.png";
import Logo03 from "../Images/logo_03.avif";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import Rodape1 from "../Images/Home_51.avif";
import Rodape2 from "../Images/Home_53.avif";
import Rodape3 from "../Images/Home_55.avif";
import Rodape4 from "../Images/Home_58.avif";
import Twitter from "../Images/icon-twitter.avif";
import "./style.css";

function Host() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalBackground, setModalBackground] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDomain(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setModalOpen(false);

    try {
      const response = await axios.get(
        `https://novo.topdns.com.br/whois?domain=${domain}`
      );

      console.log(response.data);

      if (response.data === true) {
        setModalMessage(`INDISPONÍVEL`);
        setModalBackground("bg-red-500");
      } else if (response.data === false) {
        setModalMessage(`DISPONÍVEL`);
        setModalBackground("bg-green-500");
      } else {
        setModalMessage("Resposta inesperada da API.");
        setModalBackground("bg-yellow-500");
      }

      setModalOpen(true);

      setTimeout(() => {
        setModalOpen(false);
      }, 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-[100vh] overflow-x-hidden">
      <div className="w-full grid relative">
        <img className="imagemm w-full" src={ImgHeader} alt="" />
        <div className="w-full absolute p-3 grid justify-center items-center z-10">
          <img src={Logo03} alt="" />
        </div>
        <div className="absolute flex h-full w-full justify-center items-center">
          <div className="grid">
            {/* Aqui, envolva os títulos em uma div com classes responsivas */}
            <div className="absolute top-[40%] left-[5%] transform -translate-y-1/2 text-white py-2 rounded-md flex flex-col items-center w-full max-w-[90%] px-4">
              <h1 className="register text-orange-400 text-center mb-[-14px] text-[clamp(0.3em,5vw,3em)] font-bold ">
                REGISTRO DE DOMINIO
              </h1>
              <h2 className="register2 text-white text-center text-[clamp(0.3em,2vw,1.1em)] mb-[20px] font-bold ">
                REGISTRE SEU DOMINIO E GARANTA O ENDEREÇO DE SEU SITE
              </h2>
              {/* Botões permanecem iguais */}
              <div className="flex justify-center  w-full">
                <a
                  href="https://topdns.com.br/hospedagem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    title="HOSPEDAGEM"
                    className="buttonorange buttonn2 buttonorange22 bg-[#ff8400] min-w-[80px] text-[clamp(0.3em,1vw,1.3em)] hover:bg-orange-700 text-white w-[clamp(5em,10vw,9.75em)] border-r-2 border-white font-bold py-2 px-4"
                  >
                    HOSPEDAGEM
                  </button>
                </a>
                <a
                  href="https://topdns.com.br/topsms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    title="TOPSMS"
                    className="buttonorange buttonn2 bg-[#ff8400] min-w-[60px] hover:bg-orange-700 text-[clamp(0.3em,1vw,1.3em)] text-white w-[clamp(5em,10vw,8.75em)] border-r-2 border-white font-bold py-2 px-4"
                  >
                    TOPSMS
                  </button>
                </a>
                <a
                  href="https://topdns.com.br/assine"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    title="ASSINE"
                    className="buttonorange buttonn2 bg-[#ff8400] hover:bg-orange-700 min-w-[60px] text-[clamp(0.3em,1vw,1.3em)] text-white w-[clamp(5em,10vw,8.75em)] font-bold py-2 px-4"
                  >
                    ASSINE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="control22  w-full mt-[-80px]  flex justify-center transition-all duration-200 ease-in-out">
          <div
            className={`divballoon ballondiv z-20 w-[850px] ${
              loading || modalOpen ? "h-[290px]" : "h-[260px]"
            } mt-[-130px] border-2 border-[#ff8400] bg-[#ff8624] transition-all duration-200 ease-in-out rounded-[40px]`}
          >
            <div className="divtitle flex cursor-default justify-center pt-[30px] pb-[20px] text-[clamp(1.7em,2vw,1.975em)] text-black transition-all duration-200 ease-in-out">
              <h1 className="items-center text-center">PESQUISA DE DOMÍNIO</h1>
            </div>
            <div className="divplaceholder flex justify-center ">
              <div className="wwwdiv cursor-default flex text-white text-[20px] text-center rounded-l-[10px] items-center bg-[#8323d2] pr-[10px] pl-[10px]">
                <h2 className="font-bold">WWW.</h2>
              </div>
              <form className="flex" onSubmit={handleSubmit}>
                <input
                  className="tam w-[500px] font-normal placeholder:font-bold placeholder:text-black text-black text-center  h-[50px] outline-none focus:ring-0 rounded-tr-[0.3em] rounded-br-[0.3em]"
                  name="dominio"
                  autoComplete="domain"
                  type="text"
                  id="domain"
                  value={domain}
                  onChange={handleInputChange}
                  placeholder="SEU DOMÍNIO"
                />

                <div className="orangediv flex ">
                  <button
                    type="submit"
                    id="MyButton"
                    className="testediv  bg-[#8323d2] pl-[10px] pr-[10px] text-white text-[20px] font-bold rounded-[0.3em]"
                  >
                    TESTAR
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full mt-[5px] flex justify-center">
              {(loading || modalOpen) && (
                <div
                  className={`rounded-lg text-center text-xl ${
                    loading ? "bg-gray-400" : modalBackground
                  }`}
                >
                  <p className="p-[10px] pr-[10px] pl-[10px] text-white">
                    {loading ? "CARREGANDO..." : modalMessage}
                  </p>
                </div>
              )}
            </div>

            <div
              className={`divminiballoon flex w-full justify-center transition-all duration-200 ease-in-out ${
                loading || modalOpen ? "mt-[5px]" : "mt-[20px]"
              }`}
            >
              <div className=" contedballon ballonconted bg-[#e8eaec] cursor-default pl-[30px] pr-[30px] pt-[10px] pb-[10px]  gap-[40px] flex rounded-[15px] transition-all duration-200 ease-in-out">
                <div className="wrap22 font-bold pr-[10px]">
                  ㅤ Conheça os domíniosㅤ
                  <br className="hidden md:block" />ㅤ mais utilizados:
                </div>
                <div className="mititle cursor-default gap-[14px] flex items-center transition-all duration-200 ease-in-out ">
                  <span>.com.br</span>
                  <span>.com</span>
                  <span>.net</span>
                  <span>.online</span>
                  <span>.site</span>
                  <span>.org</span>
                  <span>.store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center p-[90px] pb-[120px]">
        <div className="eid2 w-[70vw]  h-full  border-[3px]  border-amber-400 rounded-[50px] flex flex-wrap">
          <div className="w-full  flex bg-purple-800 border-orange-400 border-b-[3px] rounded-[50px] ">
            <div className="basic3 p-2  text-center h-[13vh] bg-purple-800 flex justify-center w-[20vw] items-center rounded-bl-[50px] border-orange-400 rounded-tl-[48px] text-gray-800 font-semibold">
              <h2 className=" text-white  text-[clamp(0.6rem,1vw,1em)]  ">
                CONFIRA AS FERRAMENTAS <br></br>E VANTAGENS DOS PLANOS
              </h2>
            </div>
            <div className="basic2 p-2 w-[10vw]  rounded-tl-[50px] flex border-orange-400 justify-center items-center rounded-bl-[50px] text-center  bg-orange-400 text-gray-800 ">
              <div className="grid">
                <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                  TOP
                </h1>
                <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                  BASICO
                </h2>
              </div>
            </div>
            <div className="basic2 border-l p-2 w-[10vw] text-center bg-orange-400 flex justify-center  items-center text-gray-800 ">
              <div className="grid">
                <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                  TOP
                </h1>
                <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                  BASICO
                </h2>
              </div>
            </div>
            <div className="basic2 border-l p-2 w-[10vw]  text-center bg-orange-400 flex justify-center items-center text-gray-800 ">
              <div className="grid">
                <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                  TOP
                </h1>
                <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                  BASICO
                </h2>
              </div>
            </div>
            <div className="basic2 border-l p-2 w-[10vw] text-center bg-orange-400 flex justify-center items-center text-gray-800 ">
              <div className="grid">
                <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                  TOP
                </h1>
                <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                  BASICO
                </h2>
              </div>
            </div>
            <div className="grid">
              <div className="basic2 border-l p-2 w-[10vw] text-center  bg-orange-400 flex justify-center items-center rounded-tr-[48px] rounded-br-[50px] text-gray-800 ">
                <div className="grid">
                  <h1 className="text-white text-[clamp(0.8rem,1.2vw,1.2em)] h-[20px] ">
                    TOP
                  </h1>
                  <h2 className="text-white text-[clamp(1rem,1.8vw,1.8em)]">
                    BASICO
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100vw] md:w-full flex">
            <div className="border text-[clamp(0.6rem,1.3vw,1rem)] p-2 text-center w-[40vw]  text-gray-800 font-semibold">
              ESPAÇO EM DISCO
            </div>
            <div className="border text-[clamp(0.6rem,1.3vw,1rem)] p-2 text-center w-[20vw]   text-gray-800 font-semibold">
              10GB
            </div>
            <div className="border text-[clamp(0.6rem,1.3vw,1rem)] p-2 text-center w-[20vw]  text-gray-800 font-semibold">
              10GB
            </div>
            <div className="border text-[clamp(0.6rem,1.3vw,1rem)] p-2 text-center w-[20vw]  text-gray-800 font-semibold">
              10GB
            </div>
            <div className="border text-[clamp(0.6rem,1.3vw,1rem)] p-2 text-center w-[20vw]  text-gray-800 font-semibold">
              10GB
            </div>
            <div className="border text-[clamp(0.6rem,1.3vw,1rem)] p-2 text-center w-[20vw]  text-gray-800 font-semibold">
              10GB
            </div>
          </div>
          <div className="w-[100vw] md:w-full flex">
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw]  text-gray-800 font-semibold">
              TRÁFEGO MENSAL
            </div>
            <div className="border p-2  text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              50GB
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              50GB
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[20vw]  text-gray-800 font-semibold">
              50GB
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              50GB
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              50GB
            </div>
          </div>
          <div className="w-[100vw] md:w-full flex">
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw]  text-gray-800 font-semibold">
              BANCO DE DADOS
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              1
            </div>
            <div className="border p-2  text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              1
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              1
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              1
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              1
            </div>
          </div>
          <div className="w-[100vw] md:w-full flex">
            <div className="border p-2 whitespace-nowrap text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw]  text-gray-800 font-semibold">
              CONTAS DE E-MAIL
            </div>
            <div className="border p-2  text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              DISPONIVEL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              DISPONIVEL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              DISPONIVEL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              DISPONIVEL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              DISPONIVEL
            </div>
          </div>
          <div className="w-[100vw] md:w-full flex">
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw] text-gray-800 font-semibold">
              DOMINIOS
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              10
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              10
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              10
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              10
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[20vw]  text-gray-800 font-semibold">
              10
            </div>
          </div>
          <div className="w-[100vw] md:w-full flex">
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw]  text-gray-800 font-semibold">
              SERVIDOR
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              MANUAL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              MANUAL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              MANUAL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              MANUAL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              MANUAL
            </div>
          </div>
          <div className="w-[100vw] md:w-full flex">
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw]  text-gray-800 font-semibold">
              ANTIVIRUS
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              99,9%
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              99,9%
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)]  text-center w-[20vw]  text-gray-800 font-semibold">
              99,9%
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              99,9%
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              99,9%
            </div>
          </div>
          <div className="w-full flex">
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[40vw] text-gray-800 font-semibold">
              NAO DISPONIVEL
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              -
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              -
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              -
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              -
            </div>
            <div className="border p-2 text-[clamp(0.6rem,1.3vw,1rem)] text-center w-[20vw]  text-gray-800 font-semibold">
              -
            </div>
          </div>
          <div className="w-full flex bg-purple-800 rounded-[50px] border-2 border-orange-500">
            <div className="border-l p-2 text-center bg-purple-800 h-[20vh]  rounded-tl-[50px] w-[30vw] flex  justify-center items-center rounded-bl-[48px]  text-gray-800 font-semibold">
              <h1 className="text-white flex text-[clamp(1.5rem,2.8vw,2.8rem)]">
                VALORES
              </h1>
            </div>
            <div className=" border-orange-500 border-l-[4px] flex  p-2 text-center bg-purple-800 w-[15vw] rounded-tl-[50px]  rounded-bl-[50px] justify-center items-center  text-gray-800 ">
              <h1 className="text-white text-[clamp(1.5rem,5vw,5rem)] font-bold">
                19
              </h1>
              <h2 className="text-white">,</h2>
              <div className="grid ">
                <h2 className="text-white h-[24px] text-[1.5em] ml-[-5px] font-bold">
                  90
                </h2>
                <h2 className="text-white">Mês</h2>
              </div>
            </div>
            <div className="border-l flex p-2 text-center bg-purple-800 w-[15vw] justify-center items-center  text-gray-800 font-semibold">
              <h1 className="text-orange-500 text-[clamp(1.5rem,5vw,5rem)] font-bold">
                19
              </h1>
              <h2 className="text-orange-500">,</h2>
              <div className="grid ">
                <h2 className="text-orange-500 h-[24px] text-[1.5em] ml-[-5px] font-bold">
                  90
                </h2>
                <h2 className="text-orange-500">Mês</h2>
              </div>
            </div>
            <div className="border-l flex p-2 text-center bg-purple-800 w-[15vw] justify-center items-center  text-gray-800 font-semibold">
              <h1 className="text-white text-[clamp(1.5rem,5vw,5rem)] font-bold">
                19
              </h1>
              <h2 className="text-white">,</h2>
              <div className="grid ">
                <h2 className="text-white h-[24px] text-[1.5em] ml-[-5px] font-bold">
                  90
                </h2>
                <h2 className="text-white">Mês</h2>
              </div>
            </div>
            <div className="border-l flex p-2 text-center bg-purple-800 w-[15vw] justify-center items-center  text-gray-800 font-semibold">
              <h1 className="text-orange-500 text-[clamp(1.5rem,5vw,5rem)] font-bold">
                19
              </h1>
              <h2 className="text-orange-500">,</h2>
              <div className="grid ">
                <h2 className="text-orange-500 h-[24px] text-[1.5em] ml-[-5px] font-bold">
                  90
                </h2>
                <h2 className="text-orange-500">Mês</h2>
              </div>
            </div>
            <div className="border-l flex p-2 text-center bg-purple-800  w-[15vw] rounded-tr-[50px] justify-center items-center  rounded-br-[48px] text-gray-800 font-semibold">
              <h1 className="text-white text-[clamp(1.5rem,5vw,5rem)] font-bold">
                19
              </h1>
              <h2 className="text-white">,</h2>
              <div className="grid ">
                <h2 className="text-white h-[24px] text-[1.5em] ml-[-5px] font-bold">
                  90
                </h2>
                <h2 className="text-white">Mês</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center p-[70px] bg-[#ff8400]">
        <div className="controldivfooter flex justify-center flex-wrap gap-[80px] gap-y-[40px] max-sm:grid ">
          {/* Telefone */}
          <div className="hover:opacity-50">
            <a
              href="tel:6632110010"
              className="flex justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="flex justify-center w-[50px] h-[50px]"
                src={Rodape1}
              />
            </a>
            <p className="tell  scale-y-150 flex mt-[17px] font-semibold text-[clamp(0.8rem,_4vw,_0.9rem)] text-white justify-center cursor-pointer">
              (66) 3211-0010
            </p>
          </div>

          {/* Email */}
          <div className="hover:opacity-50">
            <a
              className="flex justify-center"
              href="mailto:COMERCIAL@TOPSAPP.COM.BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-[50px] h-[50px]" src={Rodape2} />
            </a>
            <p className="tell  scale-y-150 cursor-pointer flex mt-[20px] justify-center font-semibold text-white text-[clamp(0.8rem,_4vw,_0.7rem)]">
              COMERCIAL@TOPSAPP.COM.BR
            </p>
          </div>

          {/* Facebook */}
          <div className="hover:opacity-50 lg:ml-[10px]">
            <a
              className="flex justify-center w-full"
              href="https://www.facebook.com/topsapp10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-[50px] h-[50px]" src={Rodape3} />
            </a>
            <p className="tell  scale-y-150 cursor-pointer flex mt-[20px] font-semibold justify-center text-white text-[clamp(0.8rem,_4vw,_0.7rem)]">
              FACEBOOK
            </p>
          </div>

          {/* Instagram */}
          <div className="hover:opacity-50 lg:ml-[30px]">
            <a
              className="flex justify-center"
              href="https://www.instagram.com/topsapp10/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-[50px] h-[50px]" src={Rodape4} />
            </a>
            <p className="tell  scale-y-150 cursor-pointer flex mt-[20px] justify-center font-semibold text-white text-[clamp(0.8rem,_4vw,_0.7rem)]">
              INSTAGRAM
            </p>
          </div>

          {/* Twitter */}
          <div className="hover:opacity-50 lg:ml-[30px]">
            <a
              className="flex justify-center"
              href="https://twitter.com/topsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-[60px] h-[50px]" src={Twitter} />
            </a>
            <p className="tell  scale-y-150 cursor-pointer flex mt-[20px] text-white font-semibold justify-center text-[clamp(0.8rem,_4vw,_0.7rem)]">
              TWITTER
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black w-full">
        <h1 className="bg-black text-[#ff8400] cursor-default flex justify-center items-center text-center text-[clamp(0.8rem,_4vw,_1rem)] p-[20px]">
          Copyright 2025 - Todos os direitos Reservados TopDns
        </h1>
      </div>
    </div>
  );
}

export default Host;
