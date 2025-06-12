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
      </head>
      <body>
        <Analytics />
        <SpeedInsights />
        {/* UTM Tag */}
        <Script id="utm-tracker" strategy="afterInteractive">
          {`
  (function () {
    function getUTMParams() {
      const params = new URLSearchParams(window.location.search);
      const utmParams = new URLSearchParams();
      ['utm_source', 'utm_medium', 'utm_campaign', 'ref'].forEach(param => {
        if (params.has(param)) {
          utmParams.set(param, params.get(param));
        }
      });
      return utmParams.toString();
    }

    function appendUTMParams() {
      const utmString = getUTMParams();
      if (!utmString) return;

      const links = document.querySelectorAll('a[href*="mynutramax.com/register"]');

      links.forEach(link => {
        try {
          const url = new URL(link.href);
          if (url.hostname.includes("mynutramax.com") && url.pathname === "/register") {
            utmString.split('&').forEach(pair => {
              const [key, value] = pair.split('=');
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

        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-init" strategy="afterInteractive">
          {`_linkedin_partner_id = "7274042";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
        </Script>
        <Script id="linkedin-loader" strategy="afterInteractive">
          {`(function(l) {
            if (!l) {
              window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q = [];
            }
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript"; b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=7274042&fmt=gif"
          />
        </noscript>
        {/* Facebook/Meta Pixel */}
        <Script id="facebook-pixel-init" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '689892560456638');
            fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=689892560456638&ev=PageView&noscript=1"
          />
        </noscript>
        {/* Trade Desk Universal Pixel */}
        <Script
          id="ttd-loader"
          src="https://js.adsrvr.org/up_loader.1.1.0.js"
          strategy="afterInteractive"
        />
        <Script id="ttd-init-wrapper" strategy="afterInteractive">
          {`// Wait until the loader script is available
            function waitForTTDPixel(retries = 10) {
              if (typeof ttd_dom_ready === "function" && typeof TTDUniversalPixelApi === "function") {
                ttd_dom_ready(function () {
                  var universalPixelApi = new TTDUniversalPixelApi();
                  universalPixelApi.init("h1yjpau", ["p112iqo"], "https://insight.adsrvr.org/track/up");
                });
              } else if (retries > 0) {
                setTimeout(() => waitForTTDPixel(retries - 1), 200);
              } else {
                console.error("Trade Desk pixel failed to load.");
              }
            }
            waitForTTDPixel();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
