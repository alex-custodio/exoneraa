"use client";
import Footer from "@/components/Footer";
import CidadesExoneracao from "@/components/charts/CidadesExoneracao";
import CidadesNomeacao from "@/components/charts/CidadesNomeacao";
import TotalAtos from "@/components/charts/TotalAtos";
import { MainLayout } from "@/layouts/MainLayout";
import { useEffect,  useState } from "react";
import Municipio from "@/components/Municipio";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const [municipio, setMunicipio] = useState("geral");
  const [nomeMunicipio, setNomeMunicipio] = useState("Alagoas");
  useEffect(() => {
    if (municipio === "geral") {
      setNomeMunicipio("Alagoas");
    } else {
      const selectElement = document.getElementById(
        "municipio-select"
      ) as HTMLSelectElement;
      setNomeMunicipio(
        selectElement.options[selectElement.selectedIndex].innerText
      );
    }
  }, [municipio]);
  return (
    <main>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <MainLayout activeButton={"Home"}>
        <Municipio title="Alagoas" backActive={false}>
          <div className="flex flex-col mt-5 ">
            <p className="font-normal text-[#7C828A] 3xl:mx-auto 4xl:w-[59rem]">
              Coletamos os diários oficiais municipais publicados pela Associação
              dos Municípios Alagoanos (AMA). Escolha abaixo uma cidade de Alagoas
              e um determinado período e te apresentaremos as nomeações e
              exonerações do município.
            </p>
          </div>
          <div className="gap-x-5 gap-y-5 mx-[15%] flex flex-col xl:flex-row ">
            <select
              className="w-[28.56rem] h-16 p-4 rounded-2xl text-lg"
              id="municipio-select"
              onChange={(e) => {
                setMunicipio(e.target.value);
              }}
            >
              <option value="geral" selected>
                Escolha uma cidade de Alagoas
              </option>
              <option value="agua-branca">Água Branca</option>
              <option value="anadia">Anadia</option>
              <option value="arapiraca">Arapiraca</option>
              <option value="atalaia">Atalaia</option>
              <option value="barra-de-santo-antonio">
                Barra de Santo Antônio
              </option>
              <option value="barra-de-sao-miguel">Barra de São Miguel</option>
              <option value="batalha">Batalha</option>
              <option value="belem">Belém</option>
              <option value="belo-monte">Belo Monte</option>
              <option value="branquinha">Branquinha</option>
              <option value="cacimbinhas">Cacimbinhas</option>
              <option value="cajueiro">Cajueiro</option>
              <option value="campestre">Campestre</option>
              <option value="campo-alegre">Campo Alegre</option>
              <option value="campo-grande">Campo Grande</option>
              <option value="canapi">Canapi</option>
              <option value="capela">Capela</option>
              <option value="carneiros">Carneiros</option>
              <option value="cha-preta">Chã Preta</option>
              <option value="coite-do-noia">Coité do Nóia</option>
              <option value="colonia-leopoldina">Colônia Leopoldina</option>
              <option value="coqueiro-seco">Coqueiro Seco</option>
              <option value="coruripe">Coruripe</option>
              <option value="craibas">Craíbas</option>
              <option value="delmiro-gouveia">Delmiro Gouveia</option>
              <option value="dois-riachos">Dois Riachos</option>
              <option value="estrela-de-alagoas">Estrela de Alagoas</option>
              <option value="feira-grande">Feira Grande</option>
              <option value="feliz-deserto">Feliz Deserto</option>
              <option value="flexeiras">Flexeiras</option>
              <option value="girau-do-ponciano">Girau do Ponciano</option>
              <option value="ibateguara">Ibateguara</option>
              <option value="igaci">Igaci</option>
              <option value="igreja-nova">Igreja Nova</option>
              <option value="inhapi">Inhapi</option>
              <option value="jacare-dos-homens">Jacaré dos Homens</option>
              <option value="jacuipe">Jacuípe</option>
              <option value="japaratinga">Japaratinga</option>
              <option value="jaramataia">Jaramataia</option>
              <option value="jequia-da-praia">Jequiá da Praia</option>
              <option value="joaquim-gomes">Joaguim Gomes</option>
              <option value="jundia">Jundiá</option>
              <option value="junqueiro">Junqueiro</option>
              <option value="lagoa-da-canoa">Lagoa da Canoa</option>
              <option value="limoeiro-de-anadia">Limoeiro de Anadia</option>
              <option value="major-izidoro">Major Izidoro</option>
              <option value="mar-vermelho">Mar Vermelho</option>
              <option value="maragogi">Maragogi</option>
              <option value="maravilha">Maravilha</option>
              <option value="marechal-deodoro">Marechal Deodoro</option>
              <option value="maribondo">Maribondo</option>
              <option value="mata-grande">Mata Grande</option>
              <option value="messias">Messias</option>
              <option value="minador-do-negrao">Minador do Negrão</option>
              <option value="monteiropolis">Monteirópolis</option>
              <option value="murici">Murici</option>
              <option value="novo-lino">Novo Lino</option>
              <option value="olho-d agua-do-casado">
                Olho d&apos;Água do Casado
              </option>
              <option value="olho-d agua-grande">Olho d&apos;Água Grande</option>
              <option value="olho-d'agua-das-flores">
                Olho d&apos;Água das Flores
              </option>
              <option value="olivenca">Olivença</option>
              <option value="ouro-branco">Ouro Branco</option>
              <option value="palestina">Palestina</option>
              <option value="pao-de-acucar">Pão de Açúcar</option>
              <option value="pariconha">Pariconha</option>
              <option value="paulo-jacinto">Paulo Jacinto</option>
              <option value="piacabucu">Piaçabuçu</option>
              <option value="pilar">Pilar</option>
              <option value="pindoba">Pindoba</option>
              <option value="piranhas">Piranhas</option>
              <option value="poco-das-trincheiras">Poço das Trincheiras</option>
              <option value="porto-calvo">Porto Calvo</option>
              <option value="porto-de-pedras">Porto de Pedras</option>
              <option value="porto-real-do-colegio">Porto Real do Colégio</option>
              <option value="quebrangulo">Quebrângulo</option>
              <option value="rio-largo">Rio Largo</option>
              <option value="roteiro">Roteiro</option>
              <option value="santa-luzia-do-norte">Santa Luzia do Norte</option>
              <option value="santana-do-ipanema">Santana do Ipanema</option>
              <option value="santana-do-mundau">Santana do Mundaú</option>
              <option value="sao-jose-da-laje">São José da Laje</option>
              <option value="sao-jose-da-tapera">São José da Tapera</option>
              <option value="sao-luis-do-quitunde">São Luís do Quitunde</option>
              <option value="sao-miguel-dos-milagres">
                São Miguel dos Milagres
              </option>
              <option value="sao-sebastiao">São Sebastião</option>
              <option value="satuba">Satuba</option>
              <option value="senador-rui-palmeira">Senador Rui Palmeira</option>
              <option value="tanque-d arca">Tanque d&apos;Arca</option>
              <option value="taquarana">Taquarana</option>
              <option value="teotonio-vilela">Teotônio Vilela</option>
              <option value="traipu">Traipú</option>
              <option value="vicosa">Viçosa</option>
            </select>
            <Link href={{ pathname: "/municipio", query: { title: nomeMunicipio, municipio: municipio } }} className="bg-[#5AB290] max-lg:mx-auto rounded-[82px] text-white w-32 h-16 text-center pt-4 text-xl">
              <button>Ver</button>
            </Link>
          </div>
          <TotalAtos municipio={"geral"} />
          <CidadesNomeacao />
          <CidadesExoneracao />
        </Municipio>

        <Footer />
      </MainLayout>
    </main>
  );
}
