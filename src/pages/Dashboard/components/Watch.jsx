import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

function formatTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

export default function Watch() {
  const [tempoRodando, setTempoRodando] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTempoRodando((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Paper
      elevation={6}
      sx={{
        bgcolor: "#b30000",
        color: "#fff",
        p: 4,
        borderRadius: 3,
        textAlign: "center",
        width: "100%",
        maxWidth: 400,
        mx: "auto",
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={2}>
        STATUS DA LINHA
      </Typography>

      <Stack spacing={2}>
        <Box>
          <Typography variant="subtitle1">TEMPO RODANDO</Typography>
          <Typography variant="h3" fontWeight="bold">
            {formatTime(tempoRodando)}
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle1">TEMPO PARADO</Typography>
          <Typography variant="h3" fontWeight="bold">
            00:00:00
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
