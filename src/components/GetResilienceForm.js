import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    space: {
        height: theme.spacing(2)
    },
    padding: {
        paddingTop: theme.spacing(3)
    }
}));

const Form = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Grid container spacing={4} className={classes.padding}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Organization"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Your Role"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Your Name"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Your Email"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container direction="column">
                    <div className={classes.space} />
                    <Grid item >
                        <Typography variant="title">
                            <p>What's the organization's main area of focus? (purpose/demographic/geographic/etc)</p>
                        </Typography>
                        <TextField
                            label="Answer"
                            fullWidth
                            multiline
                            rows={2}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item >
                        <div className={classes.space} />
                        <Typography variant="title">
                            <p>What are the top 3 issues you want to improve?</p>
                        </Typography>
                        <TextField
                            label="Answer"
                            fullWidth
                            multiline
                            variant="outlined"
                            rows={2}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <div className={classes.space} />
                        <Typography variant="title">
                            <p>How did you hear about us?</p>
                        </Typography>
                        <TextField
                            label="Answer"
                            fullWidth
                            multiline
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <div className={classes.space} />
                <Grid container justify="center">
                    <Button
                        color="primary"
                        variant="contained">
                        Submit
                    </Button>
                </Grid>
            </Container>
        </>
    )
}

export default Form;

/*
container
                    alignItems="center"
                    alignContent="center"
                    className={classes.grid}
*/