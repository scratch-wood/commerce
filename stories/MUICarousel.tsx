import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

interface ItemProps {
    name: string;
    description: string;
}

interface CarouselProps {
    items: Array<ItemProps>
}


export default function MUICarousel(props: CarouselProps) {
    return (
        <Carousel>
            {
                props.items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}