export const fetchData = () => {
    return fetch('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=YxKU5MWgb0BMANwdrerB9AAGJcCfCtgI')
      .then(res => res.json())
  }

  export const objectLayout = {
    section: "",
    subsection: "",
    title: "",
    abstract: "",
    url: "",
    uri: "",
    byline: "",
    item_type: "",
    updated_date: "",
    created_date: "",
    published_date: "",
    material_type_facet: "",
    kicker: "",
    des_facet: [
    "",
    "",
    ""
    ],
    org_facet: [
    ""
    ],
    per_facet: [
    "",
    ""
    ],
    geo_facet: [ ],
    multimedia: [
    {
    url: "",
    format: "Super Jumbo",
    height: 1365,
    width: 2048,
    type: "image",
    subtype: "photo",
    caption: "",
    copyright: ""
    },
    {
    url: "",
    format: "threeByTwoSmallAt2X",
    height: 400,
    width: 600,
    type: "image",
    subtype: "photo",
    caption: "",
    copyright: ""
    },
    {
    url: "",
    format: "Large Thumbnail",
    height: 150,
    width: 150,
    type: "image",
    subtype: "photo",
    caption: "",
    copyright: ""
    }
    ],
    short_url: ""
    }