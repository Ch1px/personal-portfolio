import React from "react";
import Head from "next/head";
import AppData from "@data/app.json";
import '../styles/scss/style.scss';
import "../styles/globals.css";
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* SEO and favicon */}
        <title>{AppData.settings.siteName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={AppData.settings.favicon} sizes="any" />
        {/* Additional SEO meta tags can go here */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
