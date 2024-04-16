import Link from "next/link";
import { Typography, useTheme } from "@mui/material";
import { BasicLinkProps } from "../common/commonTypes";

export const NavLink: React.FC<BasicLinkProps> = ({
    link,
    text,
    external = false,
    hide = true
}) => {
    const theme = useTheme();
    return (
        <Typography
            color={theme.palette.text.secondary}
            sx={{
                "&:hover": {
                    color: "inherit",
                    cursor: "pointer",
                },
                display: hide ? { xs: "none", sm: "inline" } : { xs: "inline", sm: "inline" },
            }}
        >
            {external ? (
                <a href={link} target="_blank" rel="noopener noreferrer">{text}</a>
            ) : (
                <Link href={link}>{text}</Link>
            )}
        </Typography>
    );
};

// export default function NavLink(url:string, text:string) {

//     const theme = useTheme()
//     return (
//     )

// }
