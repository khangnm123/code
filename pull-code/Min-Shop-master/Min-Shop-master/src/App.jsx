
import "./assets/styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import MainLayout from "./containers/MainLayout";
import { Provider } from "react-redux";
import store from './redux/store'
import ConVertMoney from './components/moneyConver/ConverMoney/conVertMoeny'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route,index) => {
            const Page = route.page;
            return <Route key={route} path={route.path} element={
            <MainLayout>
              <Provider store={store}>
                <Page/>
              </Provider>
            </MainLayout>} />
          })}
        </Routes>
        <ConVertMoney/>
      </div>
    </BrowserRouter>
  );
}

export default App;
