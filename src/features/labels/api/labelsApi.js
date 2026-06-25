import { supabase } from "../../../shared/api/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";


// READ
export const fetchLabels = createAsyncThunk(
  "labels/fetchLabels",
  async ( _, thunkAPI) => {
    try {
    const { data, error} = await supabase
        .from("labels")
        .select("*")
        .order("created_at", { ascending: false });
    
      if (error) throw error;

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// CREATE
export const createLabel = createAsyncThunk(
  "labels/createLabel",
  async ({name, userId}, thunkAPI) => {
    try {
    const { data, error} = await supabase
        .from("labels")
        .insert([
            {
                name,
                user_id: userId,
            }
        ])
        .select();
    
      if (error) throw error;

      return data[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addLabelToNote = createAsyncThunk(
    "labels/addLabelToNote",
    async ({noteId, labelId}, thunkAPI) => {
        try {
        const { data, error} = await supabase
            .from("note_labels")
            .insert([
                {
                    note_id: noteId,
                    label_id: labelId,
                }
            ])
            .select();
        
        if (error) throw error;

        return data[0];
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);