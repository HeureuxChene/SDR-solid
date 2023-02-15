import style from './CarrouselPartenaires.module.scss';

type Props = {
    items: any;
}

const CarrouselPartenaires = (props: Props) => {

    return (
        <div class={style.carrousel}>
            <div
                class={style.slide}
                style={{
                    "grid-template-columns": `repeat(${Object.keys(props.items).length}, calc(100%/11))`,
                    animation: `${style.slidePartenaire} ${Object.keys(props.items).length * 3}s infinite linear`
                }}>
                {
                    Object.keys(props.items).map((key) => {
                        return (
                            <img class={style.partenaire} src={`/media/photo/partenaires/${key}.${props.items[key]}`} width='500' height='500' loading='lazy' />
                        )
                    })
                }
            </div>
            <div
                class={style.slide}
                style={{
                    "grid-template-columns": `repeat(${Object.keys(props.items).length}, calc(100%/11))`,
                    animation: `${style.slidePartenaireDeux} ${Object.keys(props.items).length * 3}s infinite linear`,
                    transform: 'translateX(100%)'
                }}>
                {
                    Object.keys(props.items).map((key) => {
                        return (
                            <img class={style.partenaire} src={`/media/photo/partenaires/${key}.${props.items[key]}`} width='500' height='500' loading='lazy' />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CarrouselPartenaires;