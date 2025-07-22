import RecipeItem from './model/RecipeItem';
import RecipeCollection from './model/RecipeCollection';
import RecipeTemplate from './templates/RecipeTemplate';
import './style.css';

(document.getElementById('app') as HTMLElement)!.innerHTML = `
  <div class="recipe-app">
    <form id="recipeEntryForm">
      <input type="text" id="recipeTitle" placeholder="Titre de la recette" required />
      <textarea id="ingredients" placeholder="Ingrédients (un par ligne)" required></textarea>
      <textarea id="instructions" placeholder="Instructions de préparation" required></textarea>
      <button type="submit">Ajouter la recette</button>
    </form>

    <div id="recipeContainer"></div>

    <button id="clearRecipesButton">Supprimer toutes les recettes</button>
  </div>
`;

const recipeCollection = new RecipeCollection();
const recipeContainer = document.getElementById('recipeContainer') as HTMLElement;

function renderRecipes() {
  recipeContainer.innerHTML = '';
  const recipes = recipeCollection.getRecipes();
  recipes.forEach(recipe => {
    recipeContainer.innerHTML += RecipeTemplate.render(recipe);
  });
}

renderRecipes();

const form = document.getElementById('recipeEntryForm') as HTMLFormElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = (document.getElementById('recipeTitle') as HTMLInputElement).value.trim();
  const ingredientsText = (document.getElementById('ingredients') as HTMLTextAreaElement).value.trim();
  const instructions = (document.getElementById('instructions') as HTMLTextAreaElement).value.trim();

  if (!title || !ingredientsText || !instructions) return;

  const ingredients = ingredientsText.split('\n').map(line => line.trim()).filter(line => line !== '');

  const newRecipe = new RecipeItem(title, ingredients, instructions);
  recipeCollection.addRecipe(newRecipe);

  form.reset();
  renderRecipes();
});

const clearButton = document.getElementById('clearRecipesButton') as HTMLButtonElement;

clearButton.addEventListener('click', () => {
  if (confirm("Voulez-vous vraiment supprimer toutes les recettes ?")) {
    recipeCollection.clearAll();
    renderRecipes();
  }
});

document.getElementById('recipeContainer')!.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;

  if (target.classList.contains('favorite-btn')) {
    const recipeElement = target.closest('.recipe') as HTMLElement;
    const id = recipeElement.dataset.id!;
    recipeCollection.favoriteRecipe(id);
    renderRecipes();
  }
});
