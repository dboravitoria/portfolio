import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import Label from "./elements/Label";
import Title from "./elements/Title";
import Input from "./elements/Input";
import Button from "./elements/Button";
import WrapperBlur from "./elements/WrapperBlur";


export default function Main() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    emailjs.send(
        "service_8kg1ltj",
        "template_lvpftve",
        {
            user_name: form.nome,
            user_email: form.email,
            message: form.mensagem,
        },
        "AwQOMby3IGkWMjOyj"
        )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Mensagem enviada com sucesso!");
          setForm({ nome: "", email: "", mensagem: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Erro ao enviar a mensagem.");
        }
      );
  };

  return (
    <>
      <Title title={"Vamos construir algo incrível juntos?"} />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <section className="mt-52 sm:-mt-20 md:mt-10 lg:mt-10 p-2">
          <section className="row justify-content-center">
            <section className="col-12 col-sm-10 col-md-5 text-center sm:mt-72 md:mt-48 mb-24">
              <WrapperBlur>
                
                <h2 className="text-secondaryDark dark:text-white/90 mb-3 font-secondary font-semibold text-lg">
                  Preencha o formulário abaixo para me enviar uma mensagem!
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2 text-left">
                  <div>
                    <Label title="Nome" />
                    <Input
                      name="nome"
                      type="text"
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Digite seu nome..."
                    />
                  </div>

                  <div>
                    <Label title="E-mail" />
                    <Input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Digite seu e-mail..."
                    />
                  </div>

                  <div>
                    <Label title="Mensagem" />
                   <textarea
                        name="mensagem"
                        type="textarea"
                        value={form.mensagem}
                        onChange={handleChange}
                        placeholder="Digite sua mensagem..."
                        className="rounded-xl ml-2 backdrop-blur-md 
                        p-2 h-40 shadow-lg drop-shadow-custom mb-2 text-secondaryDark dark:text-white block mx-auto
                        dark:shadow-white/10 dark:bg-white/5 border-2 border-secondaryDark/10
                        shadow-secondaryDark bg-secondaryDark/10 w-3/4"
                        />
                  </div>

                  <Button title="Enviar" />
                  <p className="font-primary dark:text-white/90 text-secondaryDark text-center mt-2">{status}</p>
                </form>
              </WrapperBlur>
            </section>
          </section>
        </section>
      </motion.div>
    </>
  );
}
