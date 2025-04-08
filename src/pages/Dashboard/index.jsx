import { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  Grid,
} from '@mui/material';
import { Settings, Thermostat, Speed } from '@mui/icons-material';

export default function Dashboard() {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Tabs value={tab} onChange={handleChange} aria-label="Dashboard Tabs" centered>
        <Tab label="Geral" icon={<Speed />} iconPosition="start" />
        <Tab label="Temperatura" icon={<Thermostat />} iconPosition="start" />
        <Tab label="Configuração" icon={<Settings />} iconPosition="start" />
      </Tabs>

      {tab === 0 && (
        <Grid container spacing={3} mt={2}>
          <StatusCard label="Máquina 01" status="Ativa" temperatura={36} carga={72} />
          <StatusCard label="Máquina 02" status="Parada" temperatura={24} carga={0} />
          <StatusCard label="Máquina 03" status="Manutenção" temperatura={0} carga={0} />
        </Grid>
      )}

      {tab === 1 && (
        <Grid container spacing={3} mt={2}>
          <TempCard nome="Máquina 01" valor={36} />
          <TempCard nome="Máquina 02" valor={24} />
        </Grid>
      )}

      {tab === 2 && (
        <Box mt={3}>
          <Typography color="text.secondary">Área de configurações do sistema</Typography>
        </Box>
      )}
    </Box>
  );
}

function StatusCard({ label, status, temperatura, carga }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>{label}</Typography>
          <Typography variant="body2" color="text.secondary">Status: {status}</Typography>
          <Box mt={2}>
            <Typography variant="body2">Temperatura</Typography>
            <LinearProgress variant="determinate" value={temperatura} />
          </Box>
          <Box mt={2}>
            <Typography variant="body2">Carga</Typography>
            <LinearProgress variant="determinate" value={carga} />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

function TempCard({ nome, valor }) {
  return (
    <Grid item xs={12} sm={6}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>{nome}</Typography>
          <Typography variant="h4">{valor}°C</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}