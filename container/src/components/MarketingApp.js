import { mount } from 'marketing/MarketingApp';

import React, { useEffect, useRef } from 'react';

export default function MarketingApp() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      mount(containerRef.current);
    }
  }, []);

  return <div className="marketing-app" ref={containerRef} />;
}
