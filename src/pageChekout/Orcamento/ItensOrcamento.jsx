export default function ItensOrcamento({ item }) {
  return (
    <>
      <div class="md:hidden font-bold text-lg">Produto/Serviço</div>

      <div class="col-span-2 flex flex-col">
        <span className="text-gray-800">{item.nome}</span>
        <div className="text-gray-500">
          {Array.isArray(item.descricao) ? (
            item.descricao.map((desc, index) => (
              <span key={index} className="flex justify-center md:justify-start">
                - {desc}
              </span>
            ))
          ) : (
            <span>{item.descricao}</span>
          )}
        </div>
      </div>

      <div class="col-span-3 flex md:grid justify-center items-center md:grid-cols-3 pt-2 md:p-0 md:w-full pb-5">
        <div class="md:hidden font-bold text-md pl-4 pr-1">Qtd:</div>
        <div className="text-center justify-center items-center md:flex">
          {item.qtd.toFixed(2)}
        </div>

        <div className="md:hidden font-bold text-md pl-4 pr-1">Valor:</div>
        <div className="text-center justify-center items-center md:flex">
          R$ {item.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </div>

        <div class="md:hidden font-bold text-md pl-4 pr-1 ">Subtotal:</div>
        <div class="text-center justify-center items-center md:justify-end flex">
          R$ {(item.qtd * item.valor).toLocaleString('pt-BR',{ minimumFractionDigits: 2})}
        </div>

      </div>
    </>
  );
}
