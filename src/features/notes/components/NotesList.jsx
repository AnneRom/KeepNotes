import { useSelector } from "react-redux";
import { NoteCard} from "./NoteCard";
import { selectNotes } from "../api/selectors";

export const NotesList = () => {
        const notes = useSelector(selectNotes);//стан items = []
        
        console.log("NotesList - notes:", notes);

        return (
        <div className="max-w-[1296px] mx-auto columns-[240px] gap-4 space-y-4">
            {notes.map((note) => (
                <NoteCard key={note.id} note={note} />
            ))}

        </div>
        );
};