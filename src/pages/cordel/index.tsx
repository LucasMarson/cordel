import { Header } from "../../components/Header";
import Image from "next/image";
import logo from "../../assets/logos/logocpb.png";
import Cordel from "../../assets/images/Cordel.png";
import { useEffect, useState } from "react";
import getAllCards from "../api/faunadb";
import { Footer } from "@/components/Footer";

interface Card {
  title: string;
  content: string;
}

interface GetAllCardsResponse {
  data: Array<Card>;
}

export default function Home() {
  const [cards, setCards] = useState<Array<Card>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllCards();
        if (result?.data) {
          setCards(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex w-full flex-col">
        <Header />
        <div className="h-full px-4 bg-[#1F545A] relative z-10">
          <div
            className="flex h-full flex-col mt-24 py-16 items-center justify-center bg-no-repeat bg-contain bg-bottom"
            style={{
              backgroundImage: "url(/Vector.png)",
            }}
          >
            <Image
              className="mb-6"
              src={logo}
              width={247}
              height={247}
              alt=""
            />
            <Image
              className="mb-10"
              src={Cordel}
              width={348}
              height={119}
              alt=""
            />
            <div>
              <span className="flex text-center text-white max-w-2xl">
                Incoirado no Clascico conto de ewis carro - Alice no Paisoas
                Maravilhas o Carol Pansani Ballet apresenta uma versão
                abrasileirada ressaltando a importancia da cultura nordestina e
                trazendo o corde como opleto de estudo nas coreografias, teatro
                e artes plásticas.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full py-12 px-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl mb-8">Personagens</h2>
            <div className="flex flex-col text-center mb-6">
              <span>Maria - Laura Emboaba de Lima Oliveira</span>
              <span>Coelho - Manuella Pesse de Paula Ferreira</span>
              <span>Bonecos de Carvaru - Emanuela Santos e Rafaela Santos</span>
              <span>Taturana - Ludmila de Oliveira </span>
              <span>Lampião - Fabio Vitor Miranda</span>
              <span>Lebre - Eduarda Maciel de Souza</span>
              <span>Rato - Vitória de Giuseppe</span>
              <span>Sanfoneiro - Douglas Henrique</span>
              <span>Rainha Cabra Cabriola - Daiane Cristina Moraes Beloto</span>
              <span>Narradora -</span>
            </div>
            <div>
              <span className="flex text-center text-xs max-w-md">
                Participação Especial: Corpo da Taturana* - Ashanti Lindiwe
                Salviano dos Santos Silva, Maria Carolina Oliveira Justo,
                Patricia Panigassi Vicentini, Tálita Panegassi Nascimento e
                Yasmin Jesus de Melo
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl mt-8">Coreografias</h2>
            <div className="flex flex-col mt-8 gap-6">
              {cards.map((card, i) => {
                return (
                  <div key={i} className="w-full max-w-lg">
                    <div className="flex flex-col gap-2 text-center">
                      <h2 className="text-3xl">{card.title}</h2>
                      <span>{card.content}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full py-4 px-4 gap-8">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl mb-8">Ficha Tecnica</h2>
            <span className="flex text-center max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              similique necessitatibus aspernatur deserunt eos animi adipisci
              iure eaque error. Impedit alias unde adipisci explicabo ipsum cum
              id quas magnam nisi.
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl mb-8">Agradecimentos</h2>
            <span className="flex text-center max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              similique necessitatibus aspernatur deserunt eos animi adipisci
              iure eaque error. Impedit alias unde adipisci explicabo ipsum cum
              id quas magnam nisi.
            </span>
          </div>
        </div>

        <div className="w-full h-full">
          <div
            className="w-full h-[260px] bg-center bg-cover sm:bg-contain "
            style={{
              backgroundImage: "url(/fundo.png)",
            }}
          ></div>
        </div>
        <Footer />
      </div>
    </>
  );
}
