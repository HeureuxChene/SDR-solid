import { createEffect, onMount, onCleanup } from 'solid-js'
import { useLocation } from 'solid-start'
import style from './Parralax.module.scss'

export default function Parralax(props: any) {

    createEffect(() => {
        useLocation().pathname
        // document.getElementById('parralaxHeight')!.style.height = `${document.body.clientHeight}px`;
    });

    const handleParralax = () => {
        document.getElementById(style.parralax)!.scrollTop = window.scrollY;
    };

    onMount(() => {
        addEventListener('scroll', handleParralax);
    });

    onCleanup(() => {
        removeEventListener('scroll', handleParralax);
    });

    return (
        <div id={style.parralax}>
            <div id='parralaxHeight' class={style.parralaxHeight}>
            </div>
            {props.children}
        </div>
    )
}