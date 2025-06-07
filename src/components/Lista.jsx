import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText, CircularProgress, Paper} from '@mui/material';

function Lista() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  const handleClick = (id) => {
    navigate(`/dados/${id}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Posts</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Paper elevation={3}>
          <List>
            {posts.map((post) => (
              <ListItem key={post.id} button onClick={() => handleClick(post.id)}>
                <ListItemText primary={post.title} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Container>
  );
}

export default Lista;
