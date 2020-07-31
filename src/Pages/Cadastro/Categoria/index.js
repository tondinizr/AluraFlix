import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Carregando from "../../../components/Loading";
import { DefaultButton } from "../../../components/Button";
import { useForm } from "../../../hooks/useForm";
import categoriasRepository from "../../../repositories/categorias";
import api from "../../../services/api";
import { ToastContainer } from "react-toastify";
import { Error, Sucess } from "../../../components/Toastify";

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: "",
    cor: "#6969da",
    link_text: "",
    link_url: "",
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  async function handleSubmit(e) {
    e.preventDefault();
    let count = 0;

    const { titulo, cor, link_text, link_url } = values;
    if (titulo === "") {
      Error("⚠️ Digite um Título para a categoria!");
      count++;
    }
    if (cor === "") {
      Error("⚠️ Digite uma Cor para a categoria!");
      count++;
    }

    if (count > 0) return;

    const data = {
      titulo,
      cor,
      link_extra: {
        text: link_text,
        url: link_url,
      },
    };

    try {
      const response = await api.post("categorias", data);
      console.log(response);
      clearForm();
      Sucess("✅ Categoria cadastrado com Sucesso!");
      setCount(count + 1);
    } catch (err) {
      Error("⚠️ Ocorreu um erro");
    }
  }

  const [categorias, setCategorias] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, [count]);

  return (
    <PageDefault>
      <h1 style={{ color: values.cor }}>Cadastro de Categoria</h1>
      <form>
        <FormField
          Color={values.cor}
          label="Título da Categoria:"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <FormField
          Color={values.cor}
          textArea
          label="Descrição (Opcional):"
          type="text"
          name="link_text"
          value={values.link_text}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <FormField
          Color={values.cor}
          label="Link para o conteúdo (Opcional):"
          type="text"
          name="link_url"
          value={values.link_url}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <FormField
          Color={values.cor}
          Padding="4px 16px"
          Height="48px"
          label="cor:"
          type="color"
          name="cor"
          value={values.cor}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <DefaultButton
          Color={values.cor}
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Cadastrar
        </DefaultButton>

        <DefaultButton
          Color={values.cor}
          type="submit"
          style={{ marginLeft: "15px" }}
        >
          <Link to="/cadastro/video" style={{ textDecoration: "none" }}>
            Cadastrar Vídeo
          </Link>
        </DefaultButton>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {categorias.length > 0 ? (
        <table>
          <tbody>
            <tr>
              <td>Título da categoria</td>
              <td>Descrição</td>
              <td>Cor</td>
            </tr>
            {categorias.map((novaCategoria, indice) => {
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
        <Carregando Cor={values.cor} />
      )}
    </PageDefault>
  );
}

export default CadastroCategoria;
