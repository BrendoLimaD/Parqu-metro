class Parquimetro {
  constructor() {
    this.faixas = [
      { tempo: 120, preco: 3.00 },
      { tempo: 60, preco: 1.75 },
      { tempo: 30, preco: 1.00 }
    ];
  }
  calcular(valorPago) {
    if (isNaN(valorPago) || valorPago < 1.00) {
      return { erro: true, mensagem: "Valor insuficiente. Mínimo: R$1,00 para 30 minutos." };
    }

    for (let faixa of this.faixas) {
      if (valorPago >= faixa.preco) {
        const troco = valorPago - faixa.preco;
        return {
          erro: false,
          tempo: faixa.tempo,
          troco: troco.toFixed(2),
          mensagem: `Tempo concedido: ${faixa.tempo} minutos. Troco: R$${troco.toFixed(2)}.`
        };
      }
    }
  }
}
function inicializarParquimetro() {
  const parquimetro = new Parquimetro();

  document.getElementById("calcular").addEventListener("click", () => {
    const valor = parseFloat(document.getElementById("pagamento").value);
    const resultado = document.getElementById("resultado");

    const res = parquimetro.calcular(valor);
    resultado.textContent = res.mensagem;
  });
}
window.addEventListener("DOMContentLoaded", inicializarParquimetro);