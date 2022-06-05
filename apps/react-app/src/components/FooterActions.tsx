import * as React from 'react'
import { 
    CardActions,
    IconButton,
} from '@mui/material'
import { Icon } from "../theme"

export default function FooterActions() {

    return <CardActions sx={{ pl: 1 }}>
                <IconButton
                onClick={() => { 
                    window.open("https://github.com/listingslab-software/discover-godot","_blank")
                }}>
                    <Icon icon="github" color="secondary" />
                </IconButton>
            </CardActions>
}
