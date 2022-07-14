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
    const ListItems = tourElement.map((item) => (
        <HomeList
            key={Math.random().toString()}
            date={item.date}
            city={item.city}
            place={item.place}
        ></HomeList>
    ))
    return (
        <div className={classes.home}>
            <h2>Tours</h2>
            <ul>
                {ListItems}
            </ul>
        </div>
    )
}

export default Home