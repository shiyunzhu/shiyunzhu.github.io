import { Box, Grid, Typography } from '@mui/material';
import CheckAnswer from './components/CheckAnswer';
import { Festive} from "next/font/google";

const festive = Festive({
  weight: ["400"],
  variable: "--font-festive",
  subsets: ["latin"],
})

export default function Home() {

  return (
      <Box sx={{
        padding: { xs: 2, sm: 4, md: 4, lg: 4 },
        paddingTop: { xs: 4, sm: 4, md: 4, lg: 4 }, 
        maxWidth: 800, 
        mx: 'auto'
      }}>  
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid size={12}>
            <Typography 
            className={festive.className}
              variant="h1" 
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                textAlign: 'center',
                mb: 2
              }}
            >
              Gonzalez Zhu Christmas 2025
            </Typography>
          </Grid>
          <Grid size={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <img
                src="/images/christmas-tree-1.jpg" 
                alt="Christmas Tree" 
                width={600}
                height={400}
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  borderRadius: '8px'
                }}
              />
            </Box>
          </Grid>
          <Grid size={12}>
            <CheckAnswer />
          </Grid>
        </Grid>
      </Box>
  );
}
