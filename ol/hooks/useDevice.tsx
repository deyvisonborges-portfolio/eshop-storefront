"use client";

import { useState, useEffect } from "react";

function getWindowDimensions() {
  if (typeof window === "undefined") return null;
  const { innerWidth: width, innerHeight: height } = window;
  const hidexs = width >= 450;
  const hidesm = width >= 768;
  const hidemd = width >= 992;
  const hidelg = width >= 1024;
  const hidexl = width >= 1440;

  return {
    width,
    height,
    hidexs,
    hidesm,
    hidemd,
    hidelg,
    hidexl,
  };
}

export function useMediaQuery() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
