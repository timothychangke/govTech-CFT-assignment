import { TextField } from '@mui/material'

const TextInput = ({ handleInputChange, error, input, inputText }) => {
  return (
    <TextField
      label={inputText}
      variant="outlined"
      value={input}
      onChange={handleInputChange}
      error={error}
      helperText={error}
      fullWidth
      sx={{ mb: 2 }}
    />
  )
}

export default TextInput
