import './Card.css';
import { NavLink } from 'react-router-dom';

function Card(props) {
                // key={story.uri}
                // id={story.uri}
                // name={story.title}
                // section={story.subsection}
                // byline={story.byline}
                // image={story.multimedia[1].url}
                // imageAlt={story.multimedia[1].caption}


//   const county = useSelector((state) =>
//     state.counties.find((county) => {
//       return county.id === props.countyId.toFixed();
//     })
//   );

//   const selectTrail = (id) => {
//     return getSingleTrail(id)
//       .then(data => dispatch(setTrail(data)))
//       .catch(err => console.log(err))
//   }
//   const currentUser = useSelector((state) => state.selectedUser.data);
//   const trails = useSelector((state) => state.trails);

//   const getUser = (id) => {
//     return getSingleUser(id)
//       .then(data => dispatch(setUser(data)))
//       .catch(err => console.log(err))
//   }

  return (
    <div className='Card'>
        {/* <div className='top-banner'>
          <div className='red-block-top'></div>
          <p className='subsection'>{props.section === '' ? '___' : props.section}</p>
        </div> */}
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
