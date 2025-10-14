import React, { useEffect, useMemo, useState } from 'react';

import * as Types from './types';
import ServiceContext from './context';
import { storage } from '@/core/services';

const SESSION_KEY = 'active_service';

const ServiceProvider = ({ children }: { children: React.ReactNode }) => {
  const [service, setService] = useState<Types.IContext.Service | undefined>(undefined);

  useEffect(() => {
    try {
      const saved = storage.session.get(SESSION_KEY);
      if (saved) {
        setService(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('❌ ServiceProvider sessionStorage parse error:', e);
    }
  }, []);

  useEffect(() => {
    if (service) {
      storage.session.set(SESSION_KEY, JSON.stringify(service));
    } else {
      storage.session.remove(SESSION_KEY);
    }
  }, [service]);

  const contextValue = useMemo(
    () => ({
      service,
      setService
    }),
    [service]
  );

  return <ServiceContext.Provider value={contextValue}>{children}</ServiceContext.Provider>;
};

export default ServiceProvider;
