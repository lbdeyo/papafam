import Script from "next/script";
import { OG_IMAGE } from "@/lib/site";

export default function Head() {
  return (
    <>
      <title>L.B. Deyo, Designer</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" sizes="48x48" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta
        property="og:image"
        content={OG_IMAGE.url}
      />
      <meta
        property="og:description"
        content="Full service web design and full-stack web development"
      />
      <meta property="og:title" content="L.B. Deyo, Designer" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="Full service web design with full-stack web development"
      />
      <meta name="twitter:title" content="L.B. Deyo, Designer" />
      <meta
        name="twitter:image"
        content={OG_IMAGE.url}
      />
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6C26PZMYX6"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6C26PZMYX6');
          `,
        }}
      />
    </>
  );
}
