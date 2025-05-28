import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Analytics from "./analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const roboto = Roboto({
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "I Trust Nutramax",
  description:
    "Discover why vet professionals recommend Nutramax supplements & experience the Nutramax difference yourself by joining our clinic staff program today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="my-verification-code" />
      </head>
      <body>
        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
     _linkedin_partner_id = "6951162";
     window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
     window._linkedin_data_partner_ids.push(_linkedin_partner_id);
   `}
        </Script>
        <Script
          id="linkedin-loader"
          strategy="afterInteractive"
          src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=6951162&fmt=gif"
          />
        </noscript>
        {/* Facebook/Meta Pixel */}
        <Script id="facebook-pixel-init" strategy="afterInteractive">
          {`
     !function(f,b,e,v,n,t,s)
     {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
     n.callMethod.apply(n,arguments):n.queue.push(arguments)};
     if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
     n.queue=[];t=b.createElement(e);t.async=!0;
     t.src=v;s=b.getElementsByTagName(e)[0];
     s.parentNode.insertBefore(t,s)}(window, document,'script',
     'https://connect.facebook.net/en_US/fbevents.js');
     fbq('init', '689892560456638');
     fbq('track', 'PageView');
   `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=689892560456638&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
