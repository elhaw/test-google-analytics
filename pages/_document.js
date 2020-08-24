import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US" style={{ fontSize: "14px" }}>
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-176147490-1"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `<!-- Global site tag (gtag.js) - Google Analytics -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-176147490-1"></script>
              <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-176147490-1');
              </script>
              `,
            }}
          />
        </Head>
        <body className="font-body leading-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
