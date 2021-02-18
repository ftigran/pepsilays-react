import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';

import './Questions.scss'

export default function getAccordeon(arr){
    const rowsPerPage=7;
    const [page, setPage] = React.useState(1);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    return(
        <Grid className='questions'>
            <h1>
                Часто задаваемые вопросы
            </h1>

            {
                arr.slice((page-1) * rowsPerPage, (page-1) * rowsPerPage + rowsPerPage).map((row, id) => {
                return(
                    <Accordion defaultExpanded={row.expanded} className={'questionsAccordeon'}>
                        <AccordionSummary
                        className={'questionsAccordeonSummary'}
                        expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={'questionsAccordeonTitle'}>{row.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={'questionsAccordeonText'}>
                                {row.text}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
            <Pagination
            className={'FAQPagination'}
            count={Math.ceil(arr.length/rowsPerPage)} 
            page={page} 
            onChange={handleChangePage}  
            />
        </Grid>
        
    )
}