import './Card.css';

function Card(props) {
    return (
        <div className='card'>
            <div className='title'>{props.title}</div>
            <div className='text-row'>Min.Temp:{props.body.main.temp_min}</div>
            <div className='text-row'>Max.Temp:{props.body.main.temp_max}</div>
            <div className='text-row'>Avg.Temp:{props.body.main.temp}</div>
            
        </div>
    );
}

export default Card;
