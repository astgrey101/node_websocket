import './styles/app.scss'
import SettingBar from "./components/SettingBar";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/Canvas";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
          <div className='app'>
              <Routes>
                  <Route
                      path='/:id'
                      element={
                          <>
                              <SettingBar />
                              <Toolbar />
                              <Canvas />
                          </>
                      }
                  />
                  <Route
                      element={
                          <Navigate
                              replace
                              to={`f${(+new Date()).toString(16)}`}
                          />
                      }
                      path='*'
                  />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
