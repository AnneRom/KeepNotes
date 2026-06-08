import { useEffect, useState, useRef } from "react";
import { Button } from "../../../shared/ui/Button";

export const NoteModal = ({ 
    title,
    content,
    setTitle,
    setContent,
    onSave,
    onClose,
 }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                setIsEditing(false);
            }
        };

        window.addEventListener("keydown", handleEsc);
        
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [])

    const resizeTextarea = () => {
    const textarea = contentRef.current;

    if (!textarea) return;

    textarea.style.height = "auto";

    const maxHeight = window.innerHeight * 0.5; 

    // textarea.style.height = textarea.scrollHeight + "px";
    
    textarea.style.height = `${Math.min(
        textarea.scrollHeight,
        maxHeight
    )}px`;

    textarea.style.overflowY =
        textarea.scrollHeight > maxHeight
            ? "auto"
            : "hidden";

    };
    const handleContentChange = (e) => {
    setContent(e.target.value);

    requestAnimationFrame(() => {
        resizeTextarea();
    });
    };

    useEffect(() => {
        if (isEditing && contentRef.current) {
            requestAnimationFrame(() => {
                const content = contentRef.current;
    
                resizeTextarea();
    
                content.focus();
    
                const length = content.value.length;
    
                content.setSelectionRange(length, length);
                content.scrollTop = content.scrollHeight;
            });
        }
    }, [isEditing]);



 }