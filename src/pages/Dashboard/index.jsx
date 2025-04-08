import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Select,
  MenuItem,
  TextField
} from '@mui/material';

const Dashboard = () => {
  const [escala, setEscala] = React.useState(644);
  
  const [producao] = React.useState(186);
  const [ultimoRodando] = React.useState('00:03:26');
  const [ultimaParada] = React.useState('00:00:00');

  const cellStyle = {
    border: '1px solid #ccc',
    padding: '8px',
    fontSize: '0.9rem',
  };

  const pontos = [
    { ativo: true, titulo: 'SEGUNDO', subtitulo: 'TRANSPASSE', qtd: 5, tempo: '01:54:56' },
    { ativo: true, titulo: 'BALANÇA', subtitulo: '', qtd: 11, tempo: '01:40:00' },
    { ativo: true, titulo: 'TOALETE', subtitulo: '', qtd: 19, tempo: '01:21:45' },
    { ativo: true, titulo: 'PRIMEIRO', subtitulo: 'TRANSPASSE', qtd: 6, tempo: '01:01:58' },
    { ativo: true, titulo: 'SIF E', subtitulo: 'SERRA DE CARCAÇAS', qtd: 3, tempo: '00:38:10' },
    { ativo: true, titulo: 'NOREA', subtitulo: 'DECAÇEÇAS', qtd: 0, tempo: '00:00:00' },
    { ativo: false, titulo: 'MESA DE', subtitulo: 'VÍSCERAS', qtd: 0, tempo: '00:00:00' },
    { ativo: true, titulo: 'P.C.C', subtitulo: 'DIANTEIRO', qtd: 0, tempo: '00:00:00' },
  ];
  return (
    <Box p={2} sx={{ backgroundColor: 'black', height: '100%', width: '100%' }}>
      <Typography variant="h4" align="center" color="red" fontWeight="bold">
        SISTEMA DE MONITORAMENTO DE PARADAS DO ABATE
      </Typography>

      {/* CARDS PRINCIPAIS */}
      <Grid container spacing={2} mt={2} justifyContent="center">
        <Grid item>
          <Paper sx={cardStyle('#001f3f', '#00ffcc')}>
            <Typography variant="subtitle2">PRODUÇÃO</Typography>
            <Typography variant="h5">{String(producao).padStart(4, '0')}</Typography>
          </Paper>
        </Grid>

        <Grid item>
          <Paper sx={cardStyle('#003300', '#00ffcc')}>
            <Typography variant="subtitle2">ÚLTIMO RODANDO</Typography>
            <Typography variant="h5">{ultimoRodando}</Typography>
          </Paper>
        </Grid>

        <Grid item>
          <Paper sx={cardStyle('#002f2f', '#00ffff')}>
            <Typography variant="subtitle2">ESCALA DO DIA</Typography>
            <Typography variant="h5">{String(escala).padStart(4, '0')}</Typography>
          </Paper>
        </Grid>

        <Grid item>
          <Paper sx={cardStyle('#222200', '#ffcc00')}>
            <Typography variant="subtitle2">ÚLTIMA PARADA</Typography>
            <Typography variant="body2">BALANÇA</Typography>
            <Typography variant="h5">{ultimaParada}</Typography>
          </Paper>
        </Grid>
        <Grid item>
        <Paper sx={cardStyle('#f5f5f5', '#000')}>
          <Typography color="black">ESCALA ABATE</Typography>
          <Select
            value={escala}
            onChange={(e) => setEscala(e.target.value)}
            sx={{ backgroundColor: '#fff', minWidth: 80 }}
          >
            {[644, 700, 800].map((val) => (
              <MenuItem key={val} value={val}>{val}</MenuItem>
            ))}
          </Select>
          </Paper>
        </Grid>

        
      </Grid>

      {/* PONTOS */}
      <Grid container spacing={1} mt={3} justifyContent="center">
        {pontos.map((ponto, index) => (
          <Grid item key={index}>
            <Paper
              sx={{
                width: 100,
                height: 60,
                backgroundColor: ponto.ativo ? 'green' : 'red',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                textAlign: 'center',
                padding: '4px',
              }}
            >
              <Typography variant="caption">{ponto.titulo}</Typography>
              <Typography variant="caption">{ponto.subtitulo}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container mt={4} justifyContent="center">
  <Grid item xs={12} md={10}>
    <Paper sx={{ overflowX: 'auto' }}>
      <Box sx={{ minWidth: 400 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#001f3f', color: '#fff' }}>
              <th style={cellStyle}>Setor</th>
              <th style={cellStyle}>Qtde</th>
              <th style={cellStyle}>Tempo</th>
            </tr>
          </thead>
          <tbody>
            {pontos.map((ponto, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#e0e0e0' }}>
                <td style={cellStyle}>{`${ponto.titulo} ${ponto.subtitulo}`.trim()}</td>
                <td style={{ ...cellStyle, textAlign: 'center' }}>{ponto.qtd || 0}</td>
                <td style={{ ...cellStyle, textAlign: 'center', color: 'red', fontWeight: 'bold' }}>
                  {ponto.tempo || '00:00:00'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Paper>
  </Grid>
</Grid>
      {/* ESCALA SELECTOR 
      <Grid container spacing={2} mt={4} justifyContent="center">
        <Grid item>
        <Paper sx={cardStyle('#f5f5f5', '#000')}>
          <Typography color="black">ESCALA ABATE</Typography>
          <Select
            value={escala}
            onChange={(e) => setEscala(e.target.value)}
            sx={{ backgroundColor: '#fff', minWidth: 80 }}
          >
            {[644, 700, 800].map((val) => (
              <MenuItem key={val} value={val}>{val}</MenuItem>
            ))}
          </Select>
          </Paper>
        </Grid>
        
      </Grid>
      */}
    </Box>
  );
};

// Estilo padronizado para os cards
const cardStyle = (bgColor, textColor) => ({
  backgroundColor: bgColor,
  color: textColor,
  width: 180,
  minHeight: 100,
  padding: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
});

export default Dashboard;