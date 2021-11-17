import React, {Component, Suspense} from 'react'
import {Link, Route, Routes} from "react-router-dom"
import routes, {Loadable} from "./routes"

const Home = Loadable(() => import('../modules/home'))

const NoMatch = () => {
  return (
    <div>
      <h2>这里什么都没有!</h2>
      <p>
        <Link to="/">返回首页</Link>
      </p>
    </div>
  );
}

interface IProps {
}

class Router extends Component<IProps> {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/*<Route path="/" element={Home}/>*/}
          {
            routes.map((routeItem) =>
              <Route key={routeItem.path} {...routeItem} />
            )
          }
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </Suspense>
    )
  }
}

export default Router
