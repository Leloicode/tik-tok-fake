import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { publicRoutes } from './routes'
import { Fragment } from 'react'
import DefaultLayout from './components/Layout/DefaultLayout';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route,index) => {
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            }
            else if (route.layout === null){
              Layout = Fragment
            }
            
            const Page = route.component
            return <Route key={index} path={route.path} element={
              <Layout >
                <Page />
              </Layout>
          } ></Route>
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
