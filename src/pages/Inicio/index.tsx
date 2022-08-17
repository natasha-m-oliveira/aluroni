import styles from "./Inicio.module.scss";
import stylesTema from "styles/Tema.module.scss";
import cardapio from "data/cardapio.json";
import nossaCasa from "assets/nossa_casa.png";
import { useNavigate } from "react-router-dom";
import { Prato } from "types/Prato";

export default function Inicio() {
  const navigate = useNavigate();
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);
  function redirecionarParaDetalhes(prato: Prato) {
    // O state é importante para trafegarmos mais dados
    // já o replace, segundo parâmetro da função, substitui a última rota do histórico
    // pela rota passada como primeiro parâmetro para a função.
    navigate(`/cardapio/prato/${prato.id}`, { state: { prato } });
  }
  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirecionarParaDetalhes(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do Aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}
