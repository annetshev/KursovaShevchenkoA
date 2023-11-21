import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { newsApi } from '../../db/api.js';
import httpNews from '../../http-requests/http-news.js';

function NewsCard({ news }) {
    const handleDelete = async () => {
      try {
        console.log(news.id)
        const response = await httpNews.removeNews(news.id)
        window.location.reload()
        if (response.status === 200) {
          console.log('News deleted successfully');

        } else {
          console.error('Failed to delete news');
        }
      } catch (error) {
        console.error('Error deleting news:', error.message);
      }
    };
  
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={news.imageNews} />
        <Card.Body>
          <Card.Title>{news.newsName}</Card.Title>
          <Card.Text>
            <p>{news.commentNews}</p>
          </Card.Text>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
      
    );
  }
  
  export default NewsCard;