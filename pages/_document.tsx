import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';
import theme from '~/lib/Theme';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const description = `Pierre IDÉ, a young big brain developed `;

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:title" content="Pierre IDÉ" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://piux.fr" />
          <meta property="twitter:url" content="https://piux.fr" />

          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta property="twitter:description" content={description} />
          <meta
            name="keywords"
            content="Pierre IDÉ, Pierre, Piarre, Developer, Code"
          />
          <meta name="author" content="Pierre IDÉ" />

          <meta name="theme-color" content="#FFA500" />
        </Head>
        <body
          style={{
            minHeight: '100vh',
            width: '100vw',
            backgroundImage:
              'radial-gradient(ellipse at bottom, #291F0B 0%, #000000 100%) ',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
