export default function TabelaHeader() {
  return (
    <div class="hidden md:grid font-bold mb-10 text-lg md:grid-cols-5">
      <div class="col-span-2 hidden md:inline">Produto/Serviço</div>
      <div class="text-center hidden md:inline">Qtd</div>
      <div class="text-center hidden md:inline">Valor</div>
      <div class="text-right hidden md:inline">Subtotal</div>
    </div>
  );
}
