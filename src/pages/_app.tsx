import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { Rubik, Noto_Sans_KR, Merriweather } from "@next/font/google";
// //import {} from "@next/font";
// const notoSansKr = Noto_Sans_KR({
//   // preload: true, 기본값
//   subsets: ["latin"], // 또는 preload: false
//   weight: ["100", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
// });

// const rubik = Rubik({
//   subsets: ["latin"],
//   variable: "--rubik", // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
// });
// export const cls = (...classnames:npm string[]) => {
//   return classnames.join(" ");
// };
export default function App({ Component, pageProps }: AppProps) {
  console.log(`

███████╗ ██████╗  ██████╗ ██╗  ██╗
██╔════╝██╔═══██╗██╔═══██╗██║ ██╔╝
███████╗██║   ██║██║   ██║█████╔╝ 
╚════██║██║   ██║██║   ██║██╔═██╗ 
███████║╚██████╔╝╚██████╔╝██║  ██╗
╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝
                                
`)
  return (
    <Component
      // className={cls(notoSansKr.className, rubik.variable)}
      {...pageProps}
    />
  );
}
