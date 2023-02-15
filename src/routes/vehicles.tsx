import { createSignal } from "solid-js";
import { A } from "solid-start";
import Parralax from "~/components/Parralax/Parralax";
import { i18nState } from "~/root";
import style from '~/style/vehicles.module.scss';

export default function Vehicles() {

    const modele =
        [
            ['vehicule-mercedes', 'vehicles-classeS', 'classe-s/classe-s.png', 'vehicles-classeS-title-un', 'vehicles-classeS-title-deux', 'vehicles-classeS-subtitle', 'vehicles-classeS-text', '0'],
            ['vehicule-mercedes', 'vehicles-classeE', 'classe-e/classe-e.png', 'vehicles-classeE-title-un', 'vehicles-classeE-title-deux', 'vehicles-classeE-subtitle', 'vehicles-classeE-text', '1'],
            ['vehicule-mercedes', 'vehicles-classeV', 'classe-v/classe-v.png', 'vehicles-classeV-title-un', 'vehicles-classeV-title-deux', 'vehicles-classeV-subtitle', 'vehicles-classeV-text', '2'],
            ['vehicles-autre-modele', 'vehicles-autre-modele-title', 'autre-modele/autre-modele.png', '', '', 'vehicles-autre-modele-subtitle', 'vehicles-autre-modele-text', '']
        ]

    const [transition, setTransition] = createSignal(1);
    const [finTransition, setFinTransition] = createSignal(true);

    const [position, setPosition] = createSignal(0);

    return (
        <>
            <style>
                {
                    `
                    .instantTransition {
                            transform: translateX(${transition() * 50}px);
                            opacity:0;
                            visibility:hidden;
                        }
                    .instantTransitionVoiture {
                        transform: translateX(${transition() * 50}px);
                        opacity:0;
                        visibility:hidden;
                    }
                    .invisible {
                        opacity: 0;
                        visibility: hidden;
                        transform: translateX(${transition() * (-50)}px);
                        transition: visibility .2s, opacity .2s, transform .2s linear;
                    }
                    .invisibleVoiture {
                        opacity: 0;
                        visibility: hidden;
                        transform: translateX(${transition() * (-50)}px);
                        transition: visibility .2s, opacity .2s, transform .2s linear;
                    }
                    `
                }
            </style>

            <Parralax>
                <img id='homeBackground' src='/media/photo/vehicles/berline-sportive-confort.jpg' loading='lazy' />
            </Parralax>

            <section id='home'>
                <h1 id='homeH1'>
                    {i18nState.t('vehicles-header-title')}
                </h1>
                <h2 id='homeH2'>
                    {i18nState.t('vehicles-header-subtitle')}
                </h2>
            </section>


            <section id={style.sectionVehicules}>
                <img id={style.sectionVehiculesBackground} src={`/media/photo/vehicles/voiture-paysage.jpg`} />
                <button class={`${style.carrouselVehiculesButton} ${style.carrouselVehiculesButtonLeft}`} onClick={() => { setTransition(1); setFinTransition(false); if (position() === 0) { setPosition(3) } else { setPosition(position() - 1) } }}>
                    <svg width='40%' height='40%' fill="#fff" viewBox="500 0 1420 1920" xmlns="http://www.w3.org/2000/svg">
                        <path d="m1394.006 0 92.299 92.168-867.636 867.767 867.636 867.636-92.299 92.429-959.935-960.065z" />
                    </svg>
                </button>
                <button class={`${style.carrouselVehiculesButton} ${style.carrouselVehiculesButtonRight}`} onClick={() => { setTransition(-1); setFinTransition(false); if (position() === 3) { setPosition(0) } else { setPosition(position() + 1) } }}>
                    <svg width='40%' height='40%' fill="#fff" viewBox="0 0 1420 1920" xmlns="http://www.w3.org/2000/svg">
                        <path d="M526.299 0 434 92.168l867.636 867.767L434 1827.57l92.299 92.43 959.935-960.065z" fill-rule="evenodd" />
                    </svg>
                </button>

                {
                    modele.map((key: string[], index: number) => {
                        return (
                            <div onTransitionEnd={() => setFinTransition(true)} class={`${style.titleVoiture} ${position() === index ? (finTransition() ? style.visible : 'instantTransition') : 'invisible'}`}>
                                <h1>{i18nState.t(key[0])}</h1>
                                <h2>{i18nState.t(key[1])}</h2>
                            </div>
                        )
                    })
                }

                {
                    modele.map((key: string[], index: number) => {
                        return (
                            <img class={`${style.imgVoiture} ${position() === index ? (finTransition() ? style.visible : 'instantTransitionVoiture') : 'invisibleVoiture'}`} src={`/media/photo/vehicles/${key[2]}`} />
                        )
                    })
                }

                {
                    modele.map((key: string[], index: number) => {
                        return (
                            <div class={`${style.descriptif} ${position() === index ? (finTransition() ? style.visible : 'instantTransition') : 'invisible'}`}>
                                <h1 class={style.title}>
                                    {i18nState.t(key[3])} <span style={{ color: '#d2a937', visibility: (index === 3 ? 'hidden' : undefined) }}>|</span> {i18nState.t(key[4])}
                                </h1>
                                <h3 class={style.subtitle}>{i18nState.t(key[5])}</h3>
                                <p class={style.corps}>{i18nState.t(key[6])}</p>
                            </div>
                        )
                    })
                }

                {/* <div class={style.button}>
                    <A href={{
                        pathname: 'reservation/' + (position() === 3 ? 'sur-mesure' : 'classique'),
                        query: {
                            vehicule: i18nState.t(modele[position()][7])
                        },
                    }}
                    >
                        <button>{position() === 3 ? i18nState.t("vehicles-button-devis") : t("vehicles-button-reserver")}</button>
                    </A>
                </div> */}

                <button id={style.buttonReserver} class={`button`}>
                    {position() === 3 ? i18nState.t("vehicles-button-devis") : i18nState.t("vehicles-button-reserver")}
                </button>
            </section>

            <div class={style.vehicules}>
                <div class={style.vehiculeContainer}>
                    <img class={style.vehicule} src={position() === 0 ? '/media/photo/vehicles/classe-s/classe-s-elegante-raffine-foret.jpg' : position() === 1 ? '/media/photo/vehicles/classe-e/classe-e-sportive-polyvalence-equilibre.jpg' : position() === 2 ? '/media/photo/vehicles/classe-v/chauffeur-classe-v-maitrise-effiace-professionnel.jpg' : '/media/photo/vehicles/autre-modele/crepuscule-berline.jpg'} />
                </div>
                <div class={style.vehiculeContainer}>
                    <img class={style.vehicule} src={position() === 0 ? '/media/photo/vehicles/classe-s/classe-s-sportive-confort.jpg' : position() === 1 ? '/media/photo/vehicles/classe-e/mercedes-classe-e-avant-technologique.jpg' : position() === 2 ? '/media/photo/vehicles/classe-v/route-nuit-classe-v-conduite.jpg' : '/media/photo/vehicles/autre-modele/retroviseur-mercedes-excursion.jpg'} />
                </div>
                <div class={style.vehiculeContainer}>
                    <img class={style.vehicule} src={position() === 0 ? '/media/photo/vehicles/classe-s/interieur-classe-s-confort-spacieux-technologique-moderne.jpg' : position() === 1 ? '/media/photo/vehicles/classe-e/volant-classe-e-interieur-spacieux-moderne-confort.jpg' : position() === 2 ? '/media/photo/vehicles/classe-v/classe-v-interieur-spacieux-confortable-securite.jpg' : '/media/photo/vehicles/autre-modele/route-de-nuit.jpg'} />
                </div>
            </div>
        </>
    )
}