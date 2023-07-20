import "./App.css";
import Header from "./component/Header/header";
import SideMenu from "./component/SideMenu/side-menu";
import PageContent from "./component/PageContents/page-content";
import AppFooter from "./component/Appfooter/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="sideMenu-pageContent">
        <SideMenu> </SideMenu>
        <PageContent />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
