import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import { useForm } from "../../../hooks/useForm";
import api from "../../../services/api";
import FormField from "../../../components/FormField";
import { DefaultButton } from "../../../components/Button";
import categoriasRepository from "../../../repositories/categorias";
import { ToastContainer } from "react-toastify";
import { Error, Sucess } from "../../../components/Toastify";

function CadastroVideo() {
  const history = useHistory();
  const colorDefault = "#6969da";
  const [categorias, setCategorias] = useState([]);
  const titlesCategory = categorias.map(({ titulo }) => titulo);
  const { values, handleChange, clearForm } = useForm({
    titulo: "",
    url: "",
    categoria: "",
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, [values.categoria]);

  async function handleSubmit(e) {
    e.preventDefault();
    let count = 0;

    const { titulo, url, categoria, color } = values;

    if (titulo === "") {
      Error("⚠️ Digite um Título para o vídeo!");
      count++;
    }
    if (url === "") {
      Error("⚠️ Digite uma URL para o vídeo!");
      count++;
    }
    if (categoria === "") {
      Error("⚠️ Escolha uma categoria para o vídeo!");
      count++;
    }
    if (count > 0) return;

    const { id } = categorias.find((cat) => cat.titulo === categoria);

    const data = {
      titulo,
      url,
      categoriaId: id,
    };

    await api.post("videos", data);

    clearForm();
    Sucess("✅ Vídeo cadastrado com Sucesso!", () => history.push("/"));
  }

  return (
    <PageDefault>
      <h1 style={{ color: colorDefault }}>Cadastro de Vídeo</h1>

      <form>
        <FormField
          Color={colorDefault}
          label="Título do Vídeo"
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          Color={colorDefault}
          label="URL"
          name="url"
          type="text"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          Color={colorDefault}
          label="Categoria do vídeo"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={titlesCategory}
        />

        <DefaultButton
          Color={colorDefault}
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Cadastrar
        </DefaultButton>

        <DefaultButton
          Color={colorDefault}
          type="submit"
          style={{ marginLeft: "15px" }}
        >
          <Link to="/cadastro/categoria" style={{ textDecoration: "none" }}>
            Criar categoria
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

      <br />
      <br />
    </PageDefault>
  );
}

export default CadastroVideo;
