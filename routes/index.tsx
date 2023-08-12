import { Head } from "$fresh/runtime.ts";
import { Chose } from "../islands/Chose.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Bear 2023</title>
        <script src="/app.js" type="module"></script>;
        <link
          crossOrigin="use-credentials"
          rel="manifest"
          href="/site.webmanifest"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#555555"></link> */}
        <meta name="apple-mobile-web-app-title" content="UrsSur"></meta>
        <meta name="application-name" content="UrsSur"></meta>
        <meta name="msapplication-TileColor" content="#82ff89"></meta>
        <meta name="theme-color" content="#82ff89"></meta>
        <link rel="icon" href="/bear2023.svg"></link>
      </Head>
      <div class="px-4 py-8 mx-auto bg-slate-100">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/bear2023.svg"
            width="128"
            height="128"
            alt="the fresh logo: blame it on the juice"
          />
          <h1 class="text-4xl font-bold">Welcome to fresh bear INSTALABLE</h1>
        </div>
        <Chose />
      </div>
    </>
  );
}
