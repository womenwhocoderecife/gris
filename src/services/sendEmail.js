import * as emailjs from "emailjs-com";

export default async function SendMail({
  nome,
  email,
  endereco,
  celular,
  atividades,
}) {
  let template_params = {
    to_email: "willanylp@gmail.com",
    from_name: nome,
    from_email: email,
    message_html: `${nome} deseja ser voluntário(a) 
      participando das seguintes atividades: \n ${atividades} \nO endereço é ${endereco} e o telefone é ${celular}`,
  };

  const service_id = "gmail";
  const template_id = "template_kdiodj50";
  const userId = "user_B5H22eJbnxPM9DpfADkVz";

  const response = await emailjs.send(
    service_id,
    template_id,
    template_params,
    userId
  );
  return response;
}
