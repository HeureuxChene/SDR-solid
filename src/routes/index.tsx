import { Title, A } from "solid-start";
import style from '~/style/index.module.scss';
import { i18nState } from "~/root";
import Parralax from "~/components/Parralax/Parralax";
import CarrouselPartenaires from "~/components/CarrouselPartenaires/CarrouselPartenaires";
import partenaires from '~/json/partenaires.json';
import villes from '~/json/villes.json';
import CarrouselVilles from "~/components/CarrouselVilles/CarrouselVilles";

export default function Index() {

  return (
    <>
      <Title>Seven Driver Riviera - Home</Title>

      <Parralax>
        <img id='homeBackground' alt='home-mercedes-devant-la-mer' src='/media/photo/home/flotte-mercedes-chauffeur.jpg' width='1448' height='1014' loading='lazy' />
        {/* <img id={style.servicesBackground} alt='home-mercedes-devant-la-mer' src='/media/photo/home/flotte-mercedes-chauffeur.jpg' width='1448' height='1014' loading='lazy' /> */}
      </Parralax>

      <section id='home'>
        <h1 id='homeH1'>
          {i18nState.t('home-header-title')}
        </h1>
        <h2 id='homeH2'>
          {i18nState.t('home-header-subtitle')}
        </h2>
        <CarrouselVilles items={villes} />
      </section>

      <section id={style.devis}>
        <div id={style.devisTitle}>
          <h1>
            {i18nState.t('home-header-title')}
          </h1>
          <h2>
            {i18nState.t('home-first-section-subtitle-deux')}
          </h2>
        </div>
        <div id={style.devisContent}>
          <img id={style.devisContentImg} src='/media/photo/home/presentation.jpg' alt='chauffeur-ponctuel-ouverture-porte-mercedes' />
          <div id={style.separation}>

          </div>
          <div id={style.devisContentTexte}>
            <div id={style.devisContentTexteTexte}>
              <p>
                {i18nState.t('home-first-section-first-text')}
              </p>
              <p>
                {i18nState.t('home-first-section-second-text')}
              </p>
              <p>
                {i18nState.t('home-first-section-third-text')}
              </p>
            </div>
            <A class='button' href='/reservation/sur-mesure'>
              {i18nState.t('home-first-section-button')}
            </A>
          </div>
        </div>
      </section>

      <section class={style.services}>
        <div class={style.servicesContent}>
          <h1>
            {i18nState.t('home-second-section-title')}
          </h1>
          <p style={{ color: '#fff' }}>
            {i18nState.t('home-second-section-first-text')}
          </p>
          <A class={`${style.servicesButton} button buttonBlanc`} href='/services/transfert'>
            {i18nState.t('home-second-section-button')}
          </A>
        </div>
      </section>

      <section id={style.fonctionnement}>
        <div id={style.fonctionnementTitle}>
          <h1>
            {i18nState.t('home-third-section-title')}
          </h1>
          <h2>
            {i18nState.t('home-third-section-subtitle')}
          </h2>
        </div>
        <div id={style.fonctionnementContent}>
          <div class={style.fonctionnementBrique}>
            <h1 class={style.fonctionnementChiffre}>
              1
            </h1>
            <p class={style.fontionnementParagraphe}>
              {i18nState.t('home-third-section-first-text')}
            </p>
          </div>
          <div class={style.fonctionnementBrique}>
            <h1 class={style.fonctionnementChiffre}>
              2
            </h1>
            <p class={style.fontionnementParagraphe}>
              {i18nState.t('home-third-section-second-text')}
            </p>
          </div>
          <div class={style.fonctionnementBrique}>
            <h1 class={style.fonctionnementChiffre}>
              3
            </h1>
            <p class={style.fontionnementParagraphe}>
              {i18nState.t('home-third-section-third-text')}
            </p>
          </div>
          <div class={style.fonctionnementBrique}>
            <h1 class={style.fonctionnementChiffre}>
              4
            </h1>
            <p class={style.fontionnementParagraphe}>
              {i18nState.t('home-third-section-fourth-text')}
            </p>
          </div>
          <div class={style.fonctionnementBrique}>
            <h1 class={style.fonctionnementChiffre}>
              5
            </h1>
            <p class={style.fontionnementParagraphe}>
              {i18nState.t('home-third-section-fifth-text')}
            </p>
          </div>
          <div id={style.fonctionnementContainerButton}>
            <A id={style.fonctionnementButton} class='button' href='/reservation/sur-mesure'>
              {i18nState.t('home-third-section-button')}
            </A>
          </div>
        </div>
      </section>

      <section class={style.services}>
        <div class={style.servicesContent}>
          <h1>
            {i18nState.t('home-fourth-section-title')}
          </h1>
          <p style={{ color: '#fff' }}>
            {i18nState.t('home-fourth-section-first-text')}
          </p>
          <A class={`${style.servicesButton} button buttonBlanc`} href='/services/transfert'>
            {i18nState.t('home-fourth-section-button')}
          </A>
        </div>
      </section>

      <section id='partenaires'>
        <div id='partenairesTitle'>
          <h1>
            {i18nState.t('carrousel-partenaires-title')}
          </h1>
        </div>
        <CarrouselPartenaires items={partenaires} />
      </section>
    </>
  );
}
