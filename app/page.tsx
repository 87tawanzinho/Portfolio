import Image from "next/image";
import Header from "./components/Header";
import first from "@/public/first.png";
import tartooga from "@/public/tartooga.png";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Header />
      <div className="p-12">
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
            Javascript Nextjs NodeJs VueJs C# MAUI
          </p>
        </div>

        <div>
          <p className="mt-10 text-2xl text-gray-800">Projetos</p>
          <div className="p-4">
            <p>Links:</p>
            <div className="flex flex-col gap-2 ">
              <Link
                href="https://workout-inky-delta.vercel.app/"
                target="blank"
              >
                <p className="  text-gray-600 hover:text-gray-400 transition-all ">
                  Rotina - (Api Funcionando) - App de Rotina Full Stack
                </p>
              </Link>
              <Link
                href="https://blog-front-seven-lake.vercel.app/"
                target="blank"
              >
                <p className="  text-gray-600 hover:text-gray-400 transition-all ">
                  Blog Pessoal - (Api Funcionando) - App de Blog Full Stack
                </p>
              </Link>
              <Link href="https://valorant-design.vercel.app/" target="blank">
                <p className="  text-gray-600 hover:text-gray-400 transition-all ">
                  Client Valorant - App Front End
                </p>
              </Link>
              <Link
                href="https://87tawan.github.io/Hamburgueria/"
                target="blank"
              >
                <p className=" text-gray-600 hover:text-gray-400 transition-all ">
                  Chefia Burguer - App de Hamburgueria Front End
                </p>
              </Link>

              <Link
                href="https://tawanzinh9.github.io/WEBSITE-ZELDA-PC/"
                target="blank"
              >
                <p className=" text-gray-600 hover:text-gray-400 transition-all ">
                  Website Zelda - App Zelda - Front End
                </p>
              </Link>
              <Link href="https://tawanzinh9.github.io/lalaa/#/" target="blank">
                <p className=" text-gray-600 hover:text-gray-400 transition-all ">
                  Tartooga - (Api Parada) Full Stack
                </p>
              </Link>

              <Link href="https://camping-ruddy.vercel.app/" target="blank">
                <p className=" text-gray-600 hover:text-gray-400 transition-all ">
                  Camping Gnomo - Camping - (Api Funcionando) Full Stack
                </p>
              </Link>
            </div>
          </div>

          <p className="text-2xl text-gray-800 mt-10">Contato</p>
          <div className="p-4">
            <p>Email</p>
            <p className="p-4 text-gray-600">thiago_tawan@outlook.com</p>
            <p>Linkedin</p>
            <Link
              href="https://www.linkedin.com/in/thiago-tawan/"
              target="blank"
            >
              <p className="p-4 text-gray-600 hover:text-gray-400 transition-all">
                https://www.linkedin.com/in/thiago-tawan/
              </p>
            </Link>
            <p>GitHub</p>
            <Link href="https://github.com/87tawanzinho" target="blank">
              <p className="p-4 text-gray-600 hover:text-gray-400 transition-all">
                https://github.com/87tawanzinho
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
