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
        <div className='top-section'>
            <div className='top-section-left'>

            </div>
            <div className='top-section-right'>
                <div className='title-container'>
                    <p className='card-title'>{props.title}</p>
                </div>
                <p className='author'>{props.byline}</p>
            </div>
        </div>
        <div className='bottom-section'>
            
        </div>
    </div>
  );
}

export default Card
