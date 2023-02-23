import './Card.css'

function Card(props) {
  return (
    <div className='Card'>
        <div className='main-section'>
            <div className='red-block-bottom'>
            </div>
            <div className='main-section-left'>
              <img src={props.image} className='card-image' alt={props.alt} />
            </div>
            <div className='main-section-right'>
                <div className='title-container'>
                    <p className='card-title'>{props.title}</p>
                </div>
                <div className='bottom-container'>
                  <p className='card-author'>{props.byline}</p>
                  <p className='subsection'>{props.section}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card
