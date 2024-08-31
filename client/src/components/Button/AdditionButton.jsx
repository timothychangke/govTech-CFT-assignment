import { Button } from '@mui/material'

const AdditionButton = ({ handleAddition, error1, error2 }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleAddition}
      disabled={error1 || error2}
      sx={{ flex: 1, height: 50, borderWidth: 3, padding: 3 }}
      data-testid="addition-button"
    >
      Addition
    </Button>
  )
}

export default AdditionButton
