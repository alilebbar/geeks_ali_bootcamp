import "./App.css";

function App() {
  const postData = async () => {
    try {
        const response = await fetch(
        "https://webhook.site/6a806ad9-8480-455f-91cd-ae26aabbc593",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            key1: "myusername",
            email: "mymail@gmail.com",
            name: "Isaac",
            lastname: "Doe",
            age: 27,
          }),
        }
      );
    const result = await response.json();
    console.log("Réponse du serveur :", result);
      
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
    }
  };
  return (
  <div>
    <button onClick={postData}>click to press data</button>
  </div>
  );
}

export default App;
