import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { fetchData } from "../api/api";

const DataFetcher = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.data
  );

  const [dataForm, setDataForm] = useState({
    name: "",
    nombre: 0,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${dataForm.name}&number=${dataForm.nombre}&apiKey=dcf67ac8dc5d43a3a195d02f7feff18e`;
    dispatch(fetchData(url));
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h1>Recette</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(event) => {
            setDataForm({
              ...dataForm,
              name: (event.target as HTMLInputElement).value,
            });
          }}
        />
        <br />
        <label htmlFor="nombre">Combien ?</label>
        <input
          type="number"
          id="nombre"
          name="nombre"
          onChange={(event) => {
            setDataForm({
              ...dataForm,
              nombre: parseInt((event.target as HTMLInputElement).value, 10),
            });
          }}
        />
        <br />
        <button>Recherche</button>
      </form>

      {data && data.results && (
        <div>
          {data.results.map((recipe: any) => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default DataFetcher;
