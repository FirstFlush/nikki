import Link from "next/link"
import { MenuItem } from "@mui/material"
import { BasicLinkProps } from "../common/commonTypes"


export const DropdownMenuItem: React.FC<BasicLinkProps> = ({link, text, external, onClick}) => {

    return (
        external ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
                <MenuItem onClick={onClick}>
                    {text}
                </MenuItem>
            </a>
        ) : (
            <Link href={link}>
                <MenuItem onClick={onClick}>
                    {text}
                </MenuItem>
            </Link>
        )


        // <Link href={link}>
        //     <MenuItem onClick={onClick}>
        //         {text}
        //     </MenuItem>
        // </Link>
    )
}