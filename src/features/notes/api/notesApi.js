import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../supabaseClient";

//READ notes
export const fetchNotes = createAsyncThunk(
    "notes/fetchNotes",
    async (_, thunkAPI) => {
        try {
            const { data, error } = await supabase
                .from("notes")
                .select("*")
                .order("created_at", { ascending: false });
                
            if (error) throw error;

            return data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

//CREATE note
export const createNote = createAsyncThunk(
    "notes/createNote",
    async ({ title, content, userId }, thunkAPI) => {
        try {
            const { data, error } = await supabase
                .from("notes")
                .insert ([
                    {
                        title,
                        content,
                        user_id: userId,
                    },
                ]) 
                .select();
    
            if (error) throw error;

            return data[0];
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }

    }
)

//DELETE note
export const deleteNote = createAsyncThunk(
    "notes/deleteNote",
    async (noteId, thunkAPI) => {
         try {
            const { error } = await supabase
                .from("notes")
                .delete()
                .eq("id", noteId);
    
            if (error) throw error;

            return noteId;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)