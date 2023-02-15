import { createSignal, onMount } from "solid-js";
import style from './DropdownLangue.module.scss';
import { mouseOn } from "../Header/Header";
import { i18nState, changeLanguage } from "~/root";

export default function DropdownLangue() {

    const [scroll, setScroll] = createSignal(false);

    return (
        <div id={style.dropdownHeader} onMouseEnter={() => setScroll(true)} onMouseLeave={() => setScroll(false)} onClick={() => setScroll(!scroll())}>
            <div id={style.titre}>
                <img class={style.flag} src={`/media/photo/logo/${i18nState.langueActuelle}-flag.svg`} />
            </div>
            <ul class={`${style.liste} ${mouseOn() ? style.listeVisible : undefined}`}>
                {
                    i18nState.languesDispos.map((key: string) => {
                        return (
                            <button class={`${style.item} ${scroll() ? style.itemTransition : undefined}`} onClick={() => changeLanguage(key)}>
                                <img class={style.flag} src={`/media/photo/logo/${key}-flag.svg`} />
                            </button>
                        )
                    })
                }

            </ul>
        </div>
    )
}