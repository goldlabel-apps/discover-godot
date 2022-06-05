import * as React from 'react'
import { 
    Box,
    CardActions,
    IconButton,
} from '@mui/material'
import { Icon } from "../theme"

export default function FooterActions() {

    return <CardActions>
                <Box sx={{ display: "flex", width:"100%" }}>
                    <Box sx={{ flexGrow: 1}} />
                    <Box>
                        <IconButton
                        onClick={() => { 
                            window.open("https://github.com/listingslab-software/discover-godot","_blank")
                        }}>
                            <Icon icon="github" color="secondary" />
                        </IconButton>
                    </Box>
                </Box>
            </CardActions>
}
