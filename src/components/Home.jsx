import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Stack } from '@mui/material';

function Home() {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Bem-vindo à Prova React</Typography>
      <Typography variant="body1" gutterBottom>Escolha uma das opções abaixo:</Typography>
      <Stack spacing={2} direction="column" sx={{ maxWidth: 300, mt: 3 }}>
        <Button variant="contained" onClick={() => navigate('/post')}>
          Ver Lista de Posts
        </Button>
            <Button variant="outlined" onClick={() => navigate('/dados/1')}>
          Ver Detalhes de um Post (ID: 1)
        </Button>
      </Stack>
    </Container>
  );
}

export default Home;
