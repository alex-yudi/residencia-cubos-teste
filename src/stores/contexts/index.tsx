import { ReactNode } from 'react';
import { AuthProvider } from './authStore';
import { ExampleProvider } from './counterStore';
import { NewProvider } from './newStore';

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) { // Esse que vai ser responsável por encapsular todos os contextos existentes.
  
  return (
    <AuthProvider>
      <NewProvider>
        <ExampleProvider>{children}</ExampleProvider>
      </NewProvider>
    </AuthProvider>
  );
}

