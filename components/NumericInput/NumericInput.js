import { InputLabel, TextField } from "@mui/material";

export default function NumericInput({
  label,
  id,
  placeholder,
  type,
  validation,
}) {
  return (
    <div className="container">
      <InputLabel htmlFor={`${label}-input`}>{label}</InputLabel>
      <TextField
        id={id}
        label={placeholder}
        type={type}
        onChange={(e, key) => {
          validation(e, key);
        }}
        variant="outlined"
        sx={{
          width: "100%",
          borderRadius: "4px",
        }}
        inputProps={{ inputMode: "numeric", pattern: /[0-9]*/ }}
        // Code to prevent user from typing anything other than a numeric value
        //   It is commented out because backspace, enter doesnot work
        onKeyDown={(e) => {
          console.log(e.keyCode);
          // keyCode is deprecated, perhaps we can use the key attribute to achieve the same result
          if (
            !(
              (e.keyCode >= 48 && e.keyCode <= 57) ||
              e.keyCode == 8 ||
              e.keyCode == 13 ||
              e.keyCode == 17 ||
              e.keyCode == 16 ||
              e.keyCode == 9
            )
          ) {
            e.preventDefault();
          }
        }}
      />
    </div>
  );
}
