import RecipeItem from "./RecipeItem";
export default class RecipeCollection {
  private recipes: RecipeItem[];

  constructor() {
    if (localStorage.getItem("recipes")) {
      this.recipes = JSON.parse(localStorage.getItem("recipes") || "[]");
    } else {
      this.recipes = [];
    }
  }

  addRecipe(recipe: RecipeItem): void {
    this.recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(this.recipes));
  }

  getRecipes(): RecipeItem[] {
    return this.recipes;
  }
  favoriteRecipe(id: string): void {
    const recipe = this.findRecipeById(id);
    if (recipe) {
      recipe.isFavorite = !recipe.isFavorite;
      localStorage.setItem("recipes", JSON.stringify(this.recipes));
    }
  }

  findRecipeById(id: string): RecipeItem | undefined {
    return this.recipes.find((recipe) => recipe.id === id);
  }

  removeRecipeById(id: string): void {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
    localStorage.setItem("recipes", JSON.stringify(this.recipes));
  }
  clearAll(): void {
    this.recipes = [];
    localStorage.removeItem("recipes");
  }
}
