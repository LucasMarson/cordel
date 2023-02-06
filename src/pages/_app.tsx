/* eslint-disable @next/next/no-page-custom-font */
import Analytics from "@/components/Analytics";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Analytics />
      <Head>
        <title>Cordel</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <meta
          name="Cordel"
          content="Inspirado no classico conto de Lewis Carrol, o ballet Carol Pansani apresenta uma versao brasileirada ressaltando a importancia da cultura nordestina"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Component {...pageProps} />
    </>
  );
}
