import React, { useState } from "react";
import "./App.css";
import Formulario from "../formulario/formulario";
import Bttn from "../buttons/bttn";

export default function App() {
  const [personagens, setPersonagens] = useState([
    {
      id: 1,
      nome: "Jim Halpert",
      resumo:
        "O personagem protagoniza um dos melhores casais da TV! Apesar de sempre ter sido muito duro com Dwight, os momentos da dupla eram os melhores e proporcionavam muitas risadas. No entanto, ele nunca realmente cresceu ou evoluiu muito como personagem. Ainda assim, tinha as melhores reações da série.",
      imgUrl:
        "https://br.web.img3.acsta.net/r_1920_1080/newsv7/20/08/20/22/30/52710210.png",
      video: "https://www.youtube.com/watch?v=78SgHHz6kuQ",
    },
    {
      id: 2,
      nome: "Pam Beesly",
      resumo:
        "Pam percorreu um longo caminho em nove temporadas, de humilde recepcionista a representante de vendas e administradora do escritório, e os fãs adoraram ver esse crescimento ao longo dos anos. Fora isso, seu romance com Jim é um dos melhores da TV e, ainda mais incrivelmente, ela conseguiu encontrar um lado amável de Michael Scott.",
      imgUrl:
        "https://img.ibxk.com.br/2020/12/01/01183933685366.jpg?w=704&h=264&mode=crop&scale=both",
      video: "https://www.youtube.com/watch?v=6jJ5SOtuMsw",
    },
    {
      id: 3,
      nome: "Michael Scott",
      resumo:
        "Steve Carell trouxe para as telinhas o modelo de um chefe comicamente inapto e com uma fragilidade pungente. Michael costumava ser ingênuo e sua necessidade insondável de ser amado o humanizou. O que acontece é que mesmo quando ele ia longe demais, não podíamos ficar bravos com ele. O desempenho de Carell é um dos melhores da história da comédia de TV e fez de Michael não apenas o melhor personagem do Office, mas um dos melhores personagens da TV de todos os tempos.",
      imgUrl:
        "https://br.web.img2.acsta.net/r_1920_1080/newsv7/20/08/20/22/47/24569250.png",
      video: "https://www.youtube.com/watch?v=IBJJrZ5LAVQ",
    },
    {
      id: 4,
      nome: "Dwight Schrute",
      resumo:
        "Apesar de parecer familiar, Dwight é totalmente único. No personagem, vemos o colega de trabalho sem humor e 'puxa saco'. Rainn Wilson criou um personagem com intensidade de fúria nerd, tornando Dwight o alvo perfeito para as travessuras juvenis de Jim. Com seu amor apaixonado por Angela, sua devoção sem fim a Michael e sua surpreendente afeição por Pam, Dwight se tornou um dos favoritos de muitos fãs da série.",
      imgUrl:
        "https://br.web.img3.acsta.net/r_1920_1080/newsv7/20/08/20/22/44/03441350.jpg",
      video: "https://www.youtube.com/watch?v=GU2W_nlijx0",
    },
  ]);
  const [editando, setEditando] = useState(false);

  const handleDelete = (id) => {
    console.log(handleDelete);
    setPersonagens(personagens.filter((e) => id != e.id));
  };
  return (
    <div className="App">
      <Formulario
        label1="Nome"
        label2="Resumo"
        label3="Imagem"
        label4="Video"
        personagens={personagens}
        setPersonagens={setPersonagens}
      />
      <div className="container-card">
        <ul className="container-card-ul">
          {personagens.map((f) => (
            <li key={f.id} className="container-card-lista-personagens">
              <div>
                <h2 className="personagem">{f.nome}</h2>
                <p className="resumoPersonagem">{f.resumo}</p>
              </div>
              <div>
                <img src={f.imgUrl} alt={f.nome} className= "container-card-img" />
                <div className="container-card-bttn">
                  <Bttn texto="Ver personagem" href={f.video} />
                  <Bttn texto="Excluir" onClick={() => handleDelete(f.id)} />
                  <Bttn texto="Editar"  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
}
