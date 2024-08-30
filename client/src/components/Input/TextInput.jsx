import { TextField } from '@mui/material'

const TextInput = ({ handleInputChange, error, input, inputText, name }) => {
  const handleChange = (event) => {
    handleInputChange(name, event)
  }
    return (
    <TextField
      label={inputText}
      variant="outlined"
      value={input}
      onChange={handleChange}
      error={!!error}
      helperText={error}
      fullWidth
      sx={{ mb: 2 }}
    />
  )
}

export default TextInput
