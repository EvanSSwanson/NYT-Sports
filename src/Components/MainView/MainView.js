import './MainView.css'
import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import { NavLink } from 'react-router-dom'

const MainView = (props) => {
    const [searchInput, setSearchInput] = useState('')
    const [filtered, setFiltered] = useState(props.articles);

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value);
      };

    useEffect(() => {
        window.scrollTo(0, 0)
        setFiltered(props.articles)
      }, [])

      useEffect(() => {
        setFiltered(props.articles.filter((story) =>
        story.title.toLowerCase().includes(searchInput)))
      }, [searchInput])

    const filteredResponses = filtered.map((story) => {
        return (
            <NavLink to='/article' onClick={() => props.setSelected(story)}>
                <Card
                    key={story.uri}
                    id={story.uri}
                    title={story.title}
                    section={story.subsection}
                    byline={story.byline}
                    image={story.multimedia[1].url}
                    imageAlt={story.multimedia[1].caption}
                />
            </NavLink>
        )
        })

    const fullResponses = props.articles.map((story) => {
        return (
            <NavLink to='/article' onClick={() => props.setSelected(story)}>
                <Card
                    key={story.uri}
                    id={story.uri}
                    title={story.title}
                    section={story.subsection}
                    byline={story.byline}
                    image={story.multimedia[1].url}
                    imageAlt={story.multimedia[1].caption}
                />
            </NavLink>
        )
        })

  return (
    <div className='MainView'>
        <form>
          <input
            className="name-field"
            id="name"
            type="text"
            placeholder="Search articles..."
            onChange={handleChange}
          />
        </form>
        <div className="all-card-container">
            {searchInput === '' ? fullResponses : filteredResponses}
        </div>
    </div>
  );
}

export default MainView