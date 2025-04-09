import { TextField } from '@mui/material'

interface Props {
    label: string
    
}
const TextFieldComponent = ({label}:Props) => {
  return (
    <TextField label={label} color="secondary" focused />

  )
}

export default TextFieldComponent