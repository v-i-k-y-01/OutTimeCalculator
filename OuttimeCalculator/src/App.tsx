import { LocalizationProvider } from '@mui/x-date-pickers'
import TimePickerComponent from './components/TimePickerComponent'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Card, CardContent, TextField, Alert } from '@mui/material'
import image from './assets/5356717.jpg'
import CalculateButton from './components/CalculateButton';
import { useState } from 'react';
import { Dayjs } from 'dayjs';

const App = () => {
  const [grossHours, setGrossHours] = useState<Dayjs | null>(null);
  const [inTime, setInTime] = useState<Dayjs | null>(null);
  const [effectiveHours, setEffectiveHours] = useState<Dayjs | null>(null);
  const [outTime, setOutTime] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleCalculate = () => {
    setError('');
    setLoading(true);

    try {
      if (!grossHours || !inTime || !effectiveHours) {
        throw new Error('Please fill in all time fields');
      }

      const grossHoursInMinutes = grossHours.hour() * 60 + grossHours.minute();
      const inTimeInMinutes = inTime.hour() * 60 + inTime.minute();
      const effectiveHoursInMinutes = effectiveHours.hour() * 60 + effectiveHours.minute();

      const outTimeInMinutes = inTimeInMinutes + (grossHoursInMinutes - effectiveHoursInMinutes);
      const calculatedOutTime = `${Math.floor(outTimeInMinutes / 60).toString().padStart(2, '0')}:${(outTimeInMinutes % 60).toString().padStart(2, '0')}`;

      setOutTime(calculatedOutTime);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during calculation');
    } finally {
      setLoading(false);
    }
  };

  const isCalculateDisabled = !grossHours || !inTime || !effectiveHours;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '100vh',
          p: 2,
          gap: 2,
          backgroundColor:'lavender'
        }}
      >
        <Card sx={{ 
          maxWidth: 400, 
          width: '100%', 
          borderRadius: 4,
          boxShadow: 3
        }}>
          <CardContent sx={{ p: 2 }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 2,
              justifyContent: 'space-between',
              padding: 2
            }}>
              <Box 
                component="img"
                src={image}
                alt="Time Calculator"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 150,
                  objectFit: 'contain',
                  mb: 2
                }}
              />
              <TimePickerComponent 
                label='Gross Hours' 
                value={grossHours}
                onChange={setGrossHours}
              />
              <TimePickerComponent 
                label='In Time' 
                value={inTime}
                onChange={setInTime}
              />
              <TimePickerComponent 
                label='Effective Hours' 
                value={effectiveHours}
                onChange={setEffectiveHours}
              />
              {error && (
                <Alert severity="error" sx={{ mt: 1 }}>
                  {error}
                </Alert>
              )}
              {outTime && (
                <TextField
                  label="Out Time"
                  value={outTime}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ mt: 1 }}
                />
              )}
              <CalculateButton 
                onClick={handleCalculate}
                disabled={isCalculateDisabled}
                loading={loading}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </LocalizationProvider>
  );
};

export default App;