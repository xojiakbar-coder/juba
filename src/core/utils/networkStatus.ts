import { message } from '@/interface/components/Message';

export function networkStatus() {
  const handleOffline = () => message.error('Internetga ulanmagansiz!');
  const handleOnline = () => message.success('Internet tiklandi');

  window.addEventListener('offline', handleOffline);
  window.addEventListener('online', handleOnline);

  // cleanup
  return () => {
    window.removeEventListener('offline', handleOffline);
    window.removeEventListener('online', handleOnline);
  };
}

export default networkStatus;
