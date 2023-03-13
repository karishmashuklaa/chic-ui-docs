import React from 'react'
import { Drawer } from 'chic-ui'


export function BasicDrawer() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(!open);
    return (
        <>
            <button onClick={handleClose}>Open Drawer</button>
            <Drawer
                open={open}
                size="default"
                closable={true}
                placement="bottom"
                header="Header Content"
                footer="Footer content"
                onClose={handleClose}
            >
                <div>Some contents...</div>
                <div> Some contents...</div>
                <div> Some contents...</div>
            </Drawer>
        </>
    );
}