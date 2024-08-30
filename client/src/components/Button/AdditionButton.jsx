import { Button } from '@mui/material'

const AdditionButton = ({ handleAddition, error1, error2 }) => {
  return (
    <Button
    variant="contained"
      color="primary"
      onClick={handleAddition}
      disabled={error1 || error2}
      sx={{ mt: 2, flex: 1, height: 50, borderWidth: 3 }}
    >
      Addition
    </Button>
  )
}

export default AdditionButton
