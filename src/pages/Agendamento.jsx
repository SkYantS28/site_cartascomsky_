import "./Agendamento.css";
import { Link } from "react-router-dom";

export default function Agendamento() {

  const whatsappNumber = "5521978757381";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá Sky! Gostaria de agendar uma leitura."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="agendamento-page">

      <section className="page-header">
        <span>✦ AGENDE SUA LEITURA</span>

        <h1>
          Encontre o seu
          <strong> próximo passo</strong>
        </h1>

        <p>
          Escolha o método, envie seus dados e confirme
          o pagamento. Em breve você receberá sua leitura.
        </p>
      </section>

      <section className="booking-process">

        <div className="process-step">
          <span className="step-number">01</span>

          <h2>Escolha sua leitura</h2>

          <p>
            Acesse o catálogo, escolha o método e a quantidade
            de perguntas ou horas que você deseja contratar.
          </p>

          <Link to="/catalogo" className="link-button">
            Ver catálogo →
          </Link>
        </div>

        <div className="process-step">
          <span className="step-number">02</span>

          <h2>Envie seus dados</h2>

          <p>
            Entre em contato pelo WhatsApp e me informe qual
            método você escolheu ou suas perguntas.
          </p>

          <button
            className="link-button"
            onClick={handleWhatsAppClick}
          >
            Abrir WhatsApp →
          </button>
        </div>

        <div className="process-step">
          <span className="step-number">03</span>

          <h2>Confirme o pagamento</h2>

          <p>
            Realize o pagamento via PIX ou Cartão de Crédito e sua leitura será
            iniciada em até 48 horas.
          </p>
        </div>

      </section>

      <section className="payment-section">

        <span>✦ PAGAMENTO</span>

        <h2>
          Você tem duas
          <strong> formas de pagar</strong>
        </h2>

        <div className="payment-options">

          <div className="payment-card">
            <strong>Transferência PIX</strong>

            <p>
                Realize a transferência via PIX para:
                <span>cartascomsky@gmail.com</span>
                <br></br>
                Nome: Julia Ressurreicao Crizosti Baptista da Silva
                <br></br>
                Banco: Instituição Cloudwalk Ip Ltda
            </p>
          </div>

          <div className="payment-card">
            <strong>Cartão de Crédito</strong>

            <p>
              Entre em contato pelo WhatsApp para mais informações sobre o pagamento via cartão de crédito.
            </p>
          </div>

        </div>

      </section>

      <section className="cta-booking">

        <p>
          Dúvidas ou perguntas sobre o processo?
        </p>

        <button
          className="button-primary"
          onClick={handleWhatsAppClick}
        >
          Fale com Sky no WhatsApp
        </button>

      </section>

    </div>
  );
}
