import TabelaHeader from "./TabelaHeader"
import ItensOrcamento from "./ItensOrcamento";

export default function ChekoutOrcamento() {
  const itens = [
    {
      nome: "App",
      descricao: "PWA para Android, iOS, Windows e MacOS.",
      qtd: 1.00,
      valor: 5000.00
    },
    {
      nome: "Plataforma SaaS",
      descricao: [
        "Área restrita a usuários assinantes",
        "Acesso a funcionalidades de IA (Estrategista de marketing)",
        "Integração com TroiaChat (WhatsApp, Telegram)"
      ],
      qtd: 1.00,
      valor: 10000.00
    },
    {
      nome: "Website",
      descricao: [
        "Desenvolvimento de layout personalizado",
        "Criação de funcionalidades"
      ],
      qtd: 1.00,
      valor: 5000.00
    },
    {
      nome: "Integração",
      descricao: "Asaas: para recebimento de assinaturas recorrentes",
      qtd: 1.00,
      valor: 5000.00
    },
    {
      nome: "Integração",
      descricao: "OpenAI: para criação dos agentes inteligentes",
      qtd: 1.00,
      valor: 5000.00
    }
  ];

    return(
        <div class="bg-slate-100 bg-cover bg-center object-fit w-full min-h-screen shadow-xl">
          <div class="flex flex-col p-10 w-full min-h-screen justify-center">
            <div class="p-6 rounded-md">
              <h1 class="w-fit m-auto rounded-md mb-10 text-4xl font-bold text-gray-500">
                Orçamento
              </h1>

              <div class="grid grid-cols-1 text-center md:text-left md:grid-cols-none md:grid-rows-none">
                
                <TabelaHeader/>
                
                <div class="gap-5 md:grid md:grid-cols-5">
                  
                  {itens.map((item, index) => (
                    <ItensOrcamento key={index} item={item} />
                  ))}

                </div>
              </div>
            </div>
            
          </div>
        </div>
    )
}