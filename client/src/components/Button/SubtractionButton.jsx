import { Button } from '@mui/material'

const SubtractionButton = ({ handleSubtraction, error1, error2 }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleSubtraction}
      disabled={error1 || error2}
      sx={{ flex: 1, height: 50 }}
    >
      Subtraction
    </Button>
  )
}

export default SubtractionButton
