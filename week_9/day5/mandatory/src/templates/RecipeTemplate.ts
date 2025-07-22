export default class RecipeTemplate {
    static render(recipe: { id: string; title: string; ingredients: string[]; instructions: string; isFavorite: boolean }): string {
        return `
            <div class="recipe" data-id="${recipe.id}">
                <h2>${recipe.title}</h2>
                <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                <button class="favorite-btn">${recipe.isFavorite ? 'Unfavorite' : 'Favorite'}</button>
            </div>
        `;
    }
}