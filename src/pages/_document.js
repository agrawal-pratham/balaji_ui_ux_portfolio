import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="/images/cloud_bg.jpg" as="image" />
        {/* <link rel="preload" href="/images/clouds_bg.png" as="image" /> */}
        <link rel="preload" href="/images/letter_b.png" as="image" />
        <link rel="preload" href="/images/letter_a.png" as="image" />
        <link rel="preload" href="/images/letter_l.png" as="image" />
        <link rel="preload" href="/images/letter_j.png" as="image" />
        <link rel="preload" href="/images/letter_i.png" as="image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
