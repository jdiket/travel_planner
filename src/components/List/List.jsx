import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, Menu, FormControl, Select, MenuItem } from '@material-ui/core';

import useStyles from './styles';
import Details from '../Details/Details';

const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    const places = [
        { name: 'Cool Place' },
        { name: 'Best Place' },
        { name: 'Bestest Place' },
    ];

    return (
        <div className={classes.container} >
            <Typography variant="h4">Restaurants, Hotels, & Attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="resaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>3+ Stars</MenuItem>
                    <MenuItem value={4}>4+ Stars</MenuItem>
                    <MenuItem value={5}>5 Stars</MenuItem>
                </Select>
            </FormControl>

            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12} >
                        <Details />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List;