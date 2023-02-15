// @refresh reload
import { createSignal, onCleanup, onMount, Suspense, Show } from "solid-js";
import { createStore } from "solid-js/store";
import { Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from "solid-start";

import i18n from "./i18n/config.tsx";
import i18next from "i18next";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./root.scss";

export const [scroll, setScroll] = createSignal(0);
export const [scrollDown, setScrollDown] = createSignal(false);

export const [i18nState, setI18nState] = createStore({
  ...i18next,
  t: i18next.t.bind({}),
  langueActuelle: i18next.language,
  languesDispos: (i18next.store.options.supportedLngs as string[]).filter((key: string) => key !== 'cimode' && key !== i18next.language),
});

export const changeLanguage = (newLanguage: string) => {
  i18next.changeLanguage(newLanguage).then(() => {
    setI18nState({
      ...i18next,
      t: i18next.t.bind({}),
      langueActuelle: i18next.language,
      languesDispos: (i18next.store.options.supportedLngs as string[]).filter((key: string) => key !== 'cimode' && key !== i18next.language),
    });
  })
};

export default function Root() {

  const handleScroll = () => {
    setScrollDown(window.scrollY > scroll() ? true : false);
    setScroll(window.scrollY);
  }
  const [loaded, setLoaded] = createSignal(false);

  onMount(async () => {
    setScroll(window.scrollY);
    setScrollDown(false);
    addEventListener('scroll', handleScroll);
    await i18n;
    setI18nState({
      ...i18next,
      t: i18next.t.bind({}),
      langueActuelle: i18next.language,
      languesDispos: (i18next.store.options.supportedLngs as string[]).filter((key: string) => key !== 'cimode' && key !== i18next.language),
    });
    setLoaded(true);

  });

  onCleanup(() => {
    removeEventListener('scroll', handleScroll);
  });

  return (
    <Html lang="en">
      <Head>
        <Title>Seven Driver Riviera</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Show when={loaded()}>
              <Header />
              <Routes>
                <FileRoutes />
              </Routes>
              <Footer />
            </Show>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
