import { Link, Outlet, useNavigation } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Root = () => {
  const navigation = useNavigation();

  return (
    <div className="app">
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