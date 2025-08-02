// pages/ProjetoDetalhe.jsx
import { useParams } from "react-router-dom";
import projetosData from "../../data/profile.json"; // Exemplo se estiver usando um JSON

export default function ProjetoDetalhe() {
  const { id } = useParams();
  const projeto = projetosData.find((p) => p.id === id);

  if (!projeto) return <p>Projeto não encontrado.</p>;

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{projeto.nome}</h1>
      <img src={projeto.imagem} alt={projeto.nome} className="rounded-xl mb-4" />
      <p className="mb-4 text-lg text-zinc-700 dark:text-zinc-300">{projeto.descricao}</p>
      <ul className="flex flex-wrap gap-2 mb-4">
        {projeto.tecnologias.map((tec, index) => (
          <li key={index} className="bg-primaryLight dark:bg-secondaryDark/50 px-3 py-1 rounded-full text-sm">
            {tec}
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <a href={projeto.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Ver no GitHub
        </a>
        {projeto.demo && (
          <a href={projeto.demo} target="_blank" rel="noopener noreferrer" className="text-green-600 underline">
            Ver Demo
          </a>
        )}
      </div>
    </section>
  );
}
