import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

interface Props {
    id: string;
}

const Article = () => {
    const params = useParams<Props>();
    const url = `http://localhost:3000/articles/${params.id}`;
    const { article, isPending, error } = useFetch(url);
    const history = useHistory();

    useEffect(() => {
        if (error) {
            // Redirect to HomePage
            setTimeout(() => {
                history.push('/');
            }, (2000));
        }

    }, [error, history])


    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {article && (
                <div>
                    <h2>{article.title}</h2>
                    <p>By {article.author}</p>
                    <p>{article.body}</p>
                </div>
            )}
        </div>
    )
}

export default Article