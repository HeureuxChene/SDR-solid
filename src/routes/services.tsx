import { Outlet, A, useLocation  } from 'solid-start';
import { JSX } from 'solid-js';
import { i18nState } from "~/root";
import CarrouselPartenaires from '~/components/CarrouselPartenaires/CarrouselPartenaires';
import partenaires from '~/json/partenaires.json';
import Parralax from '~/components/Parralax/Parralax';
import style from '~/style/layout.module.scss';

type lien = {
    texte: string;
    href: string;
}

type Props = {
    children: JSX.Element;
    liens: lien[];
}

export default function ServicesLayout() {

    return (
        <>
            <Parralax>
                <img id='homeBackground' src='/media/photo/services/antibes-baie.jpg' loading='lazy' />
            </Parralax>
            <section id='home'>
                <h1 id='homeH1'>
                    {i18nState.t('services-header-title')}
                </h1>
                <h2 id='homeH2'>
                    {i18nState.t('services-header-subtitle')}
                </h2>

            </section>
            <div id={style.nav}>
                <A class={`${style.link} ${useLocation().pathname === '/services/transfer' ? style.linkActive : undefined}`} href="/services/transfer" noScroll={true}>
                    {i18nState.t('navlink-services-transfert')}
                </A>
                <A class={`${style.link} ${useLocation().pathname === '/services/disposable-driver' ? style.linkActive : undefined}`} href="/services/disposable-driver" noScroll={true}>
                    {i18nState.t('navlink-services-disposable-driver')}
                </A>
                <A class={`${style.link} ${useLocation().pathname === '/services/events' ? style.linkActive : undefined}`} href="/services/events" noScroll={true}>
                    {i18nState.t('navlink-services-events')}
                </A>
                <A class={`${style.link} ${useLocation().pathname === '/services/excursions' ? style.linkActive : undefined}`} href="/services/excursions" noScroll={true}>
                    {i18nState.t('navlink-services-excursions')}
                </A>
            </div>
            <Outlet />
            <section id='partenaires'>
                <div id='partenairesTitle'>
                    <h1>
                        {i18nState.t('carrousel-partenaires-title')}
                    </h1>
                </div>
                <CarrouselPartenaires items={partenaires} />
            </section>
        </>
    )
}