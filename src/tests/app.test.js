import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import React from 'react';
import { fetchShow as mockFetch } from '../api/fetchShow'

jest.mock('../api/fetchShow');
let data = ({
    name: "Stranger Things",
    summary: "<p>A love letter to the 80's that captivated a generation.</p>",
    image: {
        original: "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
    },
    _embedded:{
        episodes:[{airdate: "2016-07-15",
        airstamp: "2016-07-15T12:00:00+00:00",
        airtime: "",
        id: 553946,
        image: {original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"},
        name: "Chapter One: The Vanishing of Will Byers",
        number: 1,
        runtime: 60,
        season: 1,
        summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
        type: "regular",
        url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers"}]
    }
})
describe("it tests app.js", ()=>{
beforeEach(jest.clearAllMocks)


test("sanity test", ()=>{
    mockFetch.mockResolvedValueOnce(data)
    
    render(<App/>)
})

test("It shows Fetching", ()=>{
    mockFetch.mockResolvedValueOnce(data)

    render(<App/>)
    screen.queryByText("Fetching data");
})

test("it fetches data", async ()=>{
    mockFetch.mockResolvedValueOnce(data)
    render(<App/>)

    await waitFor(()=>{
        expect(mockFetch).toHaveBeenCalledTimes(1)
    })
})
})