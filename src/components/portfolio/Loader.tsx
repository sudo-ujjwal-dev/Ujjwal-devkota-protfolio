import { motion, AnimatePresence } from "framer-motion";

export function Loader({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          aria-hidden="true"
        >
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative h-20 w-20">
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-transparent"
                style={{
                  borderTopColor: "oklch(0.68 0.19 255)",
                  borderRightColor: "oklch(0.62 0.22 305)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                className="absolute inset-2 rounded-full border-2 border-transparent"
                style={{
                  borderBottomColor: "oklch(0.62 0.22 305)",
                  borderLeftColor: "oklch(0.68 0.19 255)",
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 grid place-items-center font-display text-lg font-bold gradient-text">
                UD
              </div>
            </div>
            <motion.p
              className="text-sm tracking-[0.3em] text-muted-foreground"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              LOADING
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
