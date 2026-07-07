"use client";

import { motion } from "framer-motion";
import { staggerItem } from "./StaggerContainer";

export default function StaggerItem({ children }: { children: React.ReactNode }) {
  return <motion.div variants={staggerItem}>{children}</motion.div>;
}
