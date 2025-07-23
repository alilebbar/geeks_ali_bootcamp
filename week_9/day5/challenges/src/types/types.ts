export interface Recipe {
  id: number;
  title: string;
  image: string;
}

export interface RecipesResponse {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}
