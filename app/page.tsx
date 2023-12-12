import Image from "next/image";
import Header from "./components/Header";
import first from "@/public/first.png";
export default function Home() {
  return (
    <>
      <Header />
      <div className="p-16">
        <p className="text-4xl text-gray-800">Olá 🖐</p>
        <p className="text-4xl text-gray-800 mt-2">Eu sou Thiago Tawan.</p>

        <div className="mt-10">
          <p className="text-2xl text-gray-800">Sobre mim</p>
          <p className="max-w-2xl border-l-4 border-gray-700 p-2 ">
            Entrei no ramo da programação em 2021 e desenvolvi diversos
            projetos, incluindo uma rede social. com mais de 200 usuários
            ativos. Gosto de desenvolver aplicações com interfaces bonitas,
            fluidas e harmônicas.
          </p>
          <p className="italic  mt-4 text-gray-600 text-md">
            "Codificando o amanhã, um byte de cada vez."
          </p>
        </div>

        <div>
          <p className="mt-10 text-2xl text-gray-800">Projetos</p>
          <div className="flex flex-wrap gap-4">
            <div className="">
              <Image src={first} alt="first" className="rounded" />
              <p className="text-gray-500 text-center max-w-sm mt-4">
                WebApp de rotina, para ajudar a organizar suas metas de vida e
                suas tarefas.
              </p>
            </div>
            <div className="">
              <Image src={first} alt="first" className="rounded" />
              <p className="text-gray-500 text-center max-w-sm mt-4">
                WebApp de rotina, para ajudar a organizar suas metas de vida e
                suas tarefas.
              </p>
            </div>
            <div className=" ">
              <Image src={first} alt="first" className="rounded" />
              <p className="text-gray-500 text-center max-w-sm mt-4">
                WebApp de rotina, para ajudar a organizar suas metas de vida e
                suas tarefas.
              </p>
            </div>

            <div className="">
              <Image src={first} alt="first" className="rounded" />
              <p className="text-gray-500 text-center max-w-sm mt-4">
                WebApp de rotina, para ajudar a organizar suas metas de vida e
                suas tarefas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
