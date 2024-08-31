import AdditionButton from './AdditionButton'
import SubtractionButton from './SubtractionButton'
import { Box } from '@mui/material'
import ResetButton from './ResetButton'
import styles from '../Styling/calculator.module.css'

const Buttons = ({
  handleAddition,
  handleSubtraction,
  error1,
  error2,
  handleReset,
}) => {
  return (
    <Box className={styles.buttonContainer}>
      <Box className={styles.buttonsGroup}>
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
      <Box className={styles.resetButtonContainer}>
        <ResetButton handleReset={handleReset} />
      </Box>
    </Box>
  )
}

export default Buttons
