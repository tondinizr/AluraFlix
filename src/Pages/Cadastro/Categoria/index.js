import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Carregando from "../../../components/Loading";
import { DefaultButton } from "../../../components/Button";

function CadastroCategoria() {
  const [listaCategorias, setListaCategorias] = useState([]);
  const ValoresIniciais = {
    titulo: "",
    descricao: "",
    cor: "#6969da",
    id: "",
  };
  const [categoria, setCategoria] = useState(ValoresIniciais);

  function handleChange(e) {
    let name = e.target.getAttribute("name");
    const { value } = e.target;
    setCategoria({
      ...categoria,
      [name]: value,
    });
  }

  useEffect(() => {
    const URL = window.location.hostname.includes("http://localhost/")
      ? "http://localhost:8080/categorias"
      : "https://backend-tonflix.herokuapp.com/categorias";
    fetch(URL).then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        console.log(resposta);
        setListaCategorias(resposta);
        return;
      }
      throw new Error("Não foi possível pegar os dados");
    });
  }, []);

  return (
    <PageDefault>
      <h1 style={{ color: categoria.cor }}>Cadastro de Categoria</h1>
      <form>
        <FormField
          Color={categoria.cor}
          label="Título da Categoria:"
          type="text"
          name="titulo"
          text
          value={categoria.titulo}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <FormField
          Color={categoria.cor}
          textArea
          label="Descrição:"
          type="text"
          name="descricao"
          value={categoria.descricao}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <FormField
          Color={categoria.cor}
          Padding="4px 16px"
          Height="48px"
          label="cor:"
          type="color"
          name="cor"
          value={categoria.cor}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <DefaultButton
          Color={categoria.cor}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (categoria.titulo === "") {
              return;
            } else {
              if (listaCategorias[0] === "") {
                setListaCategorias([categoria]);
              } else {
                setListaCategorias([...listaCategorias, categoria]);
              }
              setCategoria(ValoresIniciais);
            }
          }}
        >
          Cadastrar
        </DefaultButton>
      </form>

      {listaCategorias.length > 0 ? (
        <table>
          <tbody>
            <tr>
              <td>Título da categoria</td>
              <td>Descrição</td>
              <td>Cor</td>
            </tr>
            {listaCategorias.map((novaCategoria, indice) => {
              return (
                <tr key={novaCategoria.id}>
                  <td>{novaCategoria.titulo}</td>
                  <td>{novaCategoria.descricao}</td>
                  <td>
                    <b
                      style={{
                        color: novaCategoria.cor,
                      }}
                    >
                      {novaCategoria.cor}
                    </b>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Carregando Cor={categoria.cor} />
      )}

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
