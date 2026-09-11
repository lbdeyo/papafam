import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>L.B. Deyo, Designer</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        property="og:image"
        content="/seo/social-preview-image.jpg"
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
        content="/seo/social-preview-image.jpg"
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
