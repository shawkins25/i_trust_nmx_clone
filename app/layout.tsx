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
        <Script id="utm-propagate" strategy="afterInteractive">{`
(function () {
 // Which non-UTM keys to carry as well
 var EXTRA_KEYS = ['ref', 'gclid', 'fbclid', 'msclkid'];
 function collectParams(srcSearch) {
   var src = new URLSearchParams(srcSearch || '');
   var out = new URLSearchParams();
   src.forEach(function (v, k) {
     var key = k.toLowerCase();
     if ((key.startsWith('utm_') || EXTRA_KEYS.indexOf(key) >= 0) && v) {
       out.set(k, v);
     }
   });
   return out;
 }
 function save(params) {
   try {
     if (params && params.toString()) {
       sessionStorage.setItem('nmx__utm', params.toString());
     }
   } catch {}
 }
 function load() {
   try {
     var s = sessionStorage.getItem('nmx__utm');
     return s ? new URLSearchParams(s) : new URLSearchParams();
   } catch { return new URLSearchParams(); }
 }
 // Prefer fresh params from URL; fall back to stored
 var fresh = collectParams(location.search);
 if (fresh.toString()) save(fresh);
 var UTM = fresh.toString() ? fresh : load();
 if (!UTM.toString()) return; // nothing to do
 function shouldDecorate(url) {
   try {
     var u = new URL(url, location.href);
     return u.hostname.indexOf('mynutramax.com') !== -1;
   } catch { return false; }
 }
 function decorateHref(href) {
   try {
     var u = new URL(href, location.href);
     if (!shouldDecorate(u.href)) return null;
     // only add keys not already present
     UTM.forEach(function (v, k) {
       if (!u.searchParams.has(k)) u.searchParams.set(k, v);
     });
     return u.toString();
   } catch { return null; }
 }
 function decorateAnchor(a) {
   if (!a || !a.getAttribute) return;
   var href = a.getAttribute('href');
   if (!href) return;
   var updated = decorateHref(href);
   if (updated && updated !== href) a.setAttribute('href', updated);
 }
 function scanAll() {
   document.querySelectorAll('a[href]').forEach(decorateAnchor);
 }
 // Initial pass
 scanAll();
 // Click-time safety: ensure last-second decoration
 document.addEventListener('click', function (e) {
   var t = e.target;
   if (!(t instanceof Element)) return;
   var a = t.closest && t.closest('a[href]');
   if (!a) return;
   decorateAnchor(a);
 }, true);
 // Watch for future DOM changes (hydration, lazy elements, carousels, etc.)
 var mo = new MutationObserver(function (muts) {
   muts.forEach(function (m) {
     m.addedNodes.forEach(function (n) {
       if (n.nodeType !== 1) return;
       var el = /** @type {Element} */(n);
       if (el.matches && el.matches('a[href]')) decorateAnchor(el);
       if (el.querySelectorAll) {
         el.querySelectorAll('a[href]').forEach(decorateAnchor);
       }
     });
   });
 });
 mo.observe(document.documentElement, { childList: true, subtree: true });
})();
`}</Script>
        {/* Children last so overlays/modals can read configs above */}
        {children}
      </body>
    </html>
  );
}
