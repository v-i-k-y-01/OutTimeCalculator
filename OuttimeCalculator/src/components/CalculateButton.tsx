import { Button } from '@mui/material'
import { CircularProgress } from '@mui/material'

interface CalculateButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const CalculateButton = ({ onClick, disabled = false, loading = false }: CalculateButtonProps) => {
  return (
    <Button 
      variant="contained" 
      color="primary"
      onClick={onClick}
      disabled={disabled || loading}
      sx={{
        width: '100%',
        mt: 2,
        py: 1.5,
        fontSize: '1.1rem',
        position: 'relative'
      }}
    >
      {loading ? (
        <CircularProgress 
          size={24} 
          sx={{ 
            color: 'inherit',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-12px',
            marginLeft: '-12px',
          }} 
        />
      ) : 'Calculate'}
    </Button>
  )
}

export default CalculateButton 