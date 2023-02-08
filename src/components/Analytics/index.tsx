import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import * as ga from "../../lib/gtag"


export default function Analytics() {
  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = (url: string) => {
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);
  
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="gtag" strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.GOOGLE_ANALYTICS}');
                `}
      </Script>
    </>
  );
}
