import "../styles/globals.css";
import "sook-ui-react/dist/styles.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  console.log(`
███████╗ ██████╗  ██████╗ ██╗  ██╗
██╔════╝██╔═══██╗██╔═══██╗██║ ██╔╝
███████╗██║   ██║██║   ██║█████╔╝ 
╚════██║██║   ██║██║   ██║██╔═██╗ 
███████║╚██████╔╝╚██████╔╝██║  ██╗
╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝
`);
  return <Component {...pageProps} />;
}
