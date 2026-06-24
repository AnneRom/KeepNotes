export const LabelChip = ({ label }) => {
    return (
        <div>
            {label.name}
        </div>
    );
};

//label = {id: 1, name: "Work", userId: 1, created_at: "2024-06-10T12:34:56.789Z"}
//label.name = "Work"