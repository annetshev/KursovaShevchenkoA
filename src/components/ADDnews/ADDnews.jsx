import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { newsApi } from '../../db/api.js';

function ADDnews({ show, handleClose, onDone }) {
    const [newsName, setName] = useState('');
    const [imageNews, setImage] = useState('');
    const [commentNews, setcommentNews] = useState('');

    const handleSubmit = () => {
        const news = {
            newsName,
            imageNews,
            commentNews
        };

        addNews(news)

        .then((res) => {
            console.log(res);
            onDone(res.data);
        })
        .catch(err => console.log(err));
        handleClose();
    };

    const addNews = async (news) => {
        try {
            const response = await axios.post(newsApi, news);
            console.log("exsrdctfvgbhj");
            return response;
        }
        catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Новини</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="name_unit_id">
                            <Form.Label>newsName</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Example: 1st assault battalion"
                                onChange={(e) => setName(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="image_unit_id">
                            <Form.Label>imageNews</Form.Label>
                            <Form.Control
                                type="text"
                                as="textarea"
                                rows={3}
                                placeholder='https://example.com/image.jpg'
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="specialization_unit_id">
                            <Form.Label>commentNews</Form.Label>
                            <Form.Control
                                type="text"
                                as="textarea"
                                rows={3}
                                placeholder='Briefly about the unit'
                                onChange={(e) => setcommentNews(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type='submit' variant="primary" onClick={handleSubmit}>
                        Add news
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ADDnews;