import Assine from "../Images/Assine_01.png";
import Logo from "../Images/logo_03.avif";
import Boll from "../Images/Layout_11.png";
import Rodape1 from "../Images/Home_51.avif";
import Rodape2 from "../Images/Home_53.avif";
import Rodape3 from "../Images/Home_55.avif";
import Rodape4 from "../Images/Home_58.avif";
import Twitter from "../Images/icon-twitter.avif";
import axios from "axios";
import { useState } from "react";
import "./style.css";

//Definir o que cada coisa é
interface FormData {
  nome: string;
  email: string;
  telefone: string;
  celular: string;
  rg: string;
  cpfCnpj: string;
  endereco: string;
  cep: string;
  bairro: string;
  dominio: string;
  assunto: string;
  mensagem: string;
  dominioRegistrado: boolean;
}

function AssinePage() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    celular: "",
    rg: "",
    cpfCnpj: "",
    endereco: "",
    cep: "",
    bairro: "",
    dominio: "",
    assunto: "",
    mensagem: "",
    dominioRegistrado: false,
  });

  //Armazenar e reproduzir os campos em branco
  const [errors, setErrors] = useState<Record<keyof FormData, string>>({
    nome: "",
    email: "",
    telefone: "",
    celular: "",
    rg: "",
    cpfCnpj: "",
    endereco: "",
    cep: "",
    bairro: "",
    dominio: "",
    assunto: "",
    mensagem: "",
    dominioRegistrado: "",
  });
  const [showModal, setShowModal] = useState(false); // Controlar exibição do Modal

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Limpa o erro do campo quando o usuário digita alguma coisa
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleRadioChange = (value: boolean) => {
    setFormData({
      ...formData,
      dominioRegistrado: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let formIsValid = true;
    let errorMessages: Record<keyof FormData, string> = { ...errors };

    //Onde irá aparecer a mensagem em vermelho
    Object.keys(formData).forEach((key) => {
      const field = key as keyof FormData;
      if (formData[field] === "") {
        formIsValid = false;
        errorMessages[field] = "Preencha este campo!";
      } else {
        errorMessages[field] = "";
      }
    });

    if (!formIsValid) {
      setErrors(errorMessages);
      return;
    }

    try {
      const response = await axios.post(
        "https://novo.topdns.com.br/api/assine",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Resposta do servidor:", response.data);
      setShowModal(true);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-[#f0f8ff] overflow-x-hidden">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75 z-50">
          <div className="ballon bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold">Envio Bem-Sucedido!</h2>
            <p className="mt-2">
              Seu formulário foi enviado com sucesso, em breve entraremos em
              contato!
            </p>
            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <div className="w-full flex relative ">
        <div className=" w-full absolute flex justify-center">
          <img
            className="w-[clamp(120px,40vw,420px)] pt-[10px]"
            src={Logo}
            alt=""
          />
        </div>
        <img className="w-full" src={Assine} alt="" />
      </div>
      <main className="w-full pt-[40px] pb-[40px] grid justify-items-center">
        <img className="h-[60px] w-[50px]" src={Boll} alt="" />
        <h1 className="p-4  text-[25px]">ASSINE</h1>
        <div className="flex w-[100vw] justify-center">
          <span className="w-[600px] text-center p-5 text-gray-400">
            Adicione abaixo as informações de contato e qual plano deseja
            contratar, que um de nossos consultores entrara em contato.
          </span>
        </div>
      </main>
      <div className="w-full grid justify-items-center h-full bg-[#f0f8ff]">
        <div className="  w-[clamp(320px,100vw,900px)] p-10  ">
          <div className="w-full grid md:flex justify-center gap-[40px]">
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="nome"
                placeholder="DIGITE SEU NOME"
                value={formData.nome}
                onChange={handleChange}
              />
              {errors.nome && (
                <p className="text-red-500 text-sm">{errors.nome}</p>
              )}
            </div>
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="email"
                placeholder="DIGITE SEU EMAIL"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="telefone"
                placeholder="DIGITE SEU TELEFONE"
                value={formData.telefone}
                onChange={handleChange}
              />
              {errors.telefone && (
                <p className="text-red-500 text-sm">{errors.telefone}</p>
              )}
            </div>
          </div>
          <div className="w-full grid md:flex justify-center gap-[40px] pt-[20px]">
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="celular"
                placeholder="DIGITE SEU CELULAR"
                value={formData.celular}
                onChange={handleChange}
              />
              {errors.celular && (
                <p className="text-red-500 text-sm">{errors.celular}</p>
              )}
            </div>
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="rg"
                placeholder="DIGITE SEU RG"
                value={formData.rg}
                onChange={handleChange}
              />
              {errors.rg && <p className="text-red-500 text-sm">{errors.rg}</p>}
            </div>
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="cpfCnpj"
                placeholder="CPF/CNPJ"
                value={formData.cpfCnpj}
                onChange={handleChange}
              />
              {errors.cpfCnpj && (
                <p className="text-red-500 text-sm">{errors.cpfCnpj}</p>
              )}
            </div>
          </div>
          <div className="w-full grid md:flex justify-center gap-[40px] pt-[20px]">
            <div className="grid w-full">
              <input
                className="w-[90vw] md:w-full p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="endereco"
                placeholder="ENDEREÇO/NÚMERO"
                value={formData.endereco}
                onChange={handleChange}
              />
              {errors.endereco && (
                <p className="text-red-500 text-sm">{errors.endereco}</p>
              )}
            </div>
          </div>
          <div className="w-full grid md:flex justify-center gap-[40px] pt-[20px]">
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="cep"
                placeholder="CEP"
                value={formData.cep}
                onChange={handleChange}
              />
              {errors.cep && (
                <p className="text-red-500 text-sm">{errors.cep}</p>
              )}
            </div>
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="bairro"
                placeholder="BAIRRO"
                value={formData.bairro}
                onChange={handleChange}
              />
              {errors.bairro && (
                <p className="text-red-500 text-sm">{errors.bairro}</p>
              )}
            </div>
            <div className="grid">
              <input
                className="w-[90vw] md:w-[250px] p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="dominio"
                placeholder="DIGITE SEU DOMINIO"
                value={formData.dominio}
                onChange={handleChange}
              />
              {errors.dominio && (
                <p className="text-red-500 text-sm">{errors.dominio}</p>
              )}
            </div>
          </div>
          <div className="w-full grid md:flex justify-center gap-[40px] pt-[20px]">
            <div className="grid w-full">
              <input
                className="w-[90vw] md:w-full p-2 h-[40px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] text-center text-gray-800  font-normal"
                type="text"
                name="assunto"
                placeholder="ASSUNTO"
                value={formData.assunto}
                onChange={handleChange}
              />
              {errors.assunto && (
                <p className="text-red-500 text-sm">{errors.assunto}</p>
              )}
            </div>
          </div>
          <div className="w-full grid md:flex justify-center gap-[40px] pt-[20px]">
            <div className="grid w-full">
              <input
                className="w-[90vw] md:w-full p-2 h-[200px] rounded-lg placeholder:font-semibold placeholder:text-black text-[16px] flex text-center text-gray-800  font-normal"
                name="mensagem"
                placeholder="DIGITE SUA MENSAGEM"
                value={formData.mensagem}
                onChange={handleChange}
              />
              {errors.mensagem && (
                <p className="text-red-500 text-sm">{errors.mensagem}</p>
              )}
            </div>
          </div>
          <div className="w-full pt-[50px] p-5 text-center">
            <h1 className="text-[16px] font-semibold">
              JÁ POSSUI DOMÍNIO REGISTRADO?
            </h1>
            <div className="flex justify-center p-5 gap-[20px]">
              <button
                className={`p-3 w-[70px] rounded-[5px] text-white ${
                  formData.dominioRegistrado ? "bg-red-800" : "bg-red-500"
                }`}
                onClick={() => handleRadioChange(false)}
              >
                SIM
              </button>
              <button
                className={`p-3 w-[70px] rounded-[5px] text-white ${
                  formData.dominioRegistrado ? "bg-green-800" : "bg-green-600"
                }`}
                onClick={() => handleRadioChange(false)}
              >
                NÃO
              </button>
            </div>
            <div className="w-full h-[2px] bg-gray-300"></div>
            <div className="w-full flex justify-center p-5">
              <button
                className="bg-purple-800 w-[100px] text-white p-3 rounded-[10px]"
                onClick={handleSubmit}
              >
                ENVIAR
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-[100vw] justify-center p-[45px] bg-[#ff8400]">
          <div className="controldivfooter flex justify-center flex-wrap gap-[100px] gap-y-[40px] max-sm:grid ">
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
            <div className="hover:opacity-50">
              <a
                className="flex justify-center"
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
            <div className="hover:opacity-50">
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
            <div className="hover:opacity-50">
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
    </div>
  );
}

export default AssinePage;
