interface PropType {
     placeholder: string;
     onChange?: (e: any) => void;
}

export function TextInput({
    placeholder, 
    onChange
    
}: PropType) {
  return (
    <input
      type="text"
      style={{
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "100%",
        boxSizing: "border-box",
        marginBottom: "10px",
      }}
     placeholder={placeholder}
    //  onChange={onChange}
    >

    </input>
  );
}