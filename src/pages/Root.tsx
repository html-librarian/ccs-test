import { Link, Outlet, useNavigation } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LiveChat } from "../components/LiveChat";

export const Root = () => {
  const navigation = useNavigation();

  return (
    <div className="app">
      <LiveChat />
      <Header />
      <main
        className={
          navigation.state === "loading" ? "loading" : ""
        }
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};