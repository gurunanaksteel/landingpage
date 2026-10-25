export const GOOGLE_TAG_ID = "AW-18520330456";

// Google Ads conversion action, counted when someone taps a Call (tel:) link.
export const CALL_CONVERSION_SEND_TO = `${GOOGLE_TAG_ID}/v5_7CKv1qaEdENihl_9E`;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackCallConversion() {
  window.gtag?.("event", "conversion", { send_to: CALL_CONVERSION_SEND_TO });
}
