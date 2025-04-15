const phoneNumber = "+11111";

export const redirectWhatsApp = () => {
  const cleanedNumber = phoneNumber?.replace(/[^\d+]/g, "");
  const whatsappLink = `https://wa.me/${cleanedNumber}`;
  console.log("Link generado:", whatsappLink);
  window.open(whatsappLink, "_blank");
};

export const redirectFacebook = () => {
  const facebookLink = "https://www.facebook.com/?locale=es_LA";
  window.open(facebookLink, "_blank");
};

export const redirectInstagram = () => {
  const instagramLink = "https://www.instagram.com/";
  window.open(instagramLink, "_blank");
};
