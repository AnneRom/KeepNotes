import { useState } from "react";
import { LabelPicker } from "../../labels/components/LabelPicker";
import { Button } from "../../../shared/ui/Button";

export const NoteMenu = () => {
    const [showPicker, setShowPicker] = useState(false);

    return (
        <div className="
        bg-white
        w-40
        border
        border-gray-300
        z-50
        ">
            {showPicker && (
                <LabelPicker />
            )}

            {!showPicker && (
                <Button onClick={() => setShowPicker(true)} className="w-full">Add Label</Button>
            )}

        </div>
    );
}