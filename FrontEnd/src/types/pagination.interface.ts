export interface IPagination {
  page: number;  
  totalPages: number; 
  onChange: (page: number) => void; 
  isLoading?: boolean;      
  size?: 'small' | 'medium' | 'large';
}