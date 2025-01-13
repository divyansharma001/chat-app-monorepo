type PropType = {
     placeholder: string;
}

export function TextInput({
    placeholder,
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
      }}
     placeholder={placeholder}
    />
  );
}