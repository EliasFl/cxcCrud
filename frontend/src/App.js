import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./../node_modules/bulma/css/bulma.min.css";

import ClientsPage from "./pages/ClientsPage";
import DocumentsPage from "./pages/DocumentsPage";
import TransactionsPage from "./pages/TransactionsPage";
import SeatsPage from "./pages/SeatsPage";

function App() {
  return (
    <Router>
      <nav
        class="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item">CXC Flores</a>
        </div>

        <ul className="navbar-menu navbar-end">
          <li class="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li class="navbar-item">
            <Link to="/clients">Clients</Link>
          </li>
          <li class="navbar-item">
            <Link to="/documents">Documents</Link>
          </li>
          <li class="navbar-item">
            <Link to="/transactions">Transactions</Link>
          </li>
          <li class="navbar-item">
            <Link to="/seats">Seats</Link>
          </li>
        </ul>
      </nav>
      <section class="section">
        <div class="container">
          <Switch>
            <Route path="/">
              <ClientsPage />
            </Route>
            <Route path="/documents">
              <DocumentsPage />
            </Route>
            <Route path="/seats">
              <SeatsPage />
            </Route>
            <Route path="/transactions">
              <TransactionsPage />
            </Route>
          </Switch>
        </div>
      </section>
    </Router>
  );
}

export default App;
