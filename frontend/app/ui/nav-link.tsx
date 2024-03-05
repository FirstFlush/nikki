import Link from 'next/link';
import { Typography, useTheme } from "@mui/material";


type NavLinkProps = {
    link: string;
    text: string;
};


export const NavLink: React.FC<NavLinkProps> = ({link, text}) => {

    const theme = useTheme()
    return (
        <Typography
            color={theme.palette.text.secondary}
            sx={{
                '&:hover': {
                  color: 'inherit', // Applies the inherit value for color on hover
                  cursor: 'pointer', // Changes the cursor to a pointer on hover
                },
                display: {xs: 'none', sm: 'inline'}
            }}
        >
            <Link href={link}>
                {text}
            </Link>
        
        </Typography>
)
}



// export default function NavLink(url:string, text:string) {

//     const theme = useTheme()
//     return (
//     )




// }