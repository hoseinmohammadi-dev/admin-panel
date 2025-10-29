'use client';
import { Card, CardContent, Typography, Button } from '@mui/material';

export default function HomePage() {
  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <Card
          key={i}
          sx={{
            backgroundColor: 'var(--color-surface)',
            color: 'var(--color-text)',
            border: '1px solid var(--color-border)',
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              کارت شماره {i}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              این یک کارت تستی در تم دارک است.
            </Typography>
            <Button variant="contained" color="primary">
              مشاهده
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
