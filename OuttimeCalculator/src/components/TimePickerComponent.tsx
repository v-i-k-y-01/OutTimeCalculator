import { TimePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'

interface Props {
    label: string
    value: Dayjs | null
    onChange: (value: Dayjs | null) => void
}

const TimePickerComponent = ({ label, value, onChange }: Props) => {
  return (
    <TimePicker 
      label={label} 
      value={value}
      onChange={onChange}
      format="HH:mm"
    />
  )
}

export default TimePickerComponent