import { useState, useEffect } from "react";

const useDeviceDetection = () => {
  const [device, setDevice] = useState("");

  useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile =
        /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      const isTablet =
        /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);
      const isApple = /iphone|ipad|macintosh/g.test(userAgent);

      // Mobile, Tablet, desktop detection -> ! iPad fall in desktop
      // if (isMobile){
      //  setDevice(`Mobile | ${navigator.userAgent}`);
      //  }
      // else if (isTablet) {
      //   setDevice(`Tablet | ${navigator.userAgent}`);
      // }
      //   } else {
      //   setDevice(`Desktop | ${navigator.userAgent}`);
      // }

      // DETECT APPLE DEVICES OR NOT - AND GIVE USERAGENT FULL STRING
      // if (isApple) {
      //   setDevice(`Apple | ${navigator.userAgent}`);
      // } else {
      //   setDevice(`Not Apple | ${navigator.userAgent}`);
      // }

      if (isApple) {
        setDevice(`Apple`);
      } else {
        setDevice(`notApple`);
      }
    };

    handleDeviceDetection();
    window.addEventListener("resize", handleDeviceDetection);

    return () => {
      window.removeEventListener("resize", handleDeviceDetection);
    };
  }, []);

  return device;
};

export default useDeviceDetection;
