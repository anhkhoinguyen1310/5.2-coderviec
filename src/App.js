import Navbar from './component/Navbar';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import BlogPage from './pages/BlogPage';
import Jobdetail from './pages/Jobdetail';
import FourOhFour from './pages/404Page';



function App() {  
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/job" exact component={Jobdetail} />
        <Route path="/home" component={Homepage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/*" exact component={ FourOhFour } />
      </Switch>
    </div>
  )
}

 

export default App;
