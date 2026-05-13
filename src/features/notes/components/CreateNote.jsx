import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../auth/api/selectors";
import { createNote } from "../api/notesApi";

export const CreateNote = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleSubmit = () => {
        if (title.trim() === "" || content.trim() === "") {
            alert("Будь ласка, заповніть всі поля");
            return;
        }
        dispatch(createNote({
            title,
            content,
            userId: user.id
        }))

        setTitle("");
        setContent("");
    };

    return (
        <div className="
            flex justify-between gap-3 
            max-w-2xl 
            h-14
            mx-auto 
            mt-8 mb-4
            bg-white/90 
            py-3 px-5 
            rounded-lg 
            text-[15px]
            shadow
            hover:shadow-md 
            hover:bg-white/100 
            transition">
                <input type="text" 
                    placeholder="Заголовок..." 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="outline-none bg-transparent"/>

                <textarea 
                    placeholder="Вміст..." 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="outline-none bg-transparent resize-none hidden"/>

                <button onClick={handleSubmit} className="flex content-center items-center rounded px-6 py-2 text-[15px] hover:bg-gray-200">Створити нотатку</button> 
        </div>
    );
};