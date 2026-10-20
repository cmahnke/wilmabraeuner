import React from 'react';
import { createRoot } from 'react-dom/client';
import CompareView, { CompareViewData } from 'compare_view';
import type { Config } from 'compare_view/public/dist/types/cfg';

type CompareViewElement = HTMLElement & { data?: CompareViewData };

function addCompareView (id: string, images: string[], config: Config = {}) {
  const el = document.getElementById(id) as CompareViewElement | null;
  if (el === null) {
    return;
  }
  const root = createRoot(el);
  root.render(
    <CompareView
      image_urls={images}
      config={config}
      callback={(cvd: CompareViewData) => { el.data = cvd; }}
    />
  );
}

declare global {
  interface Window {
    addCompareView: typeof addCompareView;
  }
}

window.addCompareView = addCompareView;
