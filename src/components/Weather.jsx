import { makeStyles, Box, Typography } from '@material-ui/core';
import Image from '../img/bg.jpg';
import Form from './Form';

const useStyles = makeStyles({
    component: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        width: '65%',
        margin: '0 auto'
    },
    leftContainer: {
        width: '27%',
        height: '80%',
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        borderRadius: '20px 0 0 20px'
    },
    rightContainer: {
        width: '73%',
        height: '80%',
        background: 'linear-gradient(to right, #e74c3c, #e67e22)',
    },
    
})
const top= makeStyles({
    component: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        width: '65%',
        margin: '0 auto'
    },
    head:{
        margin:"0% 25% 0% 20%",
        padding:"0% 0% 0% 20%",
        width: '40%',
        height: '5%',
        background: 'linear-gradient(to right, #e74c3c, #e67e22)',
    }
})

const Weather = () => {
    const classes = useStyles();
    const class1=top();
    return (
        <Box > 
            <Box className={class1.component} className={class1.head}  ><h1>WEATHER-APP</h1></Box>
        <Box className={classes.component}>
            <Box className={classes.leftContainer}></Box>
            <Box className={classes.rightContainer}>
                <Form />
            </Box>
        </Box>
        </Box>
    )
}

export default Weather;