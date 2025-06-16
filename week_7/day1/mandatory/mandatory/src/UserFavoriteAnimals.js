

export default function UserFavoriteAnimals({ favAnimals }) {
    return (
        <div>
        <h2>My Favorite Animals</h2>
        <ul>
            {favAnimals.map((animal, index) => (
            <li key={index}>{animal}</li>
            ))}
        </ul>
        </div>
    );
}