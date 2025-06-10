import InputFlex from "../components/InputFlex";
import Subtitle from "../components/Subtitle";
import { useState } from "react";
import qrcode from "../assets/qrcode.png";

export default function ChekoutForms() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  return (
    <div>
      <div class="p-8 rounded-lg shadow-lg flex justify-center items-center h-screen">
        <form action="/payment/checkout/4/credit-card/monthly" class="submit">
          <div class="flex flex-col space-y-8 p-6 lg:p-10">
            <div class="flex flex-col space-y-4">
              <Subtitle title="Informações pessoais" />

              <div class="flex flex-col space-y-2">
                <div class="flex flex-col md:flex-row items-center w-full gap-2">
                  <InputFlex
                    title="Nome Completo"
                    type="text"
                    name="perfil"
                    svg="profile"
                  />

                  <InputFlex
                    title="CPF"
                    type="text"
                    name="cpf"
                    svg="profile"
                    sizeMD
                    length="14"
                  />
                </div>

                <div class="flex flex-col md:flex-row items-center w-full gap-2">
                  <InputFlex
                    title="E-mail"
                    type="text"
                    name="email"
                    svg="email"
                  />

                  <InputFlex
                    title="Celular"
                    type="text"
                    name="phone"
                    svg="phone"
                    sizeMD
                    length="15"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-col space-y-4">
              <Subtitle title="Endereço" />

              <div class="flex flex-col lg:flex-row gap-2 w-full">
                <InputFlex
                  title="CEP"
                  type="text"
                  name="cep"
                  svg="profile"
                  sizeMD
                  length="9"
                />
                <InputFlex
                  title="Endereço"
                  type="text"
                  name="adress"
                  svg="profile"
                />
                <InputFlex
                  title="Número"
                  type="text"
                  name="number"
                  svg="profile"
                  sizeMD
                />
              </div>
            </div>

            <div class="flex flex-col space-y-4">
              <Subtitle title="Método de pagamento" />
              <div class="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit-card"
                    checked={paymentMethod === "credit-card"}
                    onChange={() => setPaymentMethod("credit-card")}
                  />
                  Cartão de Crédito
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="pix"
                    checked={paymentMethod === "pix"}
                    onChange={() => setPaymentMethod("pix")}
                  />
                  PIX
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="boleto"
                    checked={paymentMethod === "boleto"}
                    onChange={() => setPaymentMethod("boleto")}
                  />
                  Boleto
                </label>
              </div>

              {paymentMethod === "credit-card" && (
                <div className="flex flex-col space-y-4">
                  <Subtitle title="Informações do cartão" />
                  <div class="flex flex-col items-center justify-start gap-2 w-full">
                    <InputFlex
                      title="Nome impresso no cartão"
                      type="text"
                      name="card_name"
                      svg="info"
                    />
                    <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 gap-2 lg:gap-1 w-full">
                      <InputFlex
                        title="Número do cartão"
                        type="text"
                        name="card_number"
                        svg="card"
                        length="19"
                      />
                      <InputFlex
                        title="Validade"
                        type="text"
                        name="validade"
                        svg="card"
                        sizeMD
                        length="7"
                      />
                      <InputFlex
                        title="CVV"
                        type="text"
                        name="cvv"
                        svg="card"
                        sizeMD
                        length="3"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "pix" && (
                <div className="flex flex-col space-y-4">
                  <Subtitle title="Pagamento via PIX"/>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div >
                      <p>Por chave</p>
                      <InputFlex
                        title="Chave PIX"
                        type="text"
                        name="pix_key"
                        svg="info"
                        sizeMD
                        length="36"
                      />
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <p>Por QRCode</p>
                      <img src={qrcode} alt="qrcode_image" />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "boleto" && (
                <div className="flex flex-col space-y-4">
                  <Subtitle title="Pagamento via Boleto" />
                  <p>
                    Após a confirmação do pagamento, você receberá o boleto por
                    e-mail.
                  </p>
                </div>
              )}
              
            </div>

            <div class="flex flex-col space-y-4">
              <div>
                <button
                  type="submit"
                  class="bg-[#007BFF] hover:bg-[#38BDF8] h-12 w-full rounded-md text-white font-bold flex items-center justify-center transitions-color duration-300"
                >
                  Finalizar pagamento
                </button>
              </div>

              <div class="flex flex-col space-y-4">
                <span class="text-xs">
                  Ao confirmar o pagamento, você permite que a TROIACHAT cobre
                  seu cartão para este pagamento e pagamentos futuros, de acordo
                  com os termos.
                </span>
                <span class="text-xs">
                  Ao informar seus dados e seguir para a próxima etapa, você
                  automaticamente concorda com nossa política de privacidade.
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
