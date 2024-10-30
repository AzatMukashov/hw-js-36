import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PageData } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import { Container } from 'react-bootstrap';

const Page = () => {
  const {pageName} = useParams();
  const [page, setPage] = useState<PageData>({title: '', content: ''});
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await axiosAPI.get(`/pages/${pageName}.json`);
        if (response.data) {
          setPage(response.data);
        } else {
          console.log('page not found');
        }
      } catch (error) {
        console.error('error fetching page data:', error);
      }
    };
    (async () => {
      await fetchPage();
    })();
  }, [pageName]);
  return (
    <Container>
      <h1>{page.title}</h1>
      <p>{page.content}</p>
    </Container>
  );
};
export default Page;