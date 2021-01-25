import { render, fireEvent, rerender, screen, waitFor } from '@testing-library/react';
import App from '../App';
import React from 'react';
import axios from 'axios'

jest.mock('axios');

test("sanity test", ()=>{
    render(<App/>)
})

test("It shows Fetching", ()=>{
    render(<App/>)
    screen.queryByText("Fetching data");
})


test("it fetches data", async ()=>{
    axios.get.mockResolvedValueOnce({
        data:{
            name: "Stranger Things",
            summary: "<p>A love letter to the 80's that captivated a generation.</p>",
            image: {},
            _embedded:{
                episodes:[]
            }
        }
    })

    render(<App/>)

    await waitFor(()=>{
        screen.queryByText('Strangers Pings')
    })
})