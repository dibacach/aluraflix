import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

export default function BasePage() {
  return (
    <main>
      <div className="container">
        <Header />
        <div className="main">
          <Outlet />
        </div>
        <Footer />
      </div>
    </main>
  );
}
