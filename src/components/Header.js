

import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { AppBar, Toolbar } from '@mui/material';


import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    header: {
        background: '#fff !important',
        height: 70
    },
    menu: {
        color: '#000'
    },
    image: {
        height: 55,
        margin: 'auto',
        paddingRight: 70
    }
})

const Header = () => {
    const classes = useStyles();
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return (
        <AppBar className={classes.header}>
            <Toolbar>
           
                <MenuOpenOutlinedIcon className={classes.menu} />
                <div>aryan</div>
                <img src={url} alt="logo" className={classes.image} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;