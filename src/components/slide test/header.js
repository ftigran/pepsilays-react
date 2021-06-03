import React, {useEffect} from 'react'
import {Grid, Link, useMediaQuery, useTheme, Box, Container, Hidden, useScrollTrigger} from '@material-ui/core'
import {Link as ScrollLink, Events, animateScroll as scroll} from 'react-scroll'
import MyLink from './myLink'
import useReactRouter from 'use-react-router'

const Menu = () => {

    const {history} = useReactRouter()


    const handleClick = (key) => {
        if (window.location.pathname !== '') {
            history.push(`/#${key}`)
        }
    }

    const scrollToTop = () => {
        scroll.scrollToTop()
    }

    const scrollLinks = {
        c_main: 'Главная',
        c_rules: 'Правила',
    }

    return (
        <Container className={'navbar'}>
            <Grid container direction={'row'} justify={'space-around'} alignItems={'center'}>
                <Grid item alignItems={'center'} justify={'flex-start'}>
                    <Box
                        width={{xs: '5em', sm: '17em', md: '8rem', lg: '9rem'}}
                        height={'auto'} display={'flex'} alignItems={'center'}>
                        <Link component={MyLink} className={'menu_item_in'} to="/">
                            Main
                        </Link>

                    </Box>
                </Grid>

                <Grid item alignItems={'center'} justify={'space-between'}>
                    <Grid container direction={'row'} justify={'flex-end'} alignItems={'center'} spacing={2}>
                        {/* <Grid item xs={12} md={'auto'} className={'menu_item'}>
              <Link component={MyLink} className={'menu_item_in'} to="/">
                Главная
              </Link>
            </Grid>*/}

                        {Object.entries(scrollLinks).map(([key, val]) => (
                            <Grid key={key} item xs={12} md={'auto'} className={'menu_item'}
                                  style={{textAlign: "center"}}>
                                <ScrollLink
                                    className={'menu_item_in'}
                                    onClick={() => handleClick(key)}
                                    activeClass="active"
                                    to={key}
                                    spy
                                    smooth
                                    duration={700}
                                    //ignoreCancelEvents
                                >
                                    {val}
                                </ScrollLink>
                                {/* <Link component={MyLink} className={'menu_item_in'} to={`/#${key}`}>{val}</Link>*/}
                            </Grid>
                        ))}
                        <Grid item xs={12} md={'auto'} className={'menu_item'} style={{textAlign: "center"}}>
                            <Link component={MyLink} to={`/faq`} className={'menu_item_in'} onClick={scrollToTop}
                                  style={{textAlign: "center"}}>
                                FAQ
                            </Link>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Menu