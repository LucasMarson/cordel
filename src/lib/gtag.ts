declare var window: any;

export const pageview = (url: string) => {
  window.gtag('config', process.env.GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }: { action: string; category: string; label: string; value: any }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
