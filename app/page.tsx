import { Box, Grid } from '@mui/material';
import CheckAnswer from './components/CheckAnswer';
import ConversationStarter from './components/ConversationStarter';

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
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <img
                src="/images/logo_cropped_2.jpg" 
                alt="Gonzalez Zhu Christmas 2025 Las Vegas Sign" 
                width={250}
                height={350}
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
          <Grid size={12}>
            <ConversationStarter />
          </Grid>
        </Grid>
      </Box>
  );
}
