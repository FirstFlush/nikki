import { AppBar, Toolbar, Typography } from "@mui/material";


const Footer:React.FC = () => {

    return (
        <AppBar position="static" component="footer">
            <Toolbar>
                <Typography>&copy; Nikki Racing 2024</Typography>
            </Toolbar>
        </AppBar>
    )
};

export default Footer