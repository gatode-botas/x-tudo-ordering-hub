export const WHATSAPP_NUMBER = "5568999508822";

export function whatsappLink(message = "Olá, quero fazer um pedido") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
