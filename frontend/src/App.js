
import { BrowserRouter, Switch,Route } from "react-router-dom";
import injectContext from './store/appContext';

import Layout from './views/Layout';
import ViewAbout from './views/ViewAbout';
import ViewService from './views/ViewService';
import ViewProject from './views/ViewProject';
import ViewTeam from './views/ViewTeam';
import ViewBlog from './views/ViewBlog';
import ViewContact from './views/ViewContact';
import ViewGServicio from './views/ViewGServicio';
import ViewGProyecto from './views/ViewGProyecto';
import ViewGestionar from './views/ViewGestionar';
import HeaderStart from "./components/HeaderStart";
import Menu from "./components/Menu";

function App (props) {

    return  (
        <BrowserRouter>
            <HeaderStart />
            <Menu/>
            <Switch>
                <Route exact path='/' component={Layout}/>
                <Route exact path='/about' component={ViewAbout}/>
                <Route exact path='/service' component={ViewService}/>
                <Route exact path='/project' component={ViewProject}/>
                <Route exact path='/team' component={ViewTeam}/>
                <Route exact path='/blog' component={ViewBlog}/>
                <Route exact path='/contact' component={ViewContact}/>
                <Route exact path='/gservice' component={ViewGServicio}/>
                <Route exact path='/gproyecto' component={ViewGProyecto}/>
                <Route exact path='/gestionar' component={ViewGestionar}/>
            </Switch>
        </BrowserRouter>
    );
}
export default injectContext(App);