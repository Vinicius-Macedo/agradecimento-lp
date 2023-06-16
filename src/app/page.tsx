import { DefaultMarginSection } from "@/components/DefaultMarginSection";
import ItemWithIcon from "@/components/ItemWithIcon";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="pt-16 sm:pt-32 px-8 lg:mb-16">
        <div className="flex justify-center items-center flex-col gap-4 sm:gap-16">
          <div>
            <p className="text-center text-white title font-bold max-w-[650px]">
              SEU MATERIAL VAI CHEGAR NO SEU E-MAIL!
            </p>
            <p className="text-white text-center">
              Olhe também na sua caixa de Spam!
            </p>
          </div>

          <div className="flex gap-8 items-center">
            <Image
              src={"/arrow.svg"}
              alt={""}
              width={54}
              height={54}
              className="object-contain rotate-90"
            />
            <p className="md:bg-[#34D949] px-8 py-8 rounded-full text-white font-bold text-center text-[20px]">
              TEMOS PRESENTES QUE VOCÊ TAMBÉM VAI GOSTAR!
            </p>
            <Image
              src={"/arrow.svg"}
              alt={""}
              width={54}
              height={54}
              className="object-contain w-27 h-27 rotate-90"
            />
          </div>
        </div>
      </header>
      <main>
        <DefaultMarginSection
          className="lg:grid lg:grid-cols-2"
          hasNoEffect={true}
        >
          <Image
            src={"/fundo-capa.jpg"}
            alt={""}
            className="absolute left-0 top-0 w-full h-full object-cover -z-10"
            width={1366}
            height={640}
          />
          <Image
            src={"/financas-couch.png"}
            alt={""}
            width={444}
            height={651}
            className="hidden lg:block lg:h-auto lg:max-w-none lg:absolute lg:bottom-0 lg:-left-[30px] lg:w-[500px] xl:left-[120px] 3xl:left-[10vw]"
          />
          <div className="decoration-hidden"></div>
          <div className="flex flex-col gap-16 lg:gap-8 w-full justify-end items-center">
            <h2 className="title text-white text-center font-bold">
              POUCAS VAGAS LIBERADAS!
            </h2>
            <p className="semi-title text-center text-semiwhite">
              AGENDE AGORA SUA CONVERSA DE INVESTIMENTOS COM ESPECIALISTAS!
            </p>
            <div className="grid grid-cols-2 gap-4 items-center lg:flex w-full max-w-[500px]">
              <Image
                src={"/investimentos-retorno.png"}
                alt={""}
                width={165}
                height={125}
                className="object-contain w-full h-auto"
              />
              <div>
                <p className="text-white font-bold">
                  TENHA ACESSO AOS MELHORES INVESTIMENTOS PARA SEUS OBJETIVOS
                  AGORA!
                </p>
                <p className="text-[#34D949] font-bold">SEM CUSTOS!</p>
              </div>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=5511992332308&text=Ol%C3%A1!%20Vim%20pelo%20agendamento%20com%20especialista%20de%20investimento"
              target="_blank"
              className="flex gap-4 items-center bg-[#20AB4B] py-8 px-10 rounded-full w-full max-w-[350px] justify-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 object-contain"
              >
                <path
                  fill="#fff"
                  d="M13.641 2.325c-1.497-1.5-3.488-2.325-5.609-2.325-4.369 0-7.925 3.556-7.925 7.928 0 1.397 0.366 2.763 1.059 3.963l-1.125 4.109 4.203-1.103c1.159 0.631 2.463 0.966 3.787 0.966h0.003c0 0 0 0 0 0 4.369 0 7.928-3.556 7.928-7.928 0-2.119-0.825-4.109-2.322-5.609zM8.034 14.525v0c-1.184 0-2.344-0.319-3.356-0.919l-0.241-0.144-2.494 0.653 0.666-2.431-0.156-0.25c-0.663-1.047-1.009-2.259-1.009-3.506 0-3.634 2.956-6.591 6.594-6.591 1.759 0 3.416 0.688 4.659 1.931 1.244 1.247 1.928 2.9 1.928 4.662-0.003 3.637-2.959 6.594-6.591 6.594zM11.647 9.588c-0.197-0.1-1.172-0.578-1.353-0.644s-0.313-0.1-0.447 0.1c-0.131 0.197-0.512 0.644-0.628 0.778-0.116 0.131-0.231 0.15-0.428 0.050s-0.838-0.309-1.594-0.984c-0.588-0.525-0.987-1.175-1.103-1.372s-0.013-0.306 0.088-0.403c0.091-0.088 0.197-0.231 0.297-0.347s0.131-0.197 0.197-0.331c0.066-0.131 0.034-0.247-0.016-0.347s-0.447-1.075-0.609-1.472c-0.159-0.388-0.325-0.334-0.447-0.341-0.116-0.006-0.247-0.006-0.378-0.006s-0.347 0.050-0.528 0.247c-0.181 0.197-0.694 0.678-0.694 1.653s0.709 1.916 0.809 2.050c0.1 0.131 1.397 2.134 3.384 2.991 0.472 0.203 0.841 0.325 1.128 0.419 0.475 0.15 0.906 0.128 1.247 0.078 0.381-0.056 1.172-0.478 1.338-0.941s0.166-0.859 0.116-0.941c-0.047-0.088-0.178-0.137-0.378-0.238z"
                ></path>
              </svg>
              <span className="text-white font-bold">
                FALAR AGORA COM ESPECIALISTA!
              </span>
            </a>
            <div className="grid grid-cols-2 gap-4 items-center lg:flex w-full max-w-[500px]">
              <Image
                src={"/mobile-monitor-apps.png"}
                alt={""}
                width={200}
                height={100.26}
                className="object-contain w-full h-auto"
              />
              <p className="text-white font-bold text-[20px]">
                BÔNUS: TENHA ACESSO A RELATÓRIOS E INFORMAÇÕES DE MERCADO
              </p>
            </div>
          </div>
        </DefaultMarginSection>
        <DefaultMarginSection
          hasNoEffect={true}
          hasNoMarginBottom
          hasNoMarginTop
        >
          <div className="lg:py-16">
            <p className="semi-title text-[#FFA500] text-center font-bold">
              DE R$ 29,90 POR MÊS POR R$ 11,60
            </p>
            <div className="flex flex-col gap-8 justify-center items-center">
              <div className="flex gap-8 items-end lg:gap-24">
                <p className="text-white semi-title font-bold w-auto">
                  <span className="title">60%</span>
                  DE <br />
                  DESCONTO
                </p>
                <p className="semi-title font-bold text-white text-center">
                  VAGAS
                  <br />
                  LIMITADAS
                </p>
              </div>

              <div>
                <a
                  className="bg-[#FFA500] font-bold text-center text-[18px] px-8 py-4 rounded block max-w-[250px]"
                  href="https://pay.hotmart.com/A78289712N?bid=1677160401379"
                >
                  QUERO ASSINAR AGORA
                </a>
              </div>
            </div>
          </div>
        </DefaultMarginSection>
        <DefaultMarginSection
          hasNoEffect={true}
          styles={{ backgroundImage: "url('/hero-background.webp')" }}
          containerClassName={"bg-cover bg-no-repeat overflow-x-hidden"}
          className={"flex flex-col items-center lg:items-start"}
        >
          <div className="bg-dark w-full h-full absolute left-0 top-0 opacity-[80%]"></div>
          <Image
            src={"/happy-men-phone.webp"}
            alt={"Homem feliz segurando celular"}
            className={
              "w-[388px]  h-[352px]  sm:w-[453px] sm:h-[554px]  object-contain lg:h-auto lg:max-w-none lg:absolute lg:bottom-0 lg:-right-[30px] lg:w-[388px] xl:right-[60px] 3xl:right-[10vw]"
            }
            // style={{ width: "100%", height: "100%" }}
            width={453}
            height={591}
          />
          <div className="max-w-[730px] flex flex-col items-center lg:items-start gap-8">
            <h1 className="title font-bold text-white text-center lg:text-left ">
              RECEBA PRIMEIRO AS <span className="text-orange">NOTÍCIAS</span> E{" "}
              <span className="text-orange">ANÁLISES</span> QUE VÃO IMPACTAR O
              MERCADO
            </h1>
            <p className="semi-title text-white text-center lg:text-left">
              TOME AS MELHORES DECISÕES PARA OS SEUS INVESTIMENTOS
            </p>
            <a
              className="semi-title text-dark bg-orange font-bold py-6 px-16 rounded"
              href="https://pay.hotmart.com/A78289712N?bid=1677160401379"
              target="_blank"
              rel="noreferrer"
            >
              ASSINE AGORA
            </a>
          </div>
          <Image
            className="absolute left-0 bottom-0 z-[1] object-contain"
            src={"/bell-icon.webp"}
            alt={"Icone de sino"}
            width={100}
            height={80}
          />
        </DefaultMarginSection>
        <DefaultMarginSection
          hasNoEffect={true}
          containerClassName={"bg-cover bg-no-repeat"}
          styles={{
            backgroundImage: "url('/square-background-repeat.webp')",
          }}
          className={
            "flex flex-col gap-16 items-center lg:flex-row lg:justify-between"
          }
        >
          <Image
            src={"/graphic-illustration.webp"}
            alt={""}
            style={{ width: "auto", height: "auto" }}
            width={1072}
            height={474}
            className="absolute left-0 top-0 object-contain z-[1]"
          />
          <Image
            src={"/notification-alert.webp"}
            className={"object-contain relative"}
            alt={""}
            width={305}
            height={59}
          />
          <div className="p-8 flex flex-col gap-8 bg-dark max-w-[525px] relative">
            <p className="bg-orange text-white font-bold py-4 px-16 rounded-full flex w-full max-w-[500px] justify-center items-center semi-title">
              O QUE VOCÊ TERÁ ACESSO?
            </p>
            <div>
              <ItemWithIcon
                title={"Notícias Em Tempo Real"}
                description={
                  "Cobertura especializada do pulso do mercado financeiro, minuto a minuto, da abertura ao fechamento da Bolsa de Valores."
                }
              />
              <ItemWithIcon
                title={"Análises Do Mercado"}
                description={
                  "Análises de mercado e recomendações de investimento, com preço-alvo, de diferentes casas de análise e research de bancos."
                }
              />
              <ItemWithIcon
                title={"Informações Que Realmente Importam"}
                description={
                  "Entenda a movimentação diária de cada setor na Bolsa."
                }
              />
              <ItemWithIcon
                title={"Acesso a Ferramentas Essenciais"}
                description={"Acesse ferramentas exclusivas"}
              />
            </div>
          </div>
        </DefaultMarginSection>
        <DefaultMarginSection
          hasNoEffect={true}
          containerClassName="bg-[#FFA500]"
          hasNoMarginTop
          hasNoMarginBottom
        >
          <div className="flex flex-col gap-4 items-center lg:py-16">
            <p className="text">a oferta acaba em:</p>
            <p className="title font-bold">Termina em 7 dias</p>
            <a
              href="https://pay.hotmart.com/A78289712N?bid=1677160401379"
              className="text-[16px] text-center sm:text-[22px] border-2 border-solid border-dark px-6 sm:px-12 py-6 font-bold rounded-full"
            >
              GARANTIR MEU ACESSO COM DESCONTO!
            </a>
          </div>
        </DefaultMarginSection>
      </main>
      <footer className="bg-[#1F1F1C]">
        <div className="px-8 py-32 sm:px-16 md:py-32 xl:px-0 xl:w-[1110px] xl:m-auto flex flex-wrap-reverse justify-center md:justify-between gap-16 ">
          <div className="flex flex-col gap-16">
            <p className="font-bold text-orange">FALE CONOSCO</p>
            <div>
              <p className="text-white">
                Instagram:{" "}
                <a
                  className="underline"
                  href="https://www.instagram.com/monitordomercado/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  @monitordomercado
                </a>
              </p>
              <p className="text-white">
                Site:{" "}
                <a
                  className="underline"
                  href="https://monitordomercado.com.br/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  monitordomercado.com.br/
                </a>
              </p>
            </div>
            <p className="font-bold text-orange">NOSSO ENDEREÇO</p>
            <div>
              <p className="text-white">
                Av. Dr. Cardoso de Melo, 1308 - Vila Olímpia
                <br /> São Paulo - SP, 04548-004
              </p>
            </div>
          </div>
          <Image
            src={"/monitor-logo.webp"}
            alt={"Logo monitor do mercado"}
            style={{ width: "auto", height: "auto", objectFit: "contain" }}
            className={"object-contain w-80 lg:w-[370px]"}
            width={370}
            height={92}
          />
        </div>
      </footer>
    </>
  );
}
