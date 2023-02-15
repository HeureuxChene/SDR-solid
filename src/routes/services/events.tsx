import { A } from "solid-start";
import { i18nState } from "~/root";
import style from '~/style/services.module.scss'

export default function Events() {
    return (
        <>
            <div class={style.headerTitle}>
                <h1>
                    {i18nState.t('services-event-header-title')}
                </h1>
                <h2>
                    {i18nState.t('services-event-header-subtitle')}
                </h2>
            </div>

            <section class={style.texteIllustration} style={{ "background-color": '#fff' }}>
                <div class={style.texteIllustrationTexte}>
                    <p>
                        {i18nState.t('services-event-first-section-first-text')}
                    </p>
                    <p>
                        {i18nState.t('services-event-first-section-second-text')}
                    </p>
                    <p>
                        {i18nState.t('services-event-first-section-third-text')}
                    </p>
                </div>
                <div class={style.texteIllustrationContainer}>
                    <img class={style.texteIllustrationContainerImg} src='/media/photo/services/evenement/mariage-french-riviera-event.jpg' />
                </div>
            </section>

            <section id={style.icones} style={{ "background-color": '#e6e6e6' }}>
                <div id={style.separation}>

                </div>
                <div class={style.iconesContainer}>
                    <img class={style.iconesContainerImg} src='/media/photo/services/icone/reservation-a-votre-guise.svg' />
                    <h3 class={style.iconesContainerH3}>{i18nState.t('services-event-first-icon-title')}</h3>
                    <p class={style.iconesContainerP}>{i18nState.t('services-event-first-icon-text')}</p>
                </div>
                <div class={style.iconesContainer}>
                    <img class={style.iconesContainerImg} src='/media/photo/services/icone/prestation-sur-mesure.svg' />
                    <h3 class={style.iconesContainerH3}>{i18nState.t('services-event-second-icon-title')}</h3>
                    <p class={style.iconesContainerP}>{i18nState.t('services-event-second-icon-text')}</p>
                </div>
                <div class={style.iconesContainer}>
                    <img class={style.iconesContainerImg} src='/media/photo/services/icone/tarifs-horaires-fixes.svg' />
                    <h3 class={style.iconesContainerH3}>{i18nState.t('services-event-third-icon-title')}</h3>
                    <p class={style.iconesContainerP}>{i18nState.t('services-event-third-icon-text')}</p>
                </div>
                <div class={style.iconesContainer}>
                    <img class={style.iconesContainerImg} src='/media/photo/services/icone/chauffeur-a-disposition.svg' />
                    <h3 class={style.iconesContainerH3}>{i18nState.t('services-event-fourth-icon-title')}</h3>
                    <p class={style.iconesContainerP}>{i18nState.t('services-event-fourth-icon-text')}</p>
                </div>
            </section>

            <div class={style.buttonContainer} style={{ "background-color": '#e6e6e6' }}>
                <A href='/reservation/classique'>
                    <button class='button'>{i18nState.t('services-event-button')}</button>
                </A>
            </div>
        </>
    )
}