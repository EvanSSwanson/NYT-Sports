import './MainView.css'
import React, { useState, useEffect } from 'react'
import { Form } from '../Form/Form'
import Card from '../Card/Card'
import { NavLink } from 'react-router-dom'
import { useSearchParams } from "react-router-dom"

const MainView = (props) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentParams = Object.fromEntries([...searchParams])
  
    const [filtered, setFiltered] = useState(props.articles.filter((story) => {
      const name = currentParams.title ? currentParams.title.toLowerCase() : ""
      const nameMatches = story.title.toLowerCase().includes(name)
      return nameMatches
    }));

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <div className='MainView'>
        <Form />
        <div className="all-card-container">
            {props.articles.map((story) => {
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
            })}
        </div>
    </div>
  );
}

export default MainView