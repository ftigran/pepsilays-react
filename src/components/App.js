import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useReactRouter from "use-react-router";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Main = React.lazy(() => import("../pages/main/main"));
const Cabinet = React.lazy(() => import("../pages/Cabinet/Cabinet"));
const Registration = React.lazy(() =>
  import("../pages/Registration/Registration")
);
const FAQ =React.lazy(()=>import("../pages/faq/faq")) 

import "./App.scss";
import ScrollSection from "./scroll-section/scroll-section";


const App = ({ basename }) => {
  const { location } = useReactRouter();
  console.log(location);
  console.log("location");

  return (
    <>
      <Header />
      <Suspense fallback={<div id="pre-loader">Загрузка...</div>}>
        <Switch location={location}>
          <Route
            key="faq"
            location={location}
            path={"/faq"}
            component={FAQ}
            exact
          />
          <Route path={basename + "/reg"} component={Registration}></Route>
          <Route path={basename + "/cabinet"} component={Cabinet}></Route>
          <Route
            key="index"
            location={location}
            path={basename + "/"}
            component={Main}
            exact
          />
          <Route path="*" render={() => <Main />} />
        </Switch>
      </Suspense>

      <Footer />
      <ScrollSection />
    </>
  );
};

export default App;
