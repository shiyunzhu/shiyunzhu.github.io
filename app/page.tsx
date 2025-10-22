import { Box, Grid, Typography } from '@mui/material';
import data from './data';
import AdventCard from './components/AdventCard';
import AdventCardDataProvider from "./AdventCardDataProvider";

export default function Home() {

  return (
    <AdventCardDataProvider>
      <Box sx={{padding: 12}}>    
        <Grid container spacing={12}>
          <Grid size={12}>
            <Typography variant="h1" component="h1">Christmas 2025</Typography>
          </Grid>
          <Grid container size={12} spacing={12}>
            {data.map((item) => (
              <Grid size={4} key={item.id}>
                <AdventCard id={item.id} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </AdventCardDataProvider>

  );
}
