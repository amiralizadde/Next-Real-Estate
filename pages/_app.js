import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Sidebar from "@/components/modules/sidebar/Sidebar.jsx";
import Header from "@/components/modules/header/Header.jsx";
import RealTors from "@/components/modules/realtors/RealTors.jsx";
import Footer from "@/components/modules/footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="container-2xl flex flex-col xl:flex-row border">
        <Sidebar />
        <div className="flex flex-col border border-black w-full">
          <div className="flex flex-col xl:flex-row xl:h-[80vh]">
            <Header />
            <RealTors />
          </div>
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </>
  );
}
