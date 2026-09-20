import { useEffect, useRef, useState } from "react";

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260715_090628_7052d8a6-a094-4341-a4a2-ad58493a67a9.mp4";

export function BoomerangVideoBg() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<ImageBitmap[]>([]);
  const [captured, setCaptured] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let cancelled = false;
    let animationId = 0;

    const capture = async () => {
      if (!video.videoWidth || !video.videoHeight || framesRef.current.length) return;
      const ratio = Math.min(1, 960 / video.videoWidth);
      const width = Math.round(video.videoWidth * ratio);
      const height = Math.round(video.videoHeight * ratio);
      const scratch = document.createElement("canvas");
      scratch.width = width;
      scratch.height = height;
      const context = scratch.getContext("2d");
      if (!context) return;
      const duration = Math.min(video.duration || 4, 6);
      const frameCount = Math.max(24, Math.min(90, Math.floor(duration * 15)));
      const frames: ImageBitmap[] = [];
      try {
        video.pause();
        for (let index = 0; index < frameCount && !cancelled; index += 1) {
          video.currentTime = (duration * index) / Math.max(1, frameCount - 1);
          await new Promise<void>((resolve) => video.addEventListener("seeked", () => resolve(), { once: true }));
          context.drawImage(video, 0, 0, width, height);
          frames.push(await createImageBitmap(scratch));
        }
      } catch {
        frames.forEach((frame) => frame.close());
        void video.play();
        return;
      }
      if (cancelled || !frames.length) return;
      framesRef.current = frames;
      setCaptured(true);
      const canvas = canvasRef.current;
      const output = canvas?.getContext("2d");
      if (!canvas || !output) return;
      canvas.width = width;
      canvas.height = height;
      let frameIndex = 0;
      let direction = 1;
      let previous = 0;
      const draw = (time: number) => {
        if (time - previous >= 1000 / 30) {
          output.drawImage(frames[frameIndex], 0, 0);
          frameIndex += direction;
          if (frameIndex >= frames.length - 1 || frameIndex <= 0) direction *= -1;
          previous = time;
        }
        animationId = requestAnimationFrame(draw);
      };
      animationId = requestAnimationFrame(draw);
    };

    video.addEventListener("playing", capture, { once: true });
    void video.play().catch(() => undefined);
    return () => {
      cancelled = true;
      cancelAnimationFrame(animationId);
      video.removeEventListener("playing", capture);
      framesRef.current.forEach((frame) => frame.close());
      framesRef.current = [];
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 origin-top scale-[1.15] overflow-hidden bg-surface">
      <video ref={videoRef} src={VIDEO_URL} muted playsInline autoPlay loop preload="auto" crossOrigin="anonymous" className={`h-full w-full object-cover object-top ${captured ? "invisible" : "visible"}`} />
      <canvas ref={canvasRef} aria-hidden="true" className={`absolute inset-0 h-full w-full object-cover object-top ${captured ? "visible" : "invisible"}`} />
    </div>
  );
}