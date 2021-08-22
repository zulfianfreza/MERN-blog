import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Footer, Header } from '../../component';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
import './MainApp.scss'

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <Header />
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/create-blog/:id?">
                            <CreateBlog />
                        </Route>
                        <Route path="/detail-blog/:id">
                            <DetailBlog />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    )
}

export default MainApp
