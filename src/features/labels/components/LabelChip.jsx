export const LabelChip = ({ label }) => {
    return (
        <div className="inline-flex 
        items-center 
        rounded-full 
        bg-gray-200 
        p-2
        text-xs  
        font-medium 
        text-gray-800
        shadow-sm
        hover:bg-gray-300
        transition">
            {label.name}
        </div>
    );
};

//label = {id: 1, name: "Work", userId: 1, created_at: "2024-06-10T12:34:56.789Z"}
//label.name = "Work"