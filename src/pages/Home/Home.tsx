import "./home.scss";
import NavBar from "../../components/ui/Navbar/Navbar";
import Content from "../../components/pages/home/content/Content";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Content />
      <p>Hello world</p>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
