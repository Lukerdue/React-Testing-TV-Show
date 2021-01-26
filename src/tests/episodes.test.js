import Episodes from '../components/Episodes';
import React from 'react';
import {queryByText, render, screen} from '@testing-library/react';


const data =
  [
    {
      airdate: "2016-07-15",
      airstamp: "2016-07-15T12:00:00+00:00",
      airtime: "",
      id: 553946,
      image: {
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
      },
      name: "Chapter One: The Vanishing of Will Byers",
      number: 1,
      runtime: 60,
      season: 1,
      summary:
        "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
      type: "regular",
      url:
        "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
    },
  ]

test("it renders", ()=>{
    render(<Episodes episodes={data}/>)
})
test("it displays data", ()=>{
    render(<Episodes episodes={data}/>)
    screen.queryByText("Chapter One")
})