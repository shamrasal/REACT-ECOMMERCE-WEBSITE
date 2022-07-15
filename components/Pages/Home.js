import React, { useState, useEffect } from "react"
import HomeList from "./homeList"
import classes from './Home.module.css'

const tourElement = [
    {
        id: 'tour1',
        date: "JUL 16",
        city: 'DETROIT, MI',
        place: 'DTE ENERGY MUSIC THEATRE'
    },
    {
        id: 'tour2',
        date: "JUL 23",
        city: 'TORONTO,ON',
        place: 'BUDWEISER STAGE'
    },
    {
        id: 'tour3',
        date: "JUL 22",
        city: 'BRISTOW, VA',
        place: 'JIGGY LUBE LIVE'
    },
    {
        id: 'tour4',
        date: "JUL 29",
        city: 'PHOENIX, AZBRISTOW, VA',
        place: 'AK-CHIN PAVILION'
    },
]
const Home = () => {
    const [dataItem, setDataItem] = useState()
    useEffect(() => {
        async function xyz() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()

            const ListItems = data.map((item) => (
                <HomeList
                    key={item.id}
                    date={item.address.city}
                    city={item.name}
                    place={item.address.street}
                ></HomeList>
            ))
            setDataItem(ListItems)
        }
        xyz()
    }, [])
    return (
        <div className={classes.home}>
            <h2>Tours</h2>
            <ul>
                {dataItem}
            </ul>
        </div>
    )
}

export default Home