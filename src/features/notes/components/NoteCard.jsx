import { useDispatch } from "react-redux";
import { deleteNote, updateNote } from "../api/notesApi";
import { useState } from "react";
import { Button } from "../../../shared/ui/Button";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export const NoteCard = ({ note }) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = () => {
        dispatch(deleteNote(note.id));
    }
    const handleSave = () => {
        console.log("Saving note:", note.id, title, content);

        dispatch(updateNote({
            id: note.id,
            title,
            content,
        }))
        setIsEditing(false);
    }

    return ( 
        <div>
            {isEditing ? (
                <> 
                    <input type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Заголовок" />

                    <textarea 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    placeholder="Вміст" />
        
                    <button onClick={handleSave}>Зберегти</button>

                </>
            ) : (
                <div className="
                flex 
                flex-col 
                gap-3 
                bg-white/90
                border-1 
                border-gray-300 
                rounded-lg  
                max-w-[240px] 
                max-h-[350px]
                min-h-12
                py-3 px-5 
                text-[15px]
                text-gray-800
                hover:shadow-[0_0_12px_rgba(0,0,0,0.1)]
                break-words
                transition">
                    {note.title && (
                        <h3 className="text-lg font-semibold text-gray-900">{note.title}</h3>
                    )}
                    {note.content && (
                        <p className="leading-6 text-gray-700 whitespace-pre-wrap max-h-[240px] overflow-hidden">{note.content}</p>
                    )}
                    <div className="flex justify-end gap-2">
                        <Button onClick={() => setIsEditing(true)} variant="icon"><MdEdit size={15}/></Button>
                        <Button onClick={handleDelete} variant="icon"><MdDelete size={15}/></Button>
                    </div>
                    
                </div>
            )}
            
        </div>
    );
}