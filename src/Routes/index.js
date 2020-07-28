import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import CadastroVideo from "../Pages/Cadastro/Video";
import CadastroCategoria from "../Pages/Cadastro/Categoria";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route
        component={() => (
          <div>
            <h1>Página Não Encontrada</h1>
          </div>
        )}
      />
    </Switch>
  );
};
export default Routes;
