import toast from 'react-hot-toast';

export const showLoginSuccess = () => 
  toast.success('Successfully logged in!');

export const showLoginError = (message: string = 'Login failed') => 
  toast.error(message);

export const showRegisterSuccess = () => 
  toast.success('Registration successful!');

export const showRegisterError = (message: string = 'Registration failed') => 
  toast.error(message);

export const showLogoutSuccess = () => 
  toast.success('Successfully logged out!');

export const showTopUpSuccess = (points: number) => 
  toast.success(`Successfully added ${points} points!`);

export const showTopUpError = (message: string = 'Failed to add points') => 
  toast.error(message);

export const showSpinWin = (points: number) => 
  toast.success(`You won ${points} points!`);

export const showSpinLoss = () => 
  toast(`Better luck next time!`);

export const showFormValidationError = (message: string = 'All fields are required!') => 
  toast.error(message);

export const showSuccess = (message: string) => 
  toast.success(message);

export const showError = (message: string) => 
  toast.error(message);

export const showInfo = (message: string) => 
  toast(message);
