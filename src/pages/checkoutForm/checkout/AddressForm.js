import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from '../CustomTextField';
import { Link } from 'react-router-dom';
import { commerce } from '../../../lib/commerce.js';

const AddressForm = ({ checkoutToken, next }) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();


    const countries = (shippingCountries.NG);
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }));
    // const options = Object.entries(shippingOptions).map(([so]) => ({ id: so.id, label: `${so.description} - (${so.price.formatted_with_symbol})`}));
    //  console.log(shippingOptions);

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);

    }

    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);

    }

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });

        setShippingOptions(options);
        setShippingOptions(options[0].id)
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, []);

    useEffect(() => {
        if (shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);

    useEffect(() => {
        if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [shippingSubdivision]);


    return (
        <div>
            <Typography variant='h6' gutterBottom >Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
                    <Grid container spacing={3}>
                        <FormInput name='firstName' label='First name' />
                        <FormInput name='lastName' label='Last name' />
                        <FormInput name='address1' label='Address' />
                        <FormInput name='email' label='Email' id='email' />
                        <FormInput name='city' label='City' />
                        <FormInput name='ZIP' label='ZIP / Postal code' />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Country</InputLabel>
                            <div style={{ padding: '.2rem' }} />
                            <Button value={shippingCountry} style={{ color: 'gray' }} variant="contained" disabled>
                                <b> {countries} </b>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Select State</InputLabel>
                            <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                {subdivisions.map((subdivision) => (
                                    <MenuItem key={subdivision.id} value={subdivision.id}>
                                        {subdivision.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Fee</InputLabel>
                            <div style={{ padding: '.2rem' }} />
                            <Button variant="contained" style={{ color: 'gray' }} disabled>
                                <b>Standard shipping fee of
                                    &#8358;1000 </b>
                            </Button>
                        </Grid>
                    </ Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button component={Link} to='/cart' variant='outlined'>Bact to cart</Button>
                        <Button type='submit' variant='contained' color='primary'>Next</Button>

                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default AddressForm
