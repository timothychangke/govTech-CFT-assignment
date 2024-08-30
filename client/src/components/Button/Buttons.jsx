import AdditionButton from './AdditionButton'
import SubtractionButton from './SubtractionButton'
import { Box } from '@mui/material'
import ResetButton from './ResetButton'

const Buttons = ({
  handleAddition,
  handleSubtraction,
  error1,
  error2,
  handleReset,
}) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" width="100%" gap={1}>
      <Box display="flex" gap={2} flexGrow={1} justifyContent="center" alignItems="center">
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
      <Box display="flex" justifyContent="center" alignItems="center">
        <ResetButton handleReset={handleReset} />
      </Box>
    </Box>
  )
}

export default Buttons
