import { createSignal } from "solid-js";
import { A } from "solid-start";
import { useLocation } from "solid-start";
import style from './DropdownHeader.module.scss';
import { mouseOn, setMouseOn } from "../Header/Header";

type lien = {
    texte: string;
    href: string;
}

type Props = {
    titre: lien;
    liste: lien[];
}

export default function DropdownHeader(props: Props) {

    const [scroll, setScroll] = createSignal(false);

    return (
        <div class={`${style.dropdownHeader} ${`/${useLocation().pathname.split('/')[1]}` === props.titre.href ? style.dropdownHeaderActive : undefined}`} onMouseEnter={() => setScroll(true)} onMouseLeave={() => setScroll(false)} onClick={() => setScroll(!scroll())}>
            <A class={style.titre} href={props.liste[0].href}>
                {props.titre.texte}
            </A>
            <ul class={`${style.liste} ${mouseOn() ? style.listeVisible : undefined}`} onClick={() => setMouseOn(false)}>
                {
                    props.liste.map((key: lien) => {
                        return (
                            <A class={`${style.item} ${useLocation().pathname === key.href ? style.itemActive : undefined} ${scroll() ? style.itemTransition : undefined}`} href={key.href}>
                                {key.texte}
                            </A>
                        )
                    })
                }

            </ul>
        </div>
    )
}