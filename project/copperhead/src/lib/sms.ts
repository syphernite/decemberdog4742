export function openSMS(phone: string, body: string) {
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera || "";
  const isIOS = /iPad|iPhone|iPod/.test(ua);
  const isAndroid = /Android/.test(ua);
  const encoded = encodeURIComponent(body);
  let href = "";
  if (isIOS) {
    href = `sms:${phone}&body=${encoded}`;
  } else if (isAndroid) {
    href = `sms:${phone}?body=${encoded}`;
  } else {
    href = `sms:${phone}?body=${encoded}`;
  }
  window.location.href = href;
}