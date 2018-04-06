import Dashboard from 'views/Dashboard/Dashboard.jsx';
import CoinSearch from 'views/CoinSearch/CoinSearch.jsx';
import Portfolio from 'views/Portfolio/Portfolio.jsx';
import Converter from 'views/Converter/Converter.jsx';
import Home from 'views/Home/Home.jsx';
import About from 'views/About/About.jsx';

var dashRoutes = [
    { path: "/home", name: "Home", icon: "business_globe", component: Home },
    { path: "/dashboard", name: "Dashboard", icon: "design_app", component: Dashboard },
    { path: "/lookup", name: "Coin Lookup", icon: "business_bulb-63", component: CoinSearch },
    { path: "/portfolio", name: "Portfolio", icon: "business_chart-bar-32", component: Portfolio },
    { path: "/converter", name: "Conversion Calculator", icon: "business_money-coins", component: Converter },
    { path: "/about", name: "About Us", icon: "users_single-02", component: About },
    { redirect: true, path: "/", pathTo: "/home" }
];

export default dashRoutes;
