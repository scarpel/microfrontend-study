import React, { useEffect, useRef } from 'react';
import useHistoryManagement from '../hooks/useHistoryManagement';

export default function DefaultApp({ className = 'default-app', mount, ...props }) {
  const containerRef = useRef(null);
  const { history, onNavigate } = useHistoryManagement();

  useEffect(() => {
    if (containerRef.current && mount) {
      const { onParentNavigate } =
        mount(containerRef.current, {
          onNavigate,
          ...props,
        }) || {};

      if (onParentNavigate) {
        history.listen(onParentNavigate);
      }
    }
  }, []);

  return <div className={className} ref={containerRef} />;
}
