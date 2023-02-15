import { createSignal, Setter, Accessor } from "solid-js";
import { i18nState } from "~/root";
import style from './Dropdown.module.scss';

type Props = {
    htmlFor?: string;
    valeurs: string[];
    valeur: Accessor<any>;
    setValeur: Setter<string>;
    traduction: boolean;
    text?:string;
}

export default function Dropdown(props: Props) {

    const [scroll, setScroll] = createSignal(false);

    return (
        <div class={style.dropdown} onMouseLeave={() => setScroll(false)}>
            <svg class={`${style.angleUp} ${scroll() ? style.angleUpFocus : undefined}`} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                <path d="m5.52 0 7.91 7.5-7.91 7.5-1.95-1.95 5.83-5.55-5.83-5.55z" />
            </svg>
            <input onClick={() => setScroll(!scroll())} type='button' id={props.htmlFor} name={props.htmlFor} value={`${props.traduction === true ? i18nState.t(props.valeur()) : props.valeur()} ${props.text ? i18nState.t(props.text) : ''}`} class={`${style.input}`} />
            <ul class={style.liste} style={scroll() ? { height: `${(props.valeurs.length >= 4 ? 4 : props.valeurs.length) * 40}px` } : { height: '0px', border: '0px solid #0000' }}>
                {
                    props.valeurs.map((e: string) => {
                        return (
                            <li class={`${style.item} ${e === props.valeur() ? style.itemSelected : undefined}`} onClick={() => { props.setValeur(e); setScroll(false) }}>
                                {props.traduction === true ? i18nState.t(e) : e} {props.text && i18nState.t(props.text)}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}