import './DetailedView.css'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSearchParams } from "react-router-dom"

const DetailedView = (props) => {
    const subsection = (
        <div className='subsection-container'>
            <p className='page-subsection' >{props.article.subsection}</p>
        </div>
    )

    useEffect(() => {
        window.scrollTo(0, 86)
      }, [])

  return (
    <div className='DetailedView'>
       <div className='page-left'>
            {props.article.subsection !== '' ? subsection : '' }
       </div>
       <div className='page-center'>
        <div className='red-banner'></div>
        <h1 className='page-title'>{props.article.title}</h1>
        <h3 className='page-author'>{props.article.byline}</h3>
        <img src={props.article.multimedia[0].url} className='page-image' alt={props.article.multimedia[0].caption} />
        <p className='page-abstract'>{props.article.abstract}</p>
        <p className='published-date'>{props.article.published_date.slice(0, 10)}</p>
        </div>
        <div className='page-right'>
            <div className='link-container'>
                <a className='nyt-link' href={props.article.url} target='_blank'>Go to Article</a>
            </div>
            <div className='home-link-container'>
                <NavLink to='/'>
                    <p className='home-link' href={props.article.url} target='_blank'>Return Home</p>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default DetailedView