import { InputLabel, TextField } from "@mui/material";
export default function TextInput({
  label,
  id,
  placeholder,
  type,
  validation,
  required,
}) {
  return (
    <div className="container">
      <InputLabel htmlFor={`${label}-input`}>{label}</InputLabel>
      <TextField
        autoComplete="on"
        id={id}
        label={placeholder}
        type={type}
        name={type}
        onChange={(e, key) => {
          validation(e, key);
        }}
        variant="outlined"
        sx={{
          width: "100%",
          borderRadius: "4px",
        }}
        required={required}
      />
    </div>
  );
}
