import { useLocation } from 'react-router-dom';

const Contact = () => {
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const name = queryParams.get('name');
    
    return (
        <div>
            <h2>Hey {name}, Contact us here...</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Minus eius ut a fugit reprehenderit. Natus, maxime. Modi
                suscipit neque at autem quisquam quaerat, veniam aut quibusdam
                vero ducimus qui reprehenderit!</p>
        </div>
    )
}

export default Contact