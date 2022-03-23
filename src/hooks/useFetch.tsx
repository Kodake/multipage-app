import { useState, useEffect } from 'react';
import { Article } from '../interfaces/appInterfaces';

export const useFetch = (url: string) => {
    const [articles, setArticles] = useState<Article[] | undefined>([]);
    const [article, setArticle] = useState<Article | undefined>(undefined);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            setIsPending(true);

            try {
                const res = await fetch(url, { signal: controller.signal });
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                const data = await res.json();

                setIsPending(false);
                setArticle(data);
                setArticles(data);
                setError(null);
            } catch (err: any) {
                if (err.name === 'AbortError') {
                    console.log('the fetch was aborted');
                } else {
                    setIsPending(false);
                    setError('Could not fetch the data');
                }
            }
        }

        fetchData();

        return () => {
            controller.abort();
        }

    }, [url]);

    return { articles, article, isPending, error }
}