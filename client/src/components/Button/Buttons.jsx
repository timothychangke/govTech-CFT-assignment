import AdditionButton from './AdditionButton'
import SubtractionButton from './SubtractionButton'
import { Box } from '@mui/material'

const Buttons = ({ handleAddition, handleSubtraction, error1, error2 }) => {
  return (
    <Box display="flex" gap={2} justifyContent="center" width>
      <AdditionButton
        handleAddition={handleAddition}
        error1={error1}
        error2={error2}
      />
      <SubtractionButton
        handleSubtraction={handleSubtraction}
        error1={error1}
        error2={error2}
      />
    </Box>
  )
}

export default Buttons
