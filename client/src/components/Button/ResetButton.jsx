import { IconButton, Tooltip } from '@mui/material';
import ResetIcon from '@mui/icons-material/RestartAlt'
const ResetButton = ({handleReset}) => {
  return (
    <Tooltip title="Reset">
      <IconButton onClick={handleReset} color="primary">
        <ResetIcon />
      </IconButton>
    </Tooltip>
  )
}

export default ResetButton
