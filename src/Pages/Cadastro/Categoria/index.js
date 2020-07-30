import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import { DefaultButton } from "../../../components/Button";

function CadastroCategoria() {
  const [listaCategorias, setListaCategorias] = useState([]);
  const ValoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#6969da",
  };
  const [categoria, setCategoria] = useState(ValoresIniciais);

  function handleChange(e) {
    const name = e.target.getAttribute("name");
    const { value } = e.target;
    setCategoria({
      ...categoria,
      [name]: value,
    });
  }

  return (
    <PageDefault>
      <h1 style={{ color: categoria.cor }}>Cadastro de Categoria</h1>

      <form>
        <FormField
          Color={categoria.cor}
          label="Nome da Categoria:"
          type="text"
          name="nome"
          text
          value={categoria.nome}
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
            if (categoria.nome === "") {
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

      <table>
        <tbody>
          <tr>
            <td>Nome da categoria</td>
            <td>Descrição</td>
            <td>Cor</td>
          </tr>

          {listaCategorias.map((novaCategoria, indice) => {
            return (
              <tr key={`Linha${indice}`}>
                <td>{novaCategoria.nome}</td>
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

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
