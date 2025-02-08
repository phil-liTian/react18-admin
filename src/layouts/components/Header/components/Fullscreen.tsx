import { useState, useEffect } from "react";
import screenfull from 'screenfull'
import { message } from 'antd'

const Fullscreen = () => {
  const [fullScreen, setFullScreen] = useState<boolean>(screenfull.isFullscreen)

  // 处理fullscreen变量
  useEffect(() => {
    if (screenfull.isEnabled) {
      screenfull.on('change', () => {
        setFullScreen(screenfull.isFullscreen)
      })
    }
    return () => {
      screenfull.off('change', () => {})
    }
  }, [])


  const handleFullScreen = () => {
    if (!screenfull.isEnabled) message.warning("当前您的浏览器不支持全屏 ❌");
    screenfull.toggle();
  }

  return <i className={["icon-style iconfont", fullScreen ? "icon-suoxiao" : "icon-fangda"].join(" ")} onClick={handleFullScreen}></i>
};

export default Fullscreen