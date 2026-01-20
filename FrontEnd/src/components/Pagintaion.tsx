import { Pagination, Stack, Typography, Box, PaginationItem } from '@mui/material';
import type { IPagination } from '../types/pagination.interface';

export const PaginationTable = ({
  page,
  totalPages,
  onChange,
  isLoading = false,
  size = 'medium'
}: IPagination) => {

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    if (!isLoading) {
      onChange(value);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 3, width: '100%' }}>
      <Stack spacing={2} alignItems="center">
        <Pagination 
          count={totalPages} 
          page={page} 
          onChange={handleChange}
          color="primary"
          size={size}
          disabled={isLoading}
          renderItem={(item) => {
            if (item.type === 'page' && item.page !== page) {
              return null;
            }
            return (
              <PaginationItem 
                {...item} 
                sx={item.type === 'page' ? { pointerEvents: 'none', fontWeight: 'bold' } : {}} 
              />
            );
          }}
          sx={{
            '& .Mui-selected': {
              fontWeight: 'bold',
            },
          }}
        />
        <Typography variant="caption" color="text.secondary">
          Page {page} of {totalPages}
        </Typography>
      </Stack>
    </Box>
  );
};