import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Following from "./pages/Following";
import Home from "./pages/Home";
import { publicRouters } from "./routers";
import { DefaultLayout } from "~/components/Layout";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouters.map((route, idx) => {
            // const Layout = route.layout === null ? Fragment : DefaultLayout;
            let Layout = DefaultLayout
            if(route.layout)
            {
              Layout=route.layout
            }
            else if(route.layout===null){
              Layout=Fragment
            }
            const Page = route.component;
            return (
              <Route
                key={idx}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
