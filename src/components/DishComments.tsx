import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Dish } from '../types/interfaces';

interface DishCommentsComponent {
  selectedPasta: Dish;
}
interface Comment {
  id: number;
  comment: string;
}

const DishComments = ({ selectedPasta }: DishCommentsComponent) => (
  <Container>
    <Row className="justify-content-center mt-3">
      <Col xs={12} md={6}>
        <ListGroup>
          {selectedPasta ? (
            selectedPasta.comments.map((c: Comment) => (
              <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
            ))
          ) : (
            <p>Click on a dish to read its comments</p>
          )}
        </ListGroup>
      </Col>
    </Row>
  </Container>
);

export default DishComments;
