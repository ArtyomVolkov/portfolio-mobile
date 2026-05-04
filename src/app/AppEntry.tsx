import AppProviders from '@/app/AppProviders';
import AppLayout from '@/app/AppLayout';

const AppEntry = () => {
  return (
    <AppProviders>
      <AppLayout />
    </AppProviders>
  );
};

export default AppEntry;
