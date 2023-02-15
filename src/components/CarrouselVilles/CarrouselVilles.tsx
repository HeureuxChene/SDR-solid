import style from './CarrouselVilles.module.scss';
import { i18nState } from "~/root";
import { A } from 'solid-start';

const CarrouselVilles = (props: any) => {

  return (
    <div class={style.carrousel}>
      <div class={style.slide}
        style={{
          "grid-template-columns": `repeat(${Object.keys(props.items).length}, calc(160px * 1.51 + 10px)`,
          animation: `${style.slidePartenaire} ${(Object.keys(props.items).length * 3)}s infinite linear`
        }}>
        {
          Object.keys(props.items).map((key: string) => {
            return (
              <A style={{ cursor: 'default' }} href={`reservation/classique?destination=${props.items[key].destination}`}>
                <div class={style.briqueVille}>
                  <div class={style.briqueVilleContainer}>
                    <img class={style.briqueVilleImage} src={`/media/photo/home/villes/${key}.jpg`} width='974' height='645' loading='lazy' />
                  </div>
                  <h3 class={style.briqueVilleH3}>
                    {props.items[key].titre}
                  </h3>
                </div>
              </A>
            )
          })
        }
      </div>
      <div class={style.slide}
        style={{
          "grid-template-columns": `repeat(${Object.keys(props.items).length}, calc(160px * 1.51 + 10px)`,
          animation: `${style.slidePartenaireDeux} ${(Object.keys(props.items).length * 3)}s infinite linear`,
          transform: 'translateX(100%)'
        }}>
        {
          Object.keys(props.items).map((key: string) => {
            return (
              <A style={{ cursor: 'default' }} href={`reservation/classique?destination=${props.items[key].destination}`}>
                <div class={style.briqueVille}>
                  <div class={style.briqueVilleContainer}>
                    <img class={style.briqueVilleImage} src={`/media/photo/home/villes/${key}.jpg`} width='974' height='645' loading='lazy' />
                  </div>
                  <h3 class={style.briqueVilleH3}>
                    {props.items[key].titre}
                  </h3>
                </div>
              </A>
            )
          })
        }
      </div>
    </div>
  )
}

export default CarrouselVilles;