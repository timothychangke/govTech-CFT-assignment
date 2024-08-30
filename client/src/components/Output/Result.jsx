import { Typography } from '@mui/material'

const Result = ({ result }) => {
  return (
    <Typography variant="h6" align="center" sx={{ mt: 2 }}>
      Result: {result}
    </Typography>
  )
}

export default Result
