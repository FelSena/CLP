import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Select,
  MenuItem,
} from '@mui/material';


function formatTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}


const Dashboard = () => {
  const [escala, setEscala] = React.useState(644);
  const [producao] = React.useState(186);
  const [ultimoRodando] = React.useState('00:03:26');
  const [ultimaParada] = React.useState('00:00:00');
  const velocidade =  0;
  const porcentagem = (producao/escala) *100
  
  const [tempoRodando, setTempoRodando] = useState(0);
  const [tempoParado, setTempoParado] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTempoRodando((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    useEffect(() => {
      const interval = setInterval(() => {
        setTempoParado((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);


  const pontos = [
    { ativo: true, titulo: 'SEGUNDO', subtitulo: 'TRANSPASSE', qtd: 5, tempo: '01:54:56' },
    { ativo: true, titulo: 'BALANÇA', subtitulo: '', qtd: 11, tempo: '01:40:00' },
    { ativo: true, titulo: 'TOALETE', subtitulo: '', qtd: 19, tempo: '01:21:45' },
    { ativo: true, titulo: 'PRIMEIRO', subtitulo: 'TRANSPASSE', qtd: 6, tempo: '01:01:58' },
    { ativo: true, titulo: 'SIF E', subtitulo: 'SERRA DE CARCAÇAS', qtd: 3, tempo: '00:38:10' },
    { ativo: true, titulo: 'NOREA', subtitulo: 'DECAÇEÇAS', qtd: 0, tempo: '00:00:00' },
    { ativo: false, titulo: 'MESA DE', subtitulo: 'VÍSCERAS', qtd: 0, tempo: '00:00:00' },
    { ativo: true, titulo: 'P.C.C', subtitulo: 'DIANTEIRO', qtd: 0, tempo: '00:00:00' },
    { ativo: true, titulo: 'Segurança', subtitulo: '1', qtd: 0, tempo: '00:00:00' },
    { ativo: true, titulo: 'Segurança', subtitulo: '2', qtd: 0, tempo: '00:00:00' },
    { ativo: true, titulo: 'Segurança', subtitulo: '3', qtd: 0, tempo: '00:00:00' },
    { ativo: true, titulo: 'Segurança', subtitulo: '4', qtd: 0, tempo: '00:00:00' }
  ];

  const cellStyle = {
    border: '1px solid #ccc',
    padding: '8px',
    fontSize: '0.9rem',
  };

  return (
    <Box p={2} sx={{ backgroundColor: 'black', height: '100%', width: '100%' }}>
      <Typography variant="h4" align="center" color="red" fontWeight="bold">
        SISTEMA DE MONITORAMENTO DE PARADAS DO ABATE
      </Typography>

     
      <Grid container spacing={4} mt={2} justifyContent="center" alignItems="flex-start">
  {/* Bloco 1: Produção e Escala */}
  <Grid item>
    <Box display="flex" flexDirection="column" gap={2}>
      <Paper sx={cardStyle('#001f3f', '#00ffcc')}>
        <Typography variant="subtitle2">PRODUÇÃO</Typography>
        <Typography variant="h5">{String(producao).padStart(4, '0')}</Typography>
      </Paper>
      <Paper sx={cardStyle('#002f2f', '#00ffff')}>
        <Typography variant="subtitle2">ESCALA DO DIA</Typography>
        <Typography variant="h5">{String(escala).padStart(4, '0')}</Typography>
      </Paper>
      
    </Box>
  </Grid>

  {/* Bloco 2: Relógio (Status da Linha) */}
  <Grid item >
    <Paper
      sx={{
        backgroundColor: 'darkred',
        color: 'white',
        minWidth: 250,
        minHeight: 180,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        STATUS DA LINHA
      </Typography>
      <Typography variant="subtitle2" mt={1}>
        TEMPO RODANDO
      </Typography>
      <Typography variant="h4">{formatTime(tempoRodando)}</Typography>
      <Typography variant="subtitle2" mt={1}>
        TEMPO PARADO
      </Typography>
      <Typography variant="h4">{formatTime(tempoParado)}</Typography>
    </Paper>
        
  </Grid>

  {/* Bloco 3: Último rodando e Última parada */}
  <Grid item>
    <Box display="flex" flexDirection="column" gap={2}>
      <Paper sx={cardStyle('#003300', '#00ffcc')}>
        <Typography variant="subtitle2">ÚLTIMO RODANDO</Typography>
        <Typography variant="h5">{ultimoRodando}</Typography>
      </Paper>
      <Paper sx={cardStyle('#222200', '#ffcc00')}>
        <Typography variant="subtitle2">ÚLTIMA PARADA</Typography>
        <Typography variant="body2">BALANÇA</Typography>
        <Typography variant="h5">{ultimaParada}</Typography>
      </Paper>
    </Box>
  </Grid>
  
</Grid>

{/* Velocidade, seletor e porcentagem */}
<Grid container spacing={2} mt={3} justifyContent='center' >
  <Grid item>
  <Paper sx={{ 
        maxHeight: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 1,
        padding: 1 }}>
           <Typography color="black">ESCALA ABATE</Typography>
            <Select
              value={escala}
              onChange={(e) => setEscala(e.target.value)}
              sx={{ backgroundColor: '#fff' }}
            >
              {[644, 700, 800].map((val) => (
                <MenuItem key={val} value={val}>
                  {val}
                </MenuItem>
              ))}
            </Select>
          </Paper>
  </Grid>
<Grid item>
    <Paper sx={{ 
  minWidth: 250,
  maxHeight: 50,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: 2 }}>
      <Typography variant="subtitle2">VELOCIDADE</Typography>
      <Typography variant="h5">{velocidade} B/H</Typography>
    </Paper>
    
</Grid>
<Grid item>
    <Paper sx={{ 
  minWidth: 250,
  maxHeight: 50,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: 2 }}>
      <Typography variant="subtitle2">Processo</Typography>
      <Typography variant="h5">{porcentagem.toFixed(2)} %</Typography>
    </Paper>
    
</Grid>

</Grid>

      {/* PONTOS */}
      <Grid container spacing={1} mt={3} justifyContent="center" wrap="wrap">
  {pontos.slice(0, 6).map((ponto, index) => (
    <Grid item key={index}>
      <Paper
        sx={{
          width: 120,
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

<Grid container spacing={1} mt={1} justifyContent="center" wrap="wrap">
  {pontos.slice(6, 12).map((ponto, index) => (
    <Grid item key={index}>
      <Paper
        sx={{
          width: 120,
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

      {/* TABELAS */}
      <Grid container spacing={2} mt={4} justifyContent="center">
        {[0, 1].map((coluna) => (
          <Grid item xs={12} md={6} key={coluna}>
            <Paper sx={{ overflowX: 'auto' }}>
              <Box sx={{ minWidth: 500 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#001f3f', color: '#fff' }}>
                      <th style={cellStyle}>Setor</th>
                      <th style={cellStyle}>Qtde</th>
                      <th style={cellStyle}>Tempo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pontos
                      .slice(coluna * 6, coluna * 6 + 6)
                      .map((ponto, index) => (
                        <tr
                          key={index}
                          style={{
                            backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#e0e0e0',
                          }}
                        >
                          <td style={cellStyle}>{ponto.titulo}</td>
                          <td style={{ ...cellStyle, textAlign: 'center' }}>{ponto.qtd}</td>
                          <td
                            style={{
                              ...cellStyle,
                              textAlign: 'center',
                              color: 'red',
                              fontWeight: 'bold',
                            }}
                          >
                            {ponto.tempo}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* SELECT ESCALA */}
      
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
  textAlign: 'center',
});

export default Dashboard;
