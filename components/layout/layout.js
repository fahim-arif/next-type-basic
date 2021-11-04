import React from 'react'
import MainHeader from './main-header'

function layout(props) {
    return (
        <React.Fragment>
            <MainHeader />
            <main>
                {props.children}

            </main>
        </React.Fragment>
    )
}

export default layout
