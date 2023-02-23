import './MainView.css';
import React, { useState } from 'react';
import { Form } from '../Form/Form'
import Card from '../Card/Card'
import { NavLink } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";

function MainView() {
    const stories = [{
        section: "opinion",
        subsection: "poop",
        title: "We’re Not Asking the Right Question About Biden",
        abstract: "The oldest president has an argument about the future.",
        url: "https://www.nytimes.com/2023/02/19/opinion/biden-campaign-2024-2020.html",
        uri: "nyt://article/d885a7a7-e909-5080-8c29-2dc7df227b67",
        byline: "By Ezra Klein",
        item_type: "Article",
        updated_date: "2023-02-21T09:07:56-05:00",
        created_date: "2023-02-19T01:00:06-05:00",
        published_date: "2023-02-19T01:00:06-05:00",
        material_type_facet: "",
        kicker: "Ezra Klein",
        des_facet: [
        "United States Politics and Government",
        "Content Type: Personal Profile",
        "Age, Chronological",
        "Presidential Election of 2024"
        ],
        org_facet: [
        "Democratic Party"
        ],
        per_facet: [
        "Biden, Joseph R Jr"
        ],
        geo_facet: [ ],
        multimedia: [
        {
        url: "https://static01.nyt.com/images/2023/02/21/multimedia/19klein-1-gwkf/19klein-1-gwkf-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Mark Abramson for The New York Times"
        },
        {
        url: "https://static01.nyt.com/images/2023/02/21/multimedia/19klein-1-gwkf/19klein-1-gwkf-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Mark Abramson for The New York Times"
        },
        {
        url: "https://static01.nyt.com/images/2023/02/21/multimedia/19klein-1-gwkf/19klein-1-gwkf-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Mark Abramson for The New York Times"
        }
        ],
        short_url: "https://nyti.ms/418r6J1"
        },
        {
        section: "opinion",
        subsection: "",
        title: "American Teens Are Really Miserable. Why?",
        abstract: "Social media has added to a sense of isolation.",
        url: "https://www.nytimes.com/2023/02/18/opinion/depression-teen-social.html",
        uri: "nyt://article/d9a72f17-a92b-5ce4-878a-e9439433479d",
        byline: "By Ross Douthat",
        item_type: "Article",
        updated_date: "2023-02-20T20:06:11-05:00",
        created_date: "2023-02-18T15:00:03-05:00",
        published_date: "2023-02-18T15:00:03-05:00",
        material_type_facet: "",
        kicker: "Ross Douthat",
        des_facet: [
        "Teenagers and Adolescence",
        "Women and Girls",
        "Social Media",
        "Smartphones",
        "Depression (Mental)"
        ],
        org_facet: [ ],
        per_facet: [
        "Haidt, Jonathan",
        "Obama, Barack",
        "Trump, Donald J"
        ],
        geo_facet: [ ],
        multimedia: [
        {
        url: "https://static01.nyt.com/images/2023/02/18/opinion/18DOUTHAT1-02/18DOUTHAT1-02-superJumbo.jpg",
        format: "Super Jumbo",
        height: 1365,
        width: 2048,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Georgi Jevic/Getty Images"
        },
        {
        url: "https://static01.nyt.com/images/2023/02/18/opinion/18DOUTHAT1-02/18DOUTHAT1-02-threeByTwoSmallAt2X.jpg",
        format: "threeByTwoSmallAt2X",
        height: 400,
        width: 600,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Georgi Jevic/Getty Images"
        },
        {
        url: "https://static01.nyt.com/images/2023/02/18/opinion/18DOUTHAT1-02/18DOUTHAT1-02-thumbLarge.jpg",
        format: "Large Thumbnail",
        height: 150,
        width: 150,
        type: "image",
        subtype: "photo",
        caption: "",
        copyright: "Georgi Jevic/Getty Images"
        }
        ],
        short_url: "https://nyti.ms/3lLTMaG"
        },
        {
            section: "opinion",
            subsection: "poop",
            title: "We’re Not Asking the Right Question About Biden",
            abstract: "The oldest president has an argument about the future.",
            url: "https://www.nytimes.com/2023/02/19/opinion/biden-campaign-2024-2020.html",
            uri: "nyt://article/d885a7a7-e909-5080-8c29-2dc7df227b67",
            byline: "By Ezra Klein",
            item_type: "Article",
            updated_date: "2023-02-21T09:07:56-05:00",
            created_date: "2023-02-19T01:00:06-05:00",
            published_date: "2023-02-19T01:00:06-05:00",
            material_type_facet: "",
            kicker: "Ezra Klein",
            des_facet: [
            "United States Politics and Government",
            "Content Type: Personal Profile",
            "Age, Chronological",
            "Presidential Election of 2024"
            ],
            org_facet: [
            "Democratic Party"
            ],
            per_facet: [
            "Biden, Joseph R Jr"
            ],
            geo_facet: [ ],
            multimedia: [
            {
            url: "https://static01.nyt.com/images/2023/02/21/multimedia/19klein-1-gwkf/19klein-1-gwkf-superJumbo.jpg",
            format: "Super Jumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Mark Abramson for The New York Times"
            },
            {
            url: "https://static01.nyt.com/images/2023/02/21/multimedia/19klein-1-gwkf/19klein-1-gwkf-threeByTwoSmallAt2X.jpg",
            format: "threeByTwoSmallAt2X",
            height: 400,
            width: 600,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Mark Abramson for The New York Times"
            },
            {
            url: "https://static01.nyt.com/images/2023/02/21/multimedia/19klein-1-gwkf/19klein-1-gwkf-thumbLarge.jpg",
            format: "Large Thumbnail",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Mark Abramson for The New York Times"
            }
            ],
            short_url: "https://nyti.ms/418r6J1"
            },
            {
            section: "opinion",
            subsection: "",
            title: "American Teens Are Really Miserable. Why?",
            abstract: "Social media has added to a sense of isolation.",
            url: "https://www.nytimes.com/2023/02/18/opinion/depression-teen-social.html",
            uri: "nyt://article/d9a72f17-a92b-5ce4-878a-e9439433479d",
            byline: "By Ross Douthat",
            item_type: "Article",
            updated_date: "2023-02-20T20:06:11-05:00",
            created_date: "2023-02-18T15:00:03-05:00",
            published_date: "2023-02-18T15:00:03-05:00",
            material_type_facet: "",
            kicker: "Ross Douthat",
            des_facet: [
            "Teenagers and Adolescence",
            "Women and Girls",
            "Social Media",
            "Smartphones",
            "Depression (Mental)"
            ],
            org_facet: [ ],
            per_facet: [
            "Haidt, Jonathan",
            "Obama, Barack",
            "Trump, Donald J"
            ],
            geo_facet: [ ],
            multimedia: [
            {
            url: "https://static01.nyt.com/images/2023/02/18/opinion/18DOUTHAT1-02/18DOUTHAT1-02-superJumbo.jpg",
            format: "Super Jumbo",
            height: 1365,
            width: 2048,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Georgi Jevic/Getty Images"
            },
            {
            url: "https://static01.nyt.com/images/2023/02/18/opinion/18DOUTHAT1-02/18DOUTHAT1-02-threeByTwoSmallAt2X.jpg",
            format: "threeByTwoSmallAt2X",
            height: 400,
            width: 600,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Georgi Jevic/Getty Images"
            },
            {
            url: "https://static01.nyt.com/images/2023/02/18/opinion/18DOUTHAT1-02/18DOUTHAT1-02-thumbLarge.jpg",
            format: "Large Thumbnail",
            height: 150,
            width: 150,
            type: "image",
            subtype: "photo",
            caption: "",
            copyright: "Georgi Jevic/Getty Images"
            }
            ],
            short_url: "https://nyti.ms/3lLTMaG"
            },
            {
                section: "opinion",
                subsection: "poop",
                title: "We’re Not Asking the Right Question About Biden",
                abstract: "The oldest president has an argument about the future.",
                url: "https://www.nytimes.com/2023/02/19/opinion/biden-campaign-2024-2020.html",
                uri: "nyt://article/d885a7a7-e909-5080-8c29-2dc7df227b67",
                byline: "By Ezra Klein",
                item_type: "Article",
                updated_date: "2023-02-21T09:07:56-05:00",
                created_date: "2023-02-19T01:00:06-05:00",
                published_date: "2023-02-19T01:00:06-05:00",
                material_type_facet: "",
                kicker: "Ezra Klein",
                des_facet: [
                "United States Politics and Government",
                "Content Type: Personal Profile",
                "Age, Chronological",
                "Presidential Election of 2024"
                ],
                org_facet: [
                "Democratic Party"
                ],
                per_facet: [
                "Biden, Joseph R Jr"
                ],
                geo_facet: [ ],
                multimedia: [
                {
                url: "https://static01.nyt.com/images/2023/02/21/multimedia/19klein-1-gwkf/19klein-1-gwkf-superJumbo.jpg",
                format: "Super Jumbo",
                height: 1365,
                width: 2048,
                type: "image",
                subtype: "photo",
                caption: "",
                copyright: "Mark Abramson for The New York Times"
                },
                {
                url: "https://static01.nyt.com/images/2023/02/21/multimedia/19klein-1-gwkf/19klein-1-gwkf-threeByTwoSmallAt2X.jpg",
                format: "threeByTwoSmallAt2X",
                height: 400,
                width: 600,
                type: "image",
                subtype: "photo",
                caption: "",
                copyright: "Mark Abramson for The New York Times"
                },
                {
                url: "https://static01.nyt.com/images/2023/02/21/multimedia/19klein-1-gwkf/19klein-1-gwkf-thumbLarge.jpg",
                format: "Large Thumbnail",
                height: 150,
                width: 150,
                type: "image",
                subtype: "photo",
                caption: "",
                copyright: "Mark Abramson for The New York Times"
                }
                ],
                short_url: "https://nyti.ms/418r6J1"
                },
                {
                section: "opinion",
                subsection: "",
                title: "American Teens Are Really Miserable. Why?",
                abstract: "Social media has added to a sense of isolation.",
                url: "https://www.nytimes.com/2023/02/18/opinion/depression-teen-social.html",
                uri: "nyt://article/d9a72f17-a92b-5ce4-878a-e9439433479d",
                byline: "By Ross Douthat",
                item_type: "Article",
                updated_date: "2023-02-20T20:06:11-05:00",
                created_date: "2023-02-18T15:00:03-05:00",
                published_date: "2023-02-18T15:00:03-05:00",
                material_type_facet: "",
                kicker: "Ross Douthat",
                des_facet: [
                "Teenagers and Adolescence",
                "Women and Girls",
                "Social Media",
                "Smartphones",
                "Depression (Mental)"
                ],
                org_facet: [ ],
                per_facet: [
                "Haidt, Jonathan",
                "Obama, Barack",
                "Trump, Donald J"
                ],
                geo_facet: [ ],
                multimedia: [
                {
                url: "https://static01.nyt.com/images/2023/02/18/opinion/18DOUTHAT1-02/18DOUTHAT1-02-superJumbo.jpg",
                format: "Super Jumbo",
                height: 1365,
                width: 2048,
                type: "image",
                subtype: "photo",
                caption: "",
                copyright: "Georgi Jevic/Getty Images"
                },
                {
                url: "https://static01.nyt.com/images/2023/02/18/opinion/18DOUTHAT1-02/18DOUTHAT1-02-threeByTwoSmallAt2X.jpg",
                format: "threeByTwoSmallAt2X",
                height: 400,
                width: 600,
                type: "image",
                subtype: "photo",
                caption: "",
                copyright: "Georgi Jevic/Getty Images"
                },
                {
                url: "https://static01.nyt.com/images/2023/02/18/opinion/18DOUTHAT1-02/18DOUTHAT1-02-thumbLarge.jpg",
                format: "Large Thumbnail",
                height: 150,
                width: 150,
                type: "image",
                subtype: "photo",
                caption: "",
                copyright: "Georgi Jevic/Getty Images"
                }
                ],
                short_url: "https://nyti.ms/3lLTMaG"
                },
    ]
    const [searchParams, setSearchParams] = useSearchParams();
    const currentParams = Object.fromEntries([...searchParams]);
  
    const [filtered, setFiltered] = useState(stories.filter((story) => {
      const name = currentParams.title ? currentParams.title.toLowerCase() : "";
      const nameMatches = story.title.toLowerCase().includes(name);
      return nameMatches
    }));

  return (
    <div className='MainView'>
        <Form />
        {/* {!stories.length ? (
            <p>Could not load stories</p>
        ) : (
            !stories.length && <p>No stories found</p>
        )} */}
        <div className="all-card-container">
            {stories.map((story) => {
            return (
                <Card
                key={story.uri}
                id={story.uri}
                title={story.title}
                section={story.subsection}
                byline={story.byline}
                image={story.multimedia[1].url}
                imageAlt={story.multimedia[1].caption}
                />
            )
            })}
        </div>
    </div>
  );
}

export default MainView;