
export default function FormInput({ formData, setFormData, setDisplay }) {



    const handelChange = (e) => {
        const { name, value, type, checked } = e.target;
        setDisplay(false);
        if (type === "checkbox") {
            setFormData(prevData => ({
                ...prevData,
                dietary: {
                    ...prevData.dietary,
                    [value]: checked
                }
            }));
        }
        else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    }
    let style = {
        width: "30%",
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ccc"
    };
    return (
        <>
            <form className="form" style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#DEB887" }}>
                <input type="text" name="firstName" placeholder="First Name" style={style} onChange={handelChange} value={formData.firstName} />
                <br />
                <input type="text" name="lastName" placeholder="Last Name" style={style} onChange={handelChange} value={formData.lastName} />
                <br />
                <input type="number" name="age" placeholder="Age" style={style} onChange={handelChange} value={formData.age} />
                <br />
                <input type="radio" name="gender" value="male" onChange={handelChange} />Male
                <br />
                <input type="radio" name="gender" value="female" onChange={handelChange} />Female
                <br />
                <p style={{ marginBottom: "0px" }}>Select your country:</p>
                <br />
                <select
                    name="country"
                    style={{ ...style, margin: "0px" }}
                    defaultValue="USA"
                    onChange={handelChange}
                >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                </select>

                <p style={{ marginBottom: "0px" }}>Dietary restrictions:</p>
                <br />
                <input type="checkbox" name="dietary" value="nutFree" onChange={handelChange} />Nut Free
                <br />
                <input type="checkbox" name="dietary" value="lactoseFree" onChange={handelChange} />Lactose Free
                <br />
                <input type="checkbox" name="dietary" value="vegan" onChange={handelChange} />Vegan
                <br />
                <button type="button" style={{ padding: "8px 20px", margin: "10px", fontSize: "15px", fontWeight: "bold" }} 
                onClick={(e) => {
                    e.preventDefault();
                     setDisplay(true)

                 }}>Submit</button>

            </form>
        </>
    )
}