import "./App.css";
import Header from "./component/Header/header";
import SideMenu from "./component/SideMenu/side-menu";
import PageContent from "./component/PageContents/page-content";
import AppFooter from "./component/Appfooter/footer";
import TestCode from "./Pages/Test";
import { User } from "./React-Query/user";
import { useState } from "react";
import UserDetail from "./React-Query/user-details";

function App() {
  //React-query state
  const [userId, setUserId] = useState(); //selected use id
  const ManCar = (name) => {
    return `The temperature ${name} is celcius`;
  };
  let text = ["Please", " locate", " where", "locate", "occurs!"];
  const points = [40, 100, 1, 5, 25, 10];
  let Arr = [];
  const newArr = points.sort((a, b) => a - b);

  const strings = ["č", "é", "A", "b", "Đ"];

  const defaultSort = Array.from(strings).sort();

  const simpleSort = Array.from(strings).sort((a, b) => a - b);

  const localeSort = Array.from(strings).sort((a, b) => {
    return a.localeCompare(b, "en", { sensitivity: "base" });
  });

  console.log({defaultSort});
  console.log({simpleSort});
  console.log({localeSort});

  for (let i = 0; i< points.length; i++){
    console.log({i})
  }

  const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
console.log({numbers2})

  // console.log({ newArr });
  return (
    <>
      <div className="App">
        {/* <Header />
      <div className="sideMenu-pageContent">
        <SideMenu> </SideMenu>
        <PageContent />
      </div>
      <AppFooter /> */}
      </div>
      {/* <TestCode/> */}
      <div
        style={{ width: "30%", padding: 20, borderRight: "2px solid white" }}
      >
        <User setUserId={setUserId} />
        <div style={{ padding: 20, width: "70%" }}>
          <UserDetail userId={userId} />
        </div>
      </div>
    </>
  );
}

export default App;
