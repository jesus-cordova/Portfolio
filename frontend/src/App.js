import React from "react";
import MainPage from "./components/MainPage.js";
import Blog from "./components/Blog.js";
import Article from "./components/Article.js";
import Authentication from "./components/AuthenticationPage/Authentication.js";
import Navigation from "./components/Navigation.js";
import YourComments from "./components/YourComments.js";
import Settings from "./components/Settings.js";
import { UserProvider } from "./Context/UserContext.js";
import { ArticleProvider } from "./Context/ArticleContext.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <ArticleProvider>
            <Navigation />
            <Switch>
              <Route path="/" exact component={MainPage} />
            </Switch>
            <Switch>
              <Route path="/Blog" component={Blog} />
            </Switch>
            <Switch>
              <Route path="/Article/" component={Article} />
            </Switch>
            <Switch>
              <Route path="/Authentication" component={Authentication} />
            </Switch>
            <Switch>
              <Route path="/Comments" component={YourComments} />
            </Switch>
            <Switch>
              <Route path="/Settings" component={Settings} />
            </Switch>
          </ArticleProvider>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
