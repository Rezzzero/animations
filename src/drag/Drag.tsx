"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useFollowPointer } from "../hooks/useFollowPointer";

export default function Drag() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  return <motion.div ref={ref} style={{ ...ball, x, y }} />;
}

/**
 * ==============   Styles   ================
 */

const ball = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: "50%",
};
