import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Analytics from "./analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import React from "react";
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Google Tag Manager (provided snippet) */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PQH3PZ5G');`}
        </Script>
      </head>
      <body>
        <Analytics />
        <SpeedInsights />
        {/*
         Replaces separate Facebook / gtag / TTD / LinkedIn scripts.
         Must be in BODY and use a hyphenated custom element name.
         Use data-* attrs so React/TSX passes them through cleanly.
       */}
        {React.createElement("nmx-tags", {
          style: { display: "none" },
          "data-script-src": "",
          "data-clarity": "",
          "data-gtag": "",
          "data-facebook": "689892560456638",
          "data-ttd-aid": "",
          "data-ttd-uid": "p112iqo",
          "data-ttd-cid": "",
          "data-linkedin": "7274042",
        })}
        {/* UTM Tag (KEEPING as requested) */}
        <Script id="utm-tracker" strategy="afterInteractive">
          {`
(function () {
 function getUTMParams() {
   const params = new URLSearchParams(window.location.search);
   const utmParams = new URLSearchParams();
   ['utm_source', 'utm_medium', 'utm_campaign', 'ref'].forEach(function (param) {
     if (params.has(param)) {
       utmParams.set(param, params.get(param));
     }
   });
   return utmParams.toString();
 }
 function appendUTMParams() {
   var utmString = getUTMParams();
   if (!utmString) return;
   var links = document.querySelectorAll('a[href*="mynutramax.com/register"]');
   links.forEach(function (link) {
     try {
       var url = new URL(link.href);
       if (url.hostname.includes("mynutramax.com") && url.pathname === "/register") {
         utmString.split('&').forEach(function (pair) {
           var parts = pair.split('=');
           var key = parts[0];
           var value = parts[1];
           if (key && value) url.searchParams.set(key, value);
         });
         link.href = url.toString();
       }
     } catch (e) {
       console.warn("Invalid link found for UTM appending", link.href);
     }
   });
 }
 if (document.readyState === "complete" || document.readyState === "interactive") {
   appendUTMParams();
 } else {
   document.addEventListener("DOMContentLoaded", appendUTMParams);
 }
})();
`}
        </Script>
        {/* Children last so overlays/modals can read configs above */}
        {children}
      </body>
    </html>
  );
}
