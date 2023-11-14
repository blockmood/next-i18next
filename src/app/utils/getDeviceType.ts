import { headers } from 'next/headers';

export const checkDevice = (userAgent: string) => {
  var mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  var tabletKeywords = ['iPad', 'tablet', 'Kindle'];
  if (mobileRegex.test(userAgent)) {
    return 'MobileDevices';
  }
  if (tabletKeywords.some((keyword) => userAgent.includes(keyword))) {
    return 'TabletDevice';
  }
  return 'DesktopDevices';
};

export const detectServerDeviceType = () => {
  const headersList = headers();
  const devices = checkDevice(headersList.get('user-agent')!);
  return {
    isMobile: devices === 'MobileDevices',
    isTable: devices === 'TabletDevice',
    isPc: devices === 'DesktopDevices',
  };
};
