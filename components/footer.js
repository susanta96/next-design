import React from 'react'
import Link from 'next/link'
import Styles from '../static/Styles/footerStyle'
import { Grid } from '@material-ui/core'

const footer = () => (
    <footer style={Styles.footer}>
        <Grid container spacing={24}>
            <Grid item xs={1} lg={2}></Grid>
            <Grid item xs={3} lg={3} style={Styles.footerTextLink}>
                <Link href="#">
                    <a><div style={Styles.item}>Courses </div>
                       
                    </a>
                </Link>
                <Link href="#">
                    <a>
                    <div style={Styles.item}>Articles </div>
                    </a>
                </Link>
                <Link href="#">
                    <a>
                    <div style={Styles.item}>Videos </div>
                    </a>
                </Link>
            </Grid>
            <Grid item xs={3} lg={3} style={Styles.footerTextLink}>
                <Link href="#">
                    <a><div style={Styles.item}>About Us </div>
                       
                    </a>
                </Link>
                <Link href="#">
                    <a>
                    <div style={Styles.item}>Privacy Policy </div>
                    </a>
                </Link>
                <Link href="#">
                    <a>
                    <div style={Styles.item}>Careers </div>
                    </a>
                </Link>
            </Grid>
            <Grid item xs={3} lg={3} style={Styles.footerTextLink}>
                <Link href="#">
                    <a><div style={Styles.item}>About Us </div>
                       
                    </a>
                </Link>
                <Link href="#">
                    <a>
                    <div style={Styles.item}>Privacy Policy </div>
                    </a>
                </Link>
                <Link href="#">
                    <a>
                    <div style={Styles.item}>Careers </div>
                    </a>
                </Link>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>

    </footer>
)

export default footer;