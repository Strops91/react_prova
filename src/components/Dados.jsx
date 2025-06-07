import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  CircularProgress,
  Card,
  CardContent
} from '@mui/material';

function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPostAndUser() {
      try {
        const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const postData = await postRes.json();
        setPost(postData);

        const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
        const userData = await userRes.json();
        setUser(userData);

        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchPostAndUser();
  }, [id]);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Detalhes do Post</Typography>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body1">{post.body}</Typography>
        </CardContent>
      </Card>

      <Typography variant="h5" gutterBottom>Informações do Autor</Typography>
      <Card>
        <CardContent>
          <Typography>Nome: {user.name}</Typography>
          <Typography>Email: {user.email}</Typography>
          <Typography>Website: {user.website}</Typography>
          <Typography>Empresa: {user.company?.name}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Detail;
