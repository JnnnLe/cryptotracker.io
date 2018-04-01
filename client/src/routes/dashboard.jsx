import Dashboard from 'views/Dashboard/Dashboard.jsx';
import CoinSearch from 'views/CoinSearch/CoinSearch.jsx';
import Portfolio from 'views/Portfolio/Portfolio.jsx';
import Converter from 'views/Converter/Converter.jsx';

var dashRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "design_app", component: Dashboard },
    { path: "/lookup", name: "Coin Lookup", icon: "business_bulb-63", component: CoinSearch },
    { path: "/portfolio", name: "Portfolio", icon: "business_chart-bar-32", component: Portfolio },
    { path: "/converter", name: "Conversion Calculator", icon: "business_money-coins", component: Converter},
    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" },
];

export default dashRoutes;
