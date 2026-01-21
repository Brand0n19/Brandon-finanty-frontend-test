import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useLocation, useNavigate } from 'react-router-dom';

export const DynamicBreadcrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Box sx={{ mb: 3 }}>
      <Breadcrumbs 
        separator={<NavigateNextIcon fontSize="small" />} 
        aria-label="breadcrumb"
      >

        <Link
          underline="hover"
          color="inherit"
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          Dashboard
        </Link>

        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          
          const displayName = value.charAt(0).toUpperCase() + value.slice(1);

          return last ? (
            
            <Typography key={to} color="text.primary" sx={{ fontWeight: 'bold' }}>
              {displayName}
            </Typography>
          ) : (
            <Link
              key={to}
              underline="hover"
              color="inherit"
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate(to)}
            >
              {displayName}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};