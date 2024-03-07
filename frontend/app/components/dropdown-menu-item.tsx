import Link from "next/link"
import { MenuItem } from "@mui/material"
import { BasicLinkProps } from "../common/commonTypes"


export const DropdownMenuItem: React.FC<BasicLinkProps> = ({link, text, onClick}) => {

    return (
        <Link href={link}>
            <MenuItem onClick={onClick}>
                {text}
            </MenuItem>
        </Link>
    )
}