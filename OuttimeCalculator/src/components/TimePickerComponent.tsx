import dayjs from 'dayjs'
import { TimeField } from '@mui/x-date-pickers/TimeField'
const TimePickerComponent = () => {
  return (
    <>
    <TimeField
  label="Format with meridiem"
  defaultValue={dayjs('2022-04-17T15:30')}
  format="hh:mm a"
/>
<TimeField
  label="Format without meridiem"
  defaultValue={dayjs('2022-04-17T15:30')}
  format="HH:mm"
/>
<TimeField
  label="Format with seconds"
  defaultValue={dayjs('2022-04-17T15:30')}
  format="HH:mm:ss"
/>
</>
  )
}

export default TimePickerComponent