// Common component interfaces
export interface CardProps {
  id?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  price?: number;
  rating?: number;
  location?: string;
  className?: string;
  onClick?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
