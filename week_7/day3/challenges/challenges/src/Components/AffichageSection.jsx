

export default function AffichageSection({ formData, display }) {
    console.log(formData);
    console.log(display);
    return (
        <>
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#1E5555", color: "white" }}>
                <h2>Entered information:</h2>
                <p><strong>Your First Name:</strong> {display?formData.firstName:""} </p>
                <p><strong>Your Last Name:</strong> {display?formData.lastName:""} </p>
                <p><strong>Your Age:</strong> {display?formData.age:""} </p>
                <p><strong>Your Gender:</strong> {display?formData.gender:""}</p>
                <p><strong>Your Destination:</strong> {display?formData.country:""}</p>
                <p><strong>Your Dietary restrictions:</strong></p>
                <ul>
                    <li>**Nut Free : {display?(formData.dietary.nutFree ? "yes" : "no"):""}</li>
                    <li>**Lactose Free : {display?(formData.dietary.lactoseFree ? "yes" : "no"):""}</li>
                    <li>**Vegan : {display?(formData.dietary.vegan ? "yes" : "no"):""}</li>
                </ul>
            </div>
        </>
    )
}