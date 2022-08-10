import { QueryClient } from '@tanstack/react-query';
import handleError from './errorHandler';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: handleError,
    },
  },
});

export default queryClient;
