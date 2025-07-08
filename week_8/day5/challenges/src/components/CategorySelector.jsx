import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  removeCategory,
  editCategory,
} from "../features/categoriesSlice";
import { useState, useCallback } from "react";
import  TasksList  from "./TasksList";
const CategorySelector = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories) || [];
  const [formView, setFormView] = useState(false);
  const [clickedButton, setClickedButton] = useState(false);
  const [id, setId] = useState(null);
  const [name, setName] = useState("");

  const handleAddCategory = useCallback(
    (event) => {
      event.preventDefault();
      if (name.trim() === "") return; // Pour éviter d’ajouter une catégorie vide
      dispatch(addCategory({ name: name.trim() }));
      setName(""); // Reset input
      setFormView(false); // Ferme le formulaire
    },
    [dispatch, name]
  );

  const handleRemoveCategory = useCallback(() => {
    dispatch(removeCategory({ id }));
  }, [dispatch, id]);
  const handleEditCategory = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(editCategory({ id: id, name: name.trim() }));
      setName(""); // Reset input
      setFormView(false); // Ferme le formulaire
    },
    [dispatch, id, name]
  );
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" ,gap:"20px"}}>
        <div>
          <div>
            <button
              onClick={() => {
                setClickedButton(true);
                setFormView(true);
              }}
            >
              Add Category
            </button>
            <button onClick={handleRemoveCategory}>Remove Category</button>
            <button
              onClick={() => {
                setFormView(true);
                setClickedButton(false);
              }}
            >
              Edit Category
            </button>
            {formView ? (
              <form
                onSubmit={
                  clickedButton ? handleAddCategory : handleEditCategory
                }
              >
                <input
                  type="text"
                  placeholder="Category name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {clickedButton ? (
                  <button type="submit">Add Category</button>
                ) : (
                  <button type="submit">Edit Category</button>
                )}
                <button onClick={() => setFormView(false)}>Cancel</button>
              </form>
            ) : null}
          </div>
          {categories
            ? categories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => {
                    setId(category.id);
                    setName(category.name);
                  }}
                  style={{
                    cursor: "pointer",
                    backgroundColor: id === category.id ? "#007bff" : "#F9F9F9",
                    color: id === category.id ? "#fff" : "black",
                    textAlign: "left",
                    padding: "5px",
                  }}
                >
                  {category.name}
                </div>
              ))
            : null}
        </div>
        <div>
        <TasksList idCategory={id} />
        </div>
      </div>
    </>
  );
};

export default CategorySelector;
