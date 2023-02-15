import { A } from "solid-start";
import { i18nState } from "~/root";
import style from '~/style/services.module.scss';

export default function Transfer() {
    return (
        <>
            <section class={style.header}>
                <div class={style.headerTitle}>
                    <h1>
                        {i18nState.t('services-transfert-header-title')}
                    </h1>
                    <h2>
                        {i18nState.t('services-transfert-header-subtitle')}
                    </h2>
                </div>
                <p class={style.headerP}>
                    {i18nState.t('services-transfert-first-section-first-text')}
                </p>
            </section>


            <section class={style.texteIllustration}>
                <div class={style.texteIllustrationTexte}>
                    <p>
                        {i18nState.t('services-transfert-second-section-first-text')}
                    </p>
                    <p>
                        {i18nState.t('services-transfert-second-section-second-text')}
                    </p>
                    <p>
                        {i18nState.t('services-transfert-second-section-third-text')}
                    </p>
                </div>
                <div class={style.texteIllustrationContainer}>
                    <img class={style.texteIllustrationContainerImg} src='/media/photo/services/transfert/aeroport-nice-depart-arrive-voyage.jpg' />
                </div>
            </section>


            <section id={style.icones}>
                <div id={style.separation}>

                </div>
                <div class={style.iconesContainer}>
                    <img class={style.iconesContainerImg} src='/media/photo/services/icone/reservation-a-votre-guise.svg' />
                    <h3 class={style.iconesContainerH3}>{i18nState.t('services-transfert-first-icon-title')}</h3>
                    <p class={style.iconesContainerP}>{i18nState.t('services-transfert-first-icon-text')}</p>
                </div>
                <div class={style.iconesContainer}>
                    <img class={style.iconesContainerImg} src='/media/photo/services/icone/aeroport-nice-voyage-tourisme.svg' />
                    <h3 class={style.iconesContainerH3}>{i18nState.t('services-transfert-second-icon-title')}</h3>
                    <p class={style.iconesContainerP}>{i18nState.t('services-transfert-second-icon-text')}</p>
                </div>
                <div class={style.iconesContainer}>
                    <img class={style.iconesContainerImg} src='/media/photo/services/icone/tarifs-horaires-fixes.svg' />
                    <h3 class={style.iconesContainerH3}>{i18nState.t('services-transfert-third-icon-title')}</h3>
                    <p class={style.iconesContainerP}>{i18nState.t('services-transfert-third-icon-text')}</p>
                </div>
                <div class={style.iconesContainer}>
                    <img class={style.iconesContainerImg} src='/media/photo/services/icone/choix-destination.svg' />
                    <h3 class={style.iconesContainerH3}>{i18nState.t('services-transfert-fourth-icon-title')}</h3>
                    <p class={style.iconesContainerP}>{i18nState.t('services-transfert-fourth-icon-text')}</p>
                </div>
            </section>



            <div class={style.buttonContainer}>
                <A href='/reservation/classique'>
                    <button class='button'>{i18nState.t('services-transfert-button')}</button>
                </A>
            </div>
        </>
    )
}