import {
    AppBar,
    Button,
    Card, CardActions,
    CardContent,
    CardMedia,
    Container,
    CssBaseline,
    Grid,
    Toolbar,
    Typography
} from "@material-ui/core";
import {Restaurant} from "@material-ui/icons";
import useStyles from "../style";
import '../spinner.css';
import HashLoader from "react-spinners/HashLoader";
import useLoading from "./useLoading";

function Gallery() {

    const classes = useStyles();

    const cards = [
        {productName: 'Tomatoes',
        productPrice: 15,
        productImage: './assets-grocery/tomatoes.jpg'},

        {productName: 'Lettuce',
            productPrice: 50,
            productImage: './assets-grocery/lettuce.jpg'},

        {productName: 'Eggs',
            productPrice: 50,
            productImage: './assets-grocery/eggs.jpg'},

        {productName: 'Coca-cola',
            productPrice: 60,
            productImage: './assets-grocery/cocacola.jpg'},

        {productName: 'Rice',
            productPrice: 200,
            productImage: './assets-grocery/arroz.jpg'},

        {productName: 'Oats',
            productPrice: 30,
            productImage: './assets-grocery/avena.jpg'},

        {productName: 'Beans',
            productPrice: 30,
            productImage: './assets-grocery/beans.jpg'},

        {productName: 'Carrots',
            productPrice: 25,
            productImage: './assets-grocery/carrot.jpg'},

        {productName: 'Peppers',
            productPrice: 20,
            productImage: './assets-grocery/ajis.jpg'},
     ]




    const loading = useLoading(1000);

    return (
        <>

            {/*si loading es true, mostrara el spinner de carga, y si es false mostrara la pagina.*/}
            {loading === true ? <HashLoader className="spin-app" color={'#0B3C8D'} loading={loading} size={60}/>

                : <div style={{background: 'none'}}>
                    <CssBaseline/>
                    <AppBar style={{marginTop: 72, backgroundColor: '#B12E0E'}} position="relative">
                        <Toolbar>
                            <Restaurant className={classes.icon}/>
                            <Typography variant="h6">
                                Grocery Store
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <main>
                        <div className={classes.container}>
                            <Container maxWidth="sm">
                                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                                    Grocery Store
                                </Typography>
                                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                    Explore a wide range of food product options,
                                    carefully selected so you can find the best quality
                                    available at the lowest cost.
                                </Typography>
                            </Container>
                        </div>
                        <div className={classes.buttons}>

                            <Grid container spacing={2} justifyContent="center">

                                <Grid item>
                                    <Button variant="contained" style={{backgroundColor: 'red', color: '#fff'}}>
                                        See all products
                                    </Button>
                                </Grid>


                                <Grid item>
                                    <Button variant="outlined" style={{borderColor: '#B12E0E', color: '#B12E0E'}}>
                                        Check out today's discounts!
                                    </Button>
                                </Grid>

                            </Grid>

                        </div>
                        <Container className={classes.cardGrid} maxWidth="md">
                            <Grid container spacing={4}>
                                {cards.map((card) => (


                                    <Grid item key={card} xs={12} sm={6} md={4}>
                                        <Card className={classes.card}>
                                            <CardMedia className={classes.cardMedia}
                                                       image={card.productImage}
                                                       title="Image title"

                                            />
                                            <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom variant="h5">
                                                    {card.productName}
                                                </Typography>
                                                <Typography>
                                                    {card.productPrice}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" style={{color: 'red'}}>View</Button>
                                                <Button size="small" style={{color: 'red'}}>Buy</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}


                            </Grid>

                        </Container>
                    </main>
                    <footer className={classes.footer}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Footer
                        </Typography>
                        <Typography variant="subtitle1" align="center" color="textSecondary">
                            Something here to give the footer a purpose!
                        </Typography>
                    </footer>
                </div>
            }
        </>
    );
}

export default Gallery;
