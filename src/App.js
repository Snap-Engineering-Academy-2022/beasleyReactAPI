import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './App.css';
import CharacterCard from './CharacterCard';
// import characters from './protagonists.json'

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid lightgray' }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Characters Inc
          </Typography>
          <Button 
            href="#" 
            variant="outlined" 
            sx={{ my: 1, mx: 1.5 }}
            onClick={() => alert("Boop!")}
          >
            Button
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ my: 4}}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2}}
        >
          Prevalent Protagonists
        </Typography>
        <Typography 
          variant="h5" 
          align="center" 
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          Hmm, seems like we're missing some of the other protagonists.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg">
        <Grid container 
          spacing={5} 
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid
            item
            xs={12}
            md={4}
          >
            <CharacterCard
            heroImage = "https://i.imgur.com/56chgMj.png"
            name= "Miles Morales"
            fact1 = "Definitly Not Spiderman"
            fact2 = '"Lanky Puberty Boy" vibe'
            fact3 = "Can't do it on demand"
            fact4 = "Elite music taste"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <CharacterCard
            heroImage = "https://i.imgur.com/zuscNPl.png"
            name= "Moana Waialiki"
            fact1 = "Glass half full kinda gal"
            fact2 = "Lackluster chicken mom"
            fact3 = "Spaces out looking at water"
            fact4 = "Never really knows why"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <CharacterCard
            heroImage = "https://i.imgur.com/SaYqUTP.png"
            name= "Hero Hamada"
            fact1 = "Saved by a flying pillow. Again."
            fact2 = "Has epic bedhead"
            fact3 = "Hiro = Hiccup, Baymax = Toothless"
            fact4 = "Neeeeeeeeeeeeeeeerd"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
