import { Header } from "../components/Header";
import Image from "next/image";
import logo from "../assets/logos/logocpb.png";
import Cordel from "../assets/images/Cordel.png";
import { useEffect, useState } from "react";
import getAllCards from "./api/faunadb";
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
              alt="Logo Carol Pansani Ballet"
            />
            <Image
              className="mb-10"
              src={Cordel}
              width={348}
              height={119}
              alt="Escrita Cordel"
            />
            <div>
              <span className="flex text-center text-white max-w-2xl">
                Inspirado no Clássico conto de Lewis Carrol - Alice no País das
                Maravilhas, o Carol Pansani Ballet apresenta uma versão
                abrasileirada ressaltando a importância da cultura nordestina, e
                trazendo o Cordel como objeto de estudo nas coreografias, teatro
                e artes plásticas.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full py-12 px-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl mb-8">Personagens</h2>
            <div className="flex flex-col text-center mb-6">
              <span>
                <span className="font-semibold">Maria - </span>
                Laura Emboaba de Lima Oliveira
              </span>
              <span>
                <span className="font-semibold">Coelho - </span>
                Manuella Pesse de Paula Ferreira
              </span>
              <span>
                <span className="font-semibold">Bonecos de Vitalino - </span>
                Emanuela Santos e Rafaela Santos
              </span>
              <span>
                <span className="font-semibold">Taturana - </span>
                Ludmila de Oliveira
              </span>
              <span>
                <span className="font-semibold">Lampião - </span>
                Fabio Vitor Miranda
              </span>
              <span>
                <span className="font-semibold">Lebre - </span>
                Eduarda Maciel de Souza
              </span>
              <span>
                <span className="font-semibold">Rato - </span>
                Vitória de Giuseppe
              </span>
              <span>
                <span className="font-semibold">Sanfoneiro - </span>
                Douglas Henrique
              </span>
              <span>
                <span className="font-semibold">Rainha Cabra Cabriola - </span>
                Daiane Cristina Moraes Beloto
              </span>
              <span>
                <span className="font-semibold">Narradora - </span>
                Rosana Alves
              </span>
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
            <span className="flex text-center max-w-2xl">
              Direção : Ana Carolina Pansani | Direção Artística e Teatral :
              Fabio Miranda e Ludmila de Oliveira | Coordenação e Produção :
              Silmara de Godoi | Roteiro : Bianca Almeida | Coreografias : Ana
              Carolina Pansani, Ludmila de Oliveira, Pietra Moroni, Mariana
              Fernandes e Natalia Stafane de Godoi Domingues, | Figurinos :
              Fábio Miranda | Costureira : Atêlie Ponto - Heloize Nunes |
              Cenografia : Mudde Vintage | Design de Luz e Microfones: Roberto
              Cilotti Jr | Trilha Sonora : Ditinho | Publicidade : Comunica
              Amanda | Folder Digital : LM Solution | Apoio Cultural : Benditta
              Pizza , Bio Arquitetura , Atêlie Ponto , Kozi Plast, Padoquinha
              Fermentação Natural, Dentistas Pedreira, Cinthia Murias Médica
              Veterinária Integrativa, LM Solution, Studio Personal, Mudde
              Vintage, Linda Rosa, Guadá. |
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl mb-8">Agradecimentos</h2>
            <span className="flex flex-col gap-4 text-center max-w-xl">
              Hoje comemoramos os seis anos da Carol Pansani Ballet e estar no
              palco nessa data é algo extremamente importante. Diariamente, nas
              aulas, ensinamos os alunos a superar suas inseguranças e o
              resultado sempre vem em forma de um respiro intenso e gratificante
              chamado ARTE. Essa ARTE é a que chega na plateia hoje!
              <br />
              Obrigada a cada pai que acredita e confia em nosso trabalho, aos
              apoiadores deste evento e aos colaboradores pelo poder de lapidar
              o coração da nossa escola: nossos alunos, que são incríveis e
              necessários para tudo isso faça sentido. Toda a minha reverência a
              cada um de vocês!
              <br />
              Que cada aplauso de hoje seja um motivo de apoiar e acreditar no
              poder que a ARTE tem em transformar nossas vidas.
              <span className="flex flex-col items center justify-center text-center">
                A Deus e minha família,
                <span>MUITO OBRIGADA!</span>
              </span>
              <span className="flex flex-col items center justify-center text-center font-semibold">
                ANA CAROLINA PANSANI
                <span className="font-normal">direção.</span>
              </span>
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
