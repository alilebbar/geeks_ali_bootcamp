import "./App.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addEvent,
  editEvent,
  deleteEvent,
  deleteAll,
} from "./features/calendrierSlice/calendrierSlice";

function App() {
  const date = useRef();
  const event = useRef();
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((state) => state.calendrier);
  console.log(data);
  useEffect(() => {
    console.log("Tous les événements:", data);
  }, [data]);
  const send = () => {
    console.log(date.current.value);
    console.log(event.current.value);
    dispatch(
      addEvent({ date: date.current.value, evenement: event.current.value })
    );
  };
const modifierEvent = (id) => {
  dispatch(editEvent({ id: id, evenement: editedText }));
  setEditingId(null); // désactiver le mode édition
};

  const supprimezEvent = (id) => {
    dispatch(deleteEvent({ id: id }));
  };
  const supprimerTout = () => {
    dispatch(deleteAll());
  };
  return (
    <>
      <h1>Calendrier</h1>
      <label htmlFor="date">Choix de date :</label>
      <br />
      <input type="date" name="date" ref={date} />
      <br />
      <label htmlFor="event"> Evenement :</label>
      <br />
      <input type="text" name="event" ref={event} />
      <br />
      <button onClick={send}>Ajouter</button>
     <ul>
  {data.map((e) => (
    <li key={e.id}>
      {e.date} :
      {editingId === e.id ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(ev) => setEditedText(ev.target.value)}
          />
          <button onClick={() => modifierEvent(e.id)}>valider</button>
        </>
      ) : (
        <>
          {e.evenement}
          <button
            onClick={() => {
              setEditingId(e.id);
              setEditedText(e.evenement); // pré-remplir le champ
            }}
          >
            modifier
          </button>
        </>
      )}
      <button onClick={() => supprimezEvent(e.id)}>supprimer</button>
    </li>
  ))}
</ul>

      <button onClick={supprimerTout}> supprimer tout </button>
    </>
  );
}

export default App;
