import { motion } from "framer-motion";

export default function Cloud() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 72"
      xmlSpace="preserve"
    >
      <motion.path
        animate={{ translateX: 2, translateY: 1, scale: 0.9, fill: "#d8d8d8" }}
        initial={{ fill: "#fff" }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        fill="#fff"
        stroke="#000"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M15.9 30.3c0 .4-.4.8-.8.8C10 31.6 6 36.7 6 42.9c0 6.6 4.5 11.9 10.2 11.9h38.7C61 54.8 66 49.1 66 42.2c0-6.6-4.6-12.1-10.4-12.5-.4 0-.8-.3-.9-.8-1.3-6.7-7.3-11.7-14.3-11.7-4.6 0-8.7 2.1-11.3 5.4-.3.4-.8.5-1.1.4-1-.4-2.1-.6-3.3-.6-4.6-.1-8.4 3.4-8.8 7.9z"
      />
    </svg>
  );
}
