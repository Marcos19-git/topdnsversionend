import "./style.css";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

const SearchDomain = () => {
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
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className=" control1 w-full h-[180px] flex justify-center transition-all duration-200 ease-in-out">
        <div className="bg-[#ff8400] w-full h-[2px] flex justify-center transition-all duration-200 ease-in-out">
          <div
            className={`divballoon w-[850px] ${
              loading || modalOpen ? "h-[290px]" : "h-[260px]"
            } mt-[-130px] border-2 border-[#ff8400] bg-[#e8eaec] transition-all duration-200 ease-in-out rounded-[40px]`}
          >
            <div className="divtitle flex cursor-default justify-center pt-[30px] pb-[20px] text-[clamp(1.7em,2vw,1.975em)] text-black transition-all duration-200 ease-in-out">
              <h1 className="items-center text-center">PESQUISA DE DOMÍNIO</h1>
            </div>
            <div className="divplaceholder flex justify-center ">
              <div className="wwwdiv cursor-default flex text-white text-[20px] text-center rounded-l-[10px] items-center bg-[#ff8400] pr-[10px] pl-[10px]">
                <h2 className="font-bold">WWW.</h2>
              </div>
              <form className="flex" onSubmit={handleSubmit}>
                <input
                  className="divplaceholdertam w-[500px] font-normal placeholder:font-bold placeholder:text-black text-black text-center  h-[50px] outline-none focus:ring-0 rounded-tr-[0.3em] rounded-br-[0.3em]"
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
                    className="testediv  bg-[#ff8400] pl-[10px] pr-[10px] text-white text-[20px] font-bold rounded-[0.3em]"
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
              <div className=" contedballon bg-[#e8eaec] cursor-default pl-[30px] pr-[30px] pt-[10px] pb-[10px]  gap-[40px] flex rounded-[15px] transition-all duration-200 ease-in-out">
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

      <div className="grid pb-[20px] justify-center">
        <h1 className="divplain flex text-center transition-all duration-200 cursor-default ease-in-out text-[clamp(1.5rem,3vw,2rem)] text-orange-400">
          COMPARE OS RECURSOS POR PLANO
        </h1>
        <h2 className="flex cursor-default justify-center transition-all duration-200 ease-in-out text-center  text-[clamp(1.2rem,1.4vw,1.4rem)] text-gray-600">
          Incluídos em todos os planos
        </h2>
      </div>
    </section>
  );
};

export default SearchDomain;
