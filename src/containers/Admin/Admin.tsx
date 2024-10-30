import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosAPI from '../../axiosAPI.ts';
import { PageData } from '../../types';
import { Button, Container, Form } from 'react-bootstrap';

const Admin = () => {
  const [pages, setPages] = useState<string[]>([]);
  const [selectedPage, setSelectedPage] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await axiosAPI.get(`/pages.json`);
        if (response.data) {
          setPages(Object.keys(response.data));
        } else {
          console.log('no pages found');
        }
      } catch (error) {
        console.error('error fetching page:', error);
      }
    };
    (async () => {
      await fetchPages();
    })();
  }, []);
  const handleChangePage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const pageName = event.target.value;
    setSelectedPage(pageName);
    try {
      const response = await axiosAPI.get(`/pages/${pageName}.json`);
      if (response.data) {
        const {title, content}: PageData = response.data;
        setTitle(title);
        setContent(content);
      } else {
        console.log('page not found');
      }
    } catch (error) {
      console.error('error fetching page data:', error);
    }
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axiosAPI.put(`/pages/${selectedPage}.json`, {title, content});
      navigate(`/pages/${selectedPage}`);
    } catch (error) {
      console.error('error updating page:', error);
    }
  };
  return (
    <Container>
      <h1 className="my-4">Edit pages</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formPageSelect" className="mb-3">
          <Form.Label>Select page</Form.Label>
          <Form.Control
            as="select"
            value={selectedPage}
            onChange={handleChangePage}
            required
          >
            <option value="">Select a page</option>
            {pages.map(page => (
              <option key={page} value={page}>{page}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formTitle" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formContent" className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            style={{width: '75%'}}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Save</Button>
      </Form>
    </Container>
  );
};
export default Admin;