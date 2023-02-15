import { A } from "solid-start";
import { i18nState } from "~/root";
import style from '~/style/services.module.scss'

export default function DisposableDriver() {
    return (
        <>
            <div class={style.headerTitle}>
                <h1>
                    {i18nState.t('services-provision-header-title')}
                </h1>
                <h2>
                    {i18nState.t('services-provision-header-subtitle')}
                </h2>
            </div>

            <section class={style.texteIllustration} style={{"background-color":'#fff'}}>
                <div class={style.texteIllustrationTexte}>
                    <p>
                        {i18nState.t('services-provision-first-section-first-text')}
                    </p>
                    <p>
                        {i18nState.t('services-provision-first-section-second-text')}
                    </p>
                    <p>
                        {i18nState.t('services-provision-first-section-third-text')}
                    </p>
                </div>
                <div class={style.texteIllustrationContainer}>
                    <img class={style.texteIllustrationContainerImg} src='/media/photo/services/mise-a-disposition/chauffeur-ponctuel-fiable-a-disposition.jpg' />
                </div>
            </section>

            <section id={style.icones} style={{"background-color":'#e6e6e6'}}>
                <div id={style.separation}>

                </div>
                <div class={style.iconesContainer}>
                    <img class={style.iconesContainerImg} src='/media/photo/services/icone/reservation-a-votre-guise.svg' />
                    <h3 class={style.iconesContainerH3}>{i18nState.t('services-provision-first-icon-title')}</h3>
                    <p class={style.iconesContainerP}>{i18nState.t('services-provision-first-icon-text')}</p>
                </div>
                <div class={style.iconesContainer}>
                    <img class={style.iconesContainerImg} src='/media/photo/services/icone/prestation-sur-mesure.svg' />
                    <h3 class={style.iconesContainerH3}>{i18nState.t('services-provision-second-icon-title')}</h3>
                    <p class={style.iconesContainerP}>{i18nState.t('services-provision-second-icon-text')}</p>
                </div>
                <div class={style.iconesContainer}>
                    <img class={style.iconesContainerImg} src='/media/photo/services/icone/tarifs-horaires-fixes.svg' />
                    <h3 class={style.iconesContainerH3}>{i18nState.t('services-provision-third-icon-title')}</h3>
                    <p class={style.iconesContainerP}>{i18nState.t('services-provision-third-icon-text')}</p>
                </div>
                <div class={style.iconesContainer}>
                    <img class={style.iconesContainerImg} src='/media/photo/services/icone/choix-destination.svg' />
                    <h3 class={style.iconesContainerH3}>{i18nState.t('services-provision-fourth-icon-title')}</h3>
                    <p class={style.iconesContainerP}>{i18nState.t('services-provision-fourth-icon-text')}</p>
                </div>
            </section>

            <div class={style.buttonContainer} style={{"background-color":'#e6e6e6'}}>
                <A href='/reservation/classique'>
                    <button class='button'>{i18nState.t('services-transfert-button')}</button>
                </A>
            </div>
        </>
    )
}