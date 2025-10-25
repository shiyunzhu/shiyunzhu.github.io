import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import data from '../data';

// Generate static params for all events
export function generateStaticParams() {
    return data.map((event) => ({
        event: event.slug,
    }));
}

type Props = {
    params: Promise<{
        event: string;
    }>;
};

export default async function EventPage({ params }: Props) {
    const { event } = await params;
    const eventData = data.find(item => item.slug === event);

    if (!eventData) {
        notFound();
    }

    return (
        <Box sx={{         
            padding: { xs: 2, sm: 4, md: 4, lg: 4 },
            paddingTop: { xs: 4, sm: 4, md: 4, lg: 4 }, 
            maxWidth: 800, 
            mx: 'auto' 
        }}>
            <Button 
                component={Link}
                href="/"
                variant="outlined"
                sx={{ mb: 3 }}
            >
                ← Back to Home
            </Button>
            
            <Card sx={{ mb: 4 }}>
                <CardMedia
                    component="img"
                    height="400"
                    image={eventData.image}
                    alt={eventData.name}
                    sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                    <Typography variant="h3" component="h1" gutterBottom>
                        {eventData.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {eventData.shortDescription}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
