import { useSelector } from "react-redux";
import { NoteCard} from "./NoteCard";
import { selectNotes } from "../api/selectors";

export const NotesList = () => {
        const notes = useSelector(selectNotes);//??
        
        console.log("NotesList - notes:", notes);

        return (
        <div>
            <h2>Список нотаток</h2>
            {notes.map((note) => (
                <NoteCard key={note.id} note={note} />
            ))}

        </div>
        );
};