/* import React from 'react';
import { Switch } from 'react-router';
import { PublicRoute } from './helperRoutes';
import { Redirect } from 'react-router';


import Layout from '../views/Layout';
import ViewAbout from '../views/ViewAbout';
import ViewService from '../views/ViewService';
import ViewProject from '../views/ViewProject';
import ViewTeam from '../views/ViewTeam';
import ViewBlog from '../views/ViewBlog';
import ViewContact from '../views/ViewContact';
import ViewGServicio from '../views/ViewGServicio';
import ViewGProyecto from '../views/ViewGProyecto';
import ViewGestionar from '../views/ViewGestionar';


const PublicRoutes = () => {
    return (
        <Switch>
            <PublicRoute exact path='/' component={Layout}/>
            <PublicRoute exact path='/about' component={ViewAbout}/>
            <PublicRoute exact path='/service' component={ViewService}/>
            <PublicRoute exact path='/project' component={ViewProject}/>
            <PublicRoute exact path='/team' component={ViewTeam}/>
            <PublicRoute exact path='/blog' component={ViewBlog}/>
            <PublicRoute exact path='/contact' component={ViewContact}/>
            <PublicRoute exact path='/gservice' component={ViewGServicio}/>
            <PublicRoute exact path='/gproyecto' component={ViewGProyecto}/>
            <PublicRoute exact path='/gestionar' component={ViewGestionar}/>
            {/* Redirect when the url is incorrect */}
            <Redirect path='**' to='/'/>
        </Switch>
    );
}

export default PublicRoutes; */