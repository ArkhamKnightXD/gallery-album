import React from 'react';
import {AppBar, CardActionArea, CardContent, CardMedia, Toolbar, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import  BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/core/Pagination';


const useStyles = makeStyles((theme) => ({
         appBar: {
             backgroundColor: "#fff"
         },
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./blog-bg.jpg')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em",
        }
    },

    blogsContainer: {
             paddingTop: theme.spacing(3)
    },
    blogTitle: {
             fontWeight: 800,
        paddingBottom: theme.spacing(3)
    },
    card: {
             maxWidth: "100%",
    },
    media: {
             height: 240
    },
    cardActions: {
             display: "flex",
             margin: "0 10px",
             justifyContent: "space-between",
    },
    author: {
             display: "flex",

    },
    paginationContainer: {
             display: "flex",
             justifyContent: "center",

}


}));




export default function BlogPage(){

    const classes = useStyles();



    return(

        <div>





            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Typography variant="h6" color="primary">
                        Blog
                    </Typography>
                </Toolbar>
            </AppBar>



            <Box className={classes.hero}>
                <Box>React Blog</Box>
            </Box>



            <Container maxWidth="lg" className={classes.blogsContainer}>
                <Typography variant="h4" className={classes.blogTitle}>
                    Articles
                </Typography>

                <Grid container spacing={3}>







                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} image="./blog1.jpg"  title="Contemplative Reptile"/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        React useContext
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6, 000 species,
                                        ranging across all continents except Antarctica.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions className={classes.cardActions}>
                                <Box className={classes.author}>
                                      <Avatar src="./face2.jpg"/>
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            John Cooper
                                        </Typography>

                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                            May 20, 2022
                                        </Typography>
                                    </Box>

                                </Box>

                                <Box>
                                  <BookmarkBorderIcon/>
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>








                    <Grid item xs={12} sm={6} md={4}>

                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} image="./blog1.jpg"  title="Contemplative Reptile"/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        React useContext
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6, 000 species,
                                        ranging across all continents except Antarctica.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions className={classes.cardActions}>
                                <Box className={classes.author}>
                                    <Avatar src="./face1.jpg"/>
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Guy Clemons
                                        </Typography>

                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                            May 14, 2022
                                        </Typography>
                                    </Box>

                                </Box>

                                <Box>
                                    <BookmarkBorderIcon/>
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>







                    <Grid item xs={12} sm={6} md={4}>

                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} image="./blog1.jpg"  title="Contemplative Reptile"/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        React useContext
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6, 000 species,
                                        ranging across all continents except Antarctica.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions className={classes.cardActions}>
                                <Box className={classes.author}>
                                    <Avatar src="./face3.jpg"/>
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Rose Hopper
                                        </Typography>

                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                            May 27, 2022
                                        </Typography>
                                    </Box>

                                </Box>

                                <Box>
                                    <BookmarkBorderIcon/>
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>









                    <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia className={classes.media} image="./blog1.jpg"  title="Contemplative Reptile"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React useContext
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6, 000 species,
                                    ranging across all continents except Antarctica.
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src="./face4.jpg"/>
                                <Box ml={2}>
                                    <Typography variant="subtitle2" component="p">
                                        Tom Miller
                                    </Typography>

                                    <Typography variant="subtitle2" color="textSecondary" component="p">
                                        April 30, 2022
                                    </Typography>
                                </Box>

                            </Box>

                            <Box>
                                <BookmarkBorderIcon/>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>




                </Grid>

                <Box my={4} className={classes.paginationContainer}>
                    <Pagination count={10}/>
                </Box>
            </Container>







        </div>

    );
}
