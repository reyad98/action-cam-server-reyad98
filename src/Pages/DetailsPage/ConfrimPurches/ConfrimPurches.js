import { Button, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Purches from '../Purches/Purches';

const ConfrimPurches = ({name,price}) => {
    


    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    // const { name, time, space } = booking;

    const { serviceId } = useParams();
    const [service,setService]= useState({})
    console.log(serviceId);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    },[])


    return (
        <>
        <Grid sx={{alignContent:'center',justifyContent:'center'}} item xs={12} sm={12} md={12}>
            <Paper elevation={3} sx={{ py: 5 }}>

                <Typography variant="h5" gutterBottom component="div" sx={{ color: 'info.main', fontWeight: 600 }}>
                    {service.name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {service.price}$
                </Typography>
                
                <Button onClick={handleBookingOpen} variant="contained" >Show Details & Purches</Button>
            </Paper>

        </Grid>
        <Purches
            dname={name}
            price={price}
            open={openBooking}
            handleBookingClose={handleBookingClose}
        >
        </Purches>
    </>
    );
};

export default ConfrimPurches;