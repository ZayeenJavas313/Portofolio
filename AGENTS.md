# Portfolio Landing Page — Build Guide

A cinematic, animated portfolio landing page built with **React 19 + Vite + TypeScript + Tailwind CSS v4**, supporting dark/light mode.

## 🎯 Sections Included

1. **Header** — Sticky navbar with scroll-triggered blur, mobile menu (portal-based)
2. **Hero** — Animated badge, headline, CTA buttons, scroll-triggered entry
3. **Logo Cloud** — Infinite-scrolling tech stack logos
4. **Story** — GSAP-powered text-reveal animation on scroll (block swipes across text)
5. **Services** — Service list with animated hover modal that follows cursor (GSAP + Motion)
6. **Testimonials** — 3-column infinite marquee; falls back to animated empty state when no data
7. **Cinematic Footer** — Curtain-reveal footer with magnetic buttons, parallax giant text, diagonal marquee

---

## 🚀 Quick Start

```bash
# 1. Create Vite project
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio

# 2. Install dependencies
npm install gsap @gsap/react motion clsx tailwind-merge lucide-react \
  @radix-ui/react-slot class-variance-authority react-use-measure \
  @hugeicons/react @hugeicons/core-free-icons

# 3. Install Tailwind CSS v4
npm install -D tailwindcss @tailwindcss/vite

# 4. Run
npm run dev
```

Then replace the files listed below.

---

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── infinite-slider.tsx
│   │   │   ├── logo-cloud.tsx
│   │   │   ├── menu-toggle-icon.tsx
│   │   │   ├── text-block-animation.tsx
│   │   │   ├── testimonials-columns.tsx
│   │   │   └── theme-toggle.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Story.tsx
│   │   ├── Services.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── EmptyTestimonial.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── use-scroll.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── providers/
│   │   └── theme-provider.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚙️ Configuration Files

### `package.json`

```json
{
  "name": "my-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@gsap/react": "^2.1.2",
    "@hugeicons/core-free-icons": "^1.0.0",
    "@hugeicons/react": "^1.0.0",
    "@radix-ui/react-slot": "^1.1.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "gsap": "^3.13.0",
    "lucide-react": "^0.469.0",
    "motion": "^11.18.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-use-measure": "^2.1.7",
    "tailwind-merge": "^2.6.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.4",
    "tailwindcss": "^4.0.0",
    "typescript": "~5.7.0",
    "vite": "^6.0.0"
  }
}
```

### `vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### `tsconfig.json`

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### `tsconfig.app.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["src"]
}
```

### `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio — Developer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### `src/index.css`

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-background: hsl(0 0% 100%);
  --color-foreground: hsl(240 10% 3.9%);
  --color-card: hsl(0 0% 100%);
  --color-card-foreground: hsl(240 10% 3.9%);
  --color-popover: hsl(0 0% 100%);
  --color-popover-foreground: hsl(240 10% 3.9%);
  --color-primary: hsl(240 5.9% 10%);
  --color-primary-foreground: hsl(0 0% 98%);
  --color-secondary: hsl(240 4.8% 95.9%);
  --color-secondary-foreground: hsl(240 5.9% 10%);
  --color-muted: hsl(240 4.8% 95.9%);
  --color-muted-foreground: hsl(240 3.8% 46.1%);
  --color-accent: hsl(240 4.8% 95.9%);
  --color-accent-foreground: hsl(240 5.9% 10%);
  --color-destructive: hsl(0 84.2% 60.2%);
  --color-destructive-foreground: hsl(0 0% 98%);
  --color-border: hsl(240 5.9% 90%);
  --color-input: hsl(240 5.9% 90%);
  --color-ring: hsl(240 5.9% 10%);
  --radius: 0.5rem;

  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;

  --animate-fade-in: fade-in 0.5s ease-out;
  --animate-slide-in-from-bottom-10: slide-in-from-bottom-10 0.5s ease-out;
  --animate-zoom-in-97: zoom-in-97 0.2s ease-out;

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slide-in-from-bottom-10 {
    from { transform: translateY(2.5rem); }
    to { transform: translateY(0); }
  }
  @keyframes zoom-in-97 {
    from { transform: scale(0.97); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
}

.dark {
  --color-background: hsl(240 10% 3.9%);
  --color-foreground: hsl(0 0% 98%);
  --color-card: hsl(240 10% 3.9%);
  --color-card-foreground: hsl(0 0% 98%);
  --color-popover: hsl(240 10% 3.9%);
  --color-popover-foreground: hsl(0 0% 98%);
  --color-primary: hsl(0 0% 98%);
  --color-primary-foreground: hsl(240 5.9% 10%);
  --color-secondary: hsl(240 3.7% 15.9%);
  --color-secondary-foreground: hsl(0 0% 98%);
  --color-muted: hsl(240 3.7% 15.9%);
  --color-muted-foreground: hsl(240 5% 64.9%);
  --color-accent: hsl(240 3.7% 15.9%);
  --color-accent-foreground: hsl(0 0% 98%);
  --color-destructive: hsl(0 62.8% 30.6%);
  --color-destructive-foreground: hsl(0 0% 98%);
  --color-border: hsl(240 3.7% 15.9%);
  --color-input: hsl(240 3.7% 15.9%);
  --color-ring: hsl(240 4.9% 83.9%);
}

* {
  border-color: var(--color-border);
}

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}
```

---

## 🔧 Utility Files

### `src/lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### `src/hooks/use-scroll.ts`

```ts
import { useCallback, useEffect, useState } from "react";

export function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}
```

### `src/providers/theme-provider.tsx`

```tsx
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
```

### `src/components/ui/theme-toggle.tsx`

```tsx
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="size-4" />
      ) : (
        <Sun className="size-4" />
      )}
    </Button>
  );
}
```

---

## 🧱 UI Primitives

### `src/components/ui/button.tsx`

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

### `src/components/ui/menu-toggle-icon.tsx`

```tsx
import React from "react";
import { cn } from "@/lib/utils";

type MenuToggleProps = React.ComponentProps<"svg"> & {
  open: boolean;
  duration?: number;
};

export function MenuToggleIcon({
  open,
  className,
  fill = "none",
  stroke = "currentColor",
  strokeWidth = 2.5,
  strokeLinecap = "round",
  strokeLinejoin = "round",
  duration = 500,
  ...props
}: MenuToggleProps) {
  return (
    <svg
      strokeWidth={strokeWidth}
      fill={fill}
      stroke={stroke}
      viewBox="0 0 32 32"
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      className={cn(
        "transition-transform ease-in-out",
        open && "-rotate-45",
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
      }}
      {...props}
    >
      <path
        className={cn(
          "transition-all ease-in-out",
          open
            ? "[stroke-dasharray:20_300] [stroke-dashoffset:-32.42px]"
            : "[stroke-dasharray:12_63]"
        )}
        style={{
          transitionDuration: `${duration}ms`,
        }}
        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
      />
      <path d="M7 16 27 16" />
    </svg>
  );
}
```

### `src/components/ui/infinite-slider.tsx`

```tsx
import { useMotionValue, animate, motion } from "motion/react";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { cn } from "@/lib/utils";

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  speed,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  // Backwards-compat: allow passing `speed` / `speedOnHover`
  const effectiveDuration = speed ? speed : duration;
  const effectiveHover = speedOnHover ?? durationOnHover;

  const [currentDuration, setCurrentDuration] = useState(effectiveDuration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === "horizontal" ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prev) => prev + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: currentDuration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = effectiveHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(effectiveHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(effectiveDuration);
        },
      }
    : {};

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
```

### `src/components/ui/logo-cloud.tsx`

```tsx
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={42} reverse speed={80} speedOnHover={25}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert"
            height={logo.height || "auto"}
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width={logo.width || "auto"}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
```

### `src/components/ui/text-block-animation.tsx`

```tsx
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

type Props = {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  blockColor?: string;
  stagger?: number;
  duration?: number;
};

export default function TextBlockAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "#000",
  stagger = 0.1,
  duration = 0.6,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const split = new SplitText(containerRef.current, {
        type: "lines",
        linesClass: "block-line-parent",
      });

      const lines = split.lines as HTMLElement[];
      const blocks: HTMLDivElement[] = [];

      lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.display = "block";
        wrapper.style.overflow = "hidden";

        const block = document.createElement("div");
        block.style.position = "absolute";
        block.style.top = "0";
        block.style.left = "0";
        block.style.width = "100%";
        block.style.height = "100%";
        block.style.backgroundColor = blockColor;
        block.style.zIndex = "2";
        block.style.transform = "scaleX(0)";
        block.style.transformOrigin = "left center";

        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
        wrapper.appendChild(block);

        gsap.set(line, { opacity: 0 });
        blocks.push(block);
      });

      const tl = gsap.timeline({
        defaults: { ease: "expo.inOut" },
        scrollTrigger: animateOnScroll
          ? {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          : undefined,
        delay,
      });

      tl.to(blocks, {
        scaleX: 1,
        duration,
        stagger,
        transformOrigin: "left center",
      })
        .set(
          lines,
          {
            opacity: 1,
            stagger,
          },
          `<${duration / 2}`
        )
        .to(
          blocks,
          {
            scaleX: 0,
            duration,
            stagger,
            transformOrigin: "right center",
          },
          `<${duration * 0.4}`
        );
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, blockColor, stagger, duration],
    }
  );

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {children}
    </div>
  );
}
```

### `src/components/ui/testimonials-columns.tsx`

```tsx
import React from "react";
import { motion } from "motion/react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

type Props = {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
};

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}: Props) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[...new Array(2)].map((_, idx) => (
          <React.Fragment key={idx}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full"
                key={i}
              >
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 opacity-60 tracking-tight">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
```

---

## 🧩 Section Components

### `src/components/Header.tsx`

```tsx
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(10);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-b border-transparent", {
        "bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg":
          scrolled,
      })}
    >
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        <a href="#home" className="hover:bg-accent rounded-md p-2">
          <Wordmark className="h-4" />
        </a>
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              className={buttonVariants({ variant: "ghost" })}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <Button>Let's Talk</Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            size="icon"
            variant="outline"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <MenuToggleIcon open={open} className="size-5" duration={300} />
          </Button>
        </div>
      </nav>
      <MobileMenu open={open}>
        <div className="grid gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              className={buttonVariants({
                variant: "ghost",
                className: "justify-start",
              })}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Button className="w-full">Let's Talk</Button>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = {
  open: boolean;
  children: React.ReactNode;
};

function MobileMenu({ open, children }: MobileMenuProps) {
  if (!open || typeof window === "undefined") return null;
  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        "bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg",
        "fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden"
      )}
    >
      <div className="size-full p-4 flex flex-col justify-between gap-2 animate-(--animate-zoom-in-97)">
        {children}
      </div>
    </div>,
    document.body
  );
}

function Wordmark(props: React.ComponentProps<"svg">) {
  // Simple wordmark — replace with your own
  return (
    <svg viewBox="0 0 60 20" fill="currentColor" {...props}>
      <text
        x="0"
        y="15"
        fontFamily="Inter, sans-serif"
        fontSize="16"
        fontWeight="900"
        letterSpacing="-0.05em"
      >
        portfolio.
      </text>
    </svg>
  );
}
```

### `src/components/Hero.tsx`

```tsx
import { ArrowRightIcon, MessageCircleIcon, SparklesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <>
      <section
        id="home"
        className="mx-auto w-full max-w-5xl relative"
      >
        {/* Top Shades */}
        <div
          aria-hidden="true"
          className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
        >
          <div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,color-mix(in_oklch,var(--color-foreground)_8%,transparent),transparent)] contain-strict" />
        </div>

        {/* Bold Faded Side Borders */}
        <div
          aria-hidden="true"
          className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
        >
          <div className="[mask-image:linear-gradient(to_bottom,black_80%,transparent)] absolute inset-y-0 left-0 z-10 h-full w-px bg-foreground/15" />
          <div className="[mask-image:linear-gradient(to_bottom,black_80%,transparent)] absolute inset-y-0 right-0 z-10 h-full w-px bg-foreground/15" />
        </div>

        {/* main content */}
        <div className="relative flex flex-col items-center justify-center gap-5 pt-32 pb-30">
          {/* Inner faded guide lines */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full overflow-hidden"
          >
            <div className="absolute inset-y-0 left-4 w-px bg-gradient-to-b from-transparent via-border to-border md:left-8" />
            <div className="absolute inset-y-0 right-4 w-px bg-gradient-to-b from-transparent via-border to-border md:right-8" />
            <div className="absolute inset-y-0 left-8 w-px bg-gradient-to-b from-transparent via-border/50 to-border/50 md:left-12" />
            <div className="absolute inset-y-0 right-8 w-px bg-gradient-to-b from-transparent via-border/50 to-border/50 md:right-12" />
          </div>

          <a
            className={cn(
              "group mx-auto flex w-fit items-center gap-3 rounded-full border bg-card px-3 py-1 shadow",
              "animate-(--animate-fade-in) animate-(--animate-slide-in-from-bottom-10)"
            )}
            href="#work"
          >
            <SparklesIcon className="size-3 text-muted-foreground" />
            <span className="text-xs">Available for freelance</span>
            <span className="block h-5 border-l" />
            <ArrowRightIcon className="size-3 duration-150 ease-out group-hover:translate-x-1" />
          </a>

          <h1 className="text-center text-4xl tracking-tight md:text-5xl lg:text-6xl text-balance">
            Building digital experiences <br /> that feel alive
          </h1>

          <p className="mx-auto max-w-md text-center text-base text-foreground/80 tracking-wider sm:text-lg md:text-xl">
            I'm a developer crafting interfaces <br />
            where code meets craft.
          </p>

          <div className="flex flex-row flex-wrap items-center justify-center gap-3 pt-2">
            <Button className="rounded-full" size="lg" variant="secondary">
              <MessageCircleIcon className="size-4 mr-2" />
              Book a Call
            </Button>
            <Button className="rounded-full" size="lg">
              View Work
              <ArrowRightIcon className="size-4 ms-2" />
            </Button>
          </div>
        </div>
      </section>

      <LogosSection />
    </>
  );
}

function LogosSection() {
  return (
    <section className="relative space-y-4 border-t pt-6 pb-10">
      <h2 className="text-center font-medium text-lg text-muted-foreground tracking-tight md:text-xl">
        Built with <span className="text-foreground">modern tools</span>
      </h2>
      <div className="relative z-10 mx-auto max-w-4xl">
        <LogoCloud logos={techLogos} />
      </div>
    </section>
  );
}

const techLogos = [
  { src: "https://cdn.simpleicons.org/react/000000", alt: "React" },
  { src: "https://cdn.simpleicons.org/typescript/000000", alt: "TypeScript" },
  { src: "https://cdn.simpleicons.org/nextdotjs/000000", alt: "Next.js" },
  { src: "https://cdn.simpleicons.org/tailwindcss/000000", alt: "Tailwind" },
  { src: "https://cdn.simpleicons.org/nodedotjs/000000", alt: "Node.js" },
  { src: "https://cdn.simpleicons.org/vite/000000", alt: "Vite" },
  { src: "https://cdn.simpleicons.org/postgresql/000000", alt: "PostgreSQL" },
  { src: "https://cdn.simpleicons.org/figma/000000", alt: "Figma" },
];
```

### `src/components/Story.tsx`

```tsx
import TextBlockAnimation from "@/components/ui/text-block-animation";

export function Story() {
  return (
    <section
      id="about"
      className="relative w-full bg-background text-foreground"
    >
      {/* 1. THE HOOK */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="max-w-4xl w-full">
          <TextBlockAnimation
            blockColor="#6366f1"
            animateOnScroll={true}
            duration={0.8}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight">
              I don't just write code.
              <br />
              <span className="inline-block bg-foreground text-background px-3 pb-1 rounded-md mt-2">
                I craft experiences.
              </span>
            </h2>
          </TextBlockAnimation>
        </div>
      </div>

      {/* 2. THE PITCH */}
      <div className="min-h-[80vh] flex flex-col justify-center items-center px-6 py-24 bg-muted/40">
        <div className="max-w-3xl w-full space-y-16">
          <TextBlockAnimation blockColor="#10b981" duration={0.7}>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              This is what I do.
            </h3>
          </TextBlockAnimation>

          <TextBlockAnimation blockColor="#f59e0b" stagger={0.03}>
            <p className="text-lg md:text-2xl leading-relaxed text-foreground/80">
              You stopped scrolling because the motion caught your eye. That's
              the power of <strong>GSAP</strong> and <strong>React</strong>{" "}
              properly combined. I build bespoke interfaces for teams who
              aren't satisfied with "good enough."
            </p>
          </TextBlockAnimation>

          <div className="pl-6 border-l-2 border-indigo-500">
            <TextBlockAnimation blockColor="#8b5cf6" duration={0.6}>
              <p className="text-base md:text-lg italic text-muted-foreground">
                "If you want your product to feel alive, we should talk."
              </p>
            </TextBlockAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### `src/components/Services.tsx`

```tsx
import gsap from "gsap";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Project = {
  color: string;
  src: string;
  title: string;
};

const projects: Project[] = [
  {
    color: "#0f172a",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    title: "Web Development",
  },
  {
    color: "#1e293b",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    title: "UI / UX Design",
  },
  {
    color: "#475569",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    title: "Frontend Engineering",
  },
  {
    color: "#1f2937",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    title: "Product Consulting",
  },
];

const scaleAnimation = {
  closed: {
    scale: 0,
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] as const },
    x: "-50%",
    y: "-50%",
  },
  enter: {
    scale: 1,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const },
    x: "-50%",
    y: "-50%",
  },
  initial: { scale: 0, x: "-50%", y: "-50%" },
};

type ModalState = { active: boolean; index: number };

export function Services() {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });

  return (
    <section
      id="work"
      className="py-16 overflow-hidden bg-background text-foreground"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-0">
        <div className="flex flex-col md:flex-row justify-between gap-6 px-4">
          <h2 className="text-5xl md:text-7xl tracking-tight font-bold">
            Services.
          </h2>
          <p className="max-w-md font-medium text-muted-foreground">
            Tailored solutions for teams who want to move fast without
            sacrificing craft — from concept to production-ready interfaces.
          </p>
        </div>
        <div className="relative flex min-h-[70vh] items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center">
            {projects.map((project, index) => (
              <Project
                index={index}
                key={project.title}
                setModal={setModal}
                title={project.title}
              />
            ))}
          </div>
          <Modal modal={modal} projects={projects} />
        </div>
      </div>
    </section>
  );
}

type ProjectProps = {
  index: number;
  title: string;
  setModal: (s: ModalState) => void;
};

function Project({ index, title, setModal }: ProjectProps) {
  return (
    <div
      className="group flex w-full cursor-pointer items-center justify-between border-border border-t px-4 md:px-16 py-10 transition-all duration-200 last:border-b hover:opacity-50"
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
    >
      <h3 className="m-0 font-normal text-3xl md:text-5xl lg:text-6xl transition-all duration-300 group-hover:translate-x-2.5">
        {title}
      </h3>
      <p className="hidden md:block font-light transition-all duration-300 group-hover:translate-x-2.5">
        Design & Development
      </p>
    </div>
  );
}

type ModalProps = {
  modal: ModalState;
  projects: Project[];
};

function Modal({ modal, projects }: ModalProps) {
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      // Use clientX/clientY (viewport coords) — pageX/pageY breaks once the
      // user scrolls into the section because the modal/cursor are positioned
      // with `fixed`, which is relative to the viewport, not the document.
      const { clientX, clientY } = e;
      xMoveContainer(clientX);
      yMoveContainer(clientY);
      xMoveCursor(clientX);
      yMoveCursor(clientY);
      xMoveCursorLabel(clientX);
      yMoveCursorLabel(clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed z-30 flex h-[350px] w-[400px] items-center justify-center overflow-hidden bg-background shadow-2xl"
        initial="initial"
        ref={modalContainer}
        variants={scaleAnimation}
      >
        <div
          className="absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ top: `${index * -100}%` }}
        >
          {projects.map((project) => (
            <div
              className="flex h-full w-full items-center justify-center"
              key={project.title}
              style={{ backgroundColor: project.color }}
            >
              <img
                alt={project.title}
                className="h-full w-full object-cover"
                src={project.src}
              />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed z-40 flex h-20 w-20 items-center justify-center rounded-full bg-[#455CE9] font-light text-sm text-white"
        initial="initial"
        ref={cursor}
        variants={scaleAnimation}
      />
      <motion.div
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed z-40 flex h-20 w-20 items-center justify-center rounded-full bg-transparent font-light text-sm text-white"
        initial="initial"
        ref={cursorLabel}
        variants={scaleAnimation}
      >
        View
      </motion.div>
    </>
  );
}
```

### `src/components/EmptyTestimonial.tsx`

```tsx
import { motion } from "motion/react";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon } from "@hugeicons/core-free-icons";

export function EmptyTestimonial() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-center py-24 px-4">
      <div className="mb-20 text-center">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Wall of{" "}
          <motion.span
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative cursor-default inline-flex items-center gap-2 px-4 py-1 rounded-2xl bg-primary/5 border border-primary/10 text-primary hover:bg-primary/10 hover:border-primary/20 transition-colors duration-300"
          >
            Love
            <motion.span
              animate={isHovered ? { scale: [1, 1.1, 1] } : { scale: 1 }}
              transition={{
                duration: 0.7,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              💖
            </motion.span>
          </motion.span>
        </h2>
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-80 h-52 relative group cursor-pointer mb-12"
      >
        <div
          className="folder-back relative w-[87.5%] mx-auto h-full flex justify-center rounded-xl overflow-visible"
          style={{
            background: "#EBEBEB",
            border: "1px solid #D1D1D1",
          }}
        >
          {[
            {
              initial: { rotate: -3, x: -38, y: 2 },
              open: { rotate: -8, x: -70, y: -75 },
              transition: {
                type: "spring" as const,
                bounce: 0.15,
                stiffness: 160,
                damping: 22,
              },
              className: "z-10",
            },
            {
              initial: { rotate: 0, x: 0, y: 0 },
              open: { rotate: 1, x: 2, y: -95 },
              transition: {
                type: "spring" as const,
                duration: 0.55,
                bounce: 0.12,
                stiffness: 190,
                damping: 24,
              },
              className: "z-20",
            },
            {
              initial: { rotate: 3.5, x: 42, y: 1 },
              open: { rotate: 9, x: 75, y: -80 },
              transition: {
                type: "spring" as const,
                duration: 0.58,
                bounce: 0.17,
                stiffness: 170,
                damping: 21,
              },
              className: "z-10",
            },
          ].map((page, i) => (
            <motion.div
              key={i}
              initial={page.initial}
              animate={isOpen ? page.open : page.initial}
              transition={page.transition}
              className={`absolute top-2 w-32 h-fit rounded-xl shadow-lg ${page.className}`}
            >
              <Page />
            </motion.div>
          ))}
        </div>

        <motion.div
          animate={{ rotateX: isOpen ? -35 : 0 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
          className="absolute inset-x-0 -bottom-px z-30 h-44 rounded-3xl origin-bottom flex justify-center items-center overflow-visible"
        >
          <div className="relative w-full h-full">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 235 121"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M104.615 0.350494L33.1297 0.838776C32.7542 0.841362 32.3825 0.881463 32.032 0.918854C31.6754 0.956907 31.3392 0.992086 31.0057 0.992096H31.0047C30.6871 0.99235 30.3673 0.962051 30.0272 0.929596C29.6927 0.897686 29.3384 0.863802 28.9803 0.866119L13.2693 0.967682H13.2527L13.2352 0.969635C13.1239 0.981406 13.0121 0.986674 12.9002 0.986237H9.91388C8.33299 0.958599 6.76052 1.22345 5.27423 1.76651H5.27325C4.33579 2.11246 3.48761 2.66213 2.7879 3.37393L2.49689 3.68839L2.492 3.69424C1.62667 4.73882 1.00023 5.96217 0.656067 7.27725C0.653324 7.28773 0.654065 7.29886 0.652161 7.30948C0.3098 8.62705 0.257231 10.0048 0.499817 11.3446L12.2147 114.399L12.2156 114.411L12.2176 114.423C12.6046 116.568 13.7287 118.508 15.3934 119.902C17.058 121.297 19.1572 122.056 21.3231 122.049V122.05H215.379C217.76 122.02 220.064 121.192 221.926 119.698V119.697C223.657 118.384 224.857 116.485 225.305 114.35L225.307 114.339L235.914 53.3798L235.968 53.1093L235.97 53.0985L235.971 53.0888C236.134 51.8978 236.044 50.685 235.705 49.5321C235.307 48.1669 234.63 46.9005 233.717 45.8144L233.383 45.4296C232.58 44.5553 231.614 43.8449 230.539 43.3398C229.311 42.7628 227.971 42.4685 226.616 42.4774H146.746C144.063 42.4705 141.423 41.8004 139.056 40.5263C136.691 39.2522 134.671 37.4127 133.175 35.1689L113.548 5.05948L113.544 5.05362L113.539 5.04776C112.545 3.65165 111.238 2.51062 109.722 1.72061C108.266 0.886502 106.627 0.422235 104.952 0.365143V0.364166L104.633 0.350494H104.615Z"
                fill="#F2F2F2"
                stroke="#D1D1D1"
                strokeWidth="1.5"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 pointer-events-none">
              <div className="flex gap-11 mb-2.5">
                <div className="w-2.5 h-2.5 bg-neutral-600/40 rounded-full" />
                <div className="w-2.5 h-2.5 bg-neutral-600/40 rounded-full" />
              </div>
              <div className="w-9 h-1 bg-neutral-600/40 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="text-center space-y-4">
        <p className="text-xl text-foreground tracking-tight">
          Oops..There are no testimonials <br />
          <span className="text-muted-foreground text-lg">
            Be the first one to add a testimonial
          </span>
        </p>
        <div className="flex flex-col items-center gap-4 bg-transparent">
          <a
            href="#contact"
            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-dashed border-muted-foreground/30 bg-background hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground transition-transform duration-300">
              <HugeiconsIcon icon={Add01Icon} size={16} strokeWidth={3} />
            </div>
            <span className="text-md font-medium text-foreground group-hover:text-primary transition-colors">
              Add Testimonial
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

const Page = () => (
  <div className="w-full h-full bg-gradient-to-b from-white to-[#F5F5F7] rounded-xl border border-neutral-200 p-4">
    <div className="flex flex-col gap-2">
      <div className="w-full h-1.5 bg-neutral-100 rounded-full" />
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="flex gap-2">
          <div className="flex-1 h-1.5 bg-neutral-100 rounded-full" />
          <div className="flex-1 h-1.5 bg-neutral-100 rounded-full" />
        </div>
      ))}
    </div>
  </div>
);

export default EmptyTestimonial;
```

### `src/components/TestimonialsSection.tsx`

This is the **wrapper component** that decides what to show:
- If there is data → render the 3-column marquee
- If the array is empty → render `EmptyTestimonial` as fallback

```tsx
import { motion } from "motion/react";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns";
import { EmptyTestimonial } from "@/components/EmptyTestimonial";

// 👉 Edit this array to control what renders.
//    Empty array ([]) triggers the EmptyTestimonial fallback.
const testimonials: Testimonial[] = [
  {
    text: "Shipped our redesign 2 weeks ahead of schedule. Best frontend engineer we've worked with — communication was crystal clear the whole way.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Product Manager, Acme",
  },
  {
    text: "Clean code, thoughtful architecture, and great taste. The handoff was smoother than any contractor we've hired.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Engineering Lead",
  },
  {
    text: "The animations and polish took our landing page from boring to 'wait how did you do that?' Conversions up 40%.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Head of Growth",
  },
  {
    text: "Seamless collaboration with our design team. Translated every Figma detail perfectly into code.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO, StartupCo",
  },
  {
    text: "Performance-obsessed in the best way. Lighthouse scores went from 60 to 98 after the refactor.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "CTO",
  },
  {
    text: "Delivered exactly what we briefed, then suggested three improvements we hadn't thought of. Rare combo.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Design Director",
  },
  {
    text: "Responsive, communicative, and extremely fast. Would hire again tomorrow.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Founder",
  },
  {
    text: "The attention to micro-interactions elevated the entire product. Users notice the difference.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Senior PM",
  },
  {
    text: "Great engineer, better collaborator. Never had to chase for updates.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Tech Lead",
  },
];

export function TestimonialsSection() {
  // Fallback to EmptyTestimonial when there's no data
  if (testimonials.length === 0) {
    return <EmptyTestimonial />;
  }

  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);

  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
            Kind words from people I've worked with
          </h2>
          <p className="text-center mt-5 opacity-75">
            A few words from clients, teammates, and collaborators.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={first} duration={15} />
          <TestimonialsColumn
            testimonials={second}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={third}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
```

### `src/components/Footer.tsx`

```tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

// ⚙️ Theme-adaptive CSS (uses your Tailwind v4 tokens)
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;

  --pill-bg-1: color-mix(in oklch, var(--color-foreground) 3%, transparent);
  --pill-bg-2: color-mix(in oklch, var(--color-foreground) 1%, transparent);
  --pill-shadow: color-mix(in oklch, var(--color-background) 50%, transparent);
  --pill-highlight: color-mix(in oklch, var(--color-foreground) 10%, transparent);
  --pill-inset-shadow: color-mix(in oklch, var(--color-background) 80%, transparent);
  --pill-border: color-mix(in oklch, var(--color-foreground) 8%, transparent);

  --pill-bg-1-hover: color-mix(in oklch, var(--color-foreground) 8%, transparent);
  --pill-bg-2-hover: color-mix(in oklch, var(--color-foreground) 2%, transparent);
  --pill-border-hover: color-mix(in oklch, var(--color-foreground) 20%, transparent);
  --pill-shadow-hover: color-mix(in oklch, var(--color-background) 70%, transparent);
  --pill-highlight-hover: color-mix(in oklch, var(--color-foreground) 20%, transparent);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
}
@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px color-mix(in oklch, var(--color-destructive) 50%, transparent)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 10px color-mix(in oklch, var(--color-destructive) 80%, transparent)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe { animation: footer-breathe 8s ease-in-out infinite alternate; }
.animate-footer-scroll-marquee { animation: footer-scroll-marquee 40s linear infinite; }
.animate-footer-heartbeat { animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite; }

.footer-bg-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, color-mix(in oklch, var(--color-foreground) 3%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklch, var(--color-foreground) 3%, transparent) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    color-mix(in oklch, var(--color-primary) 15%, transparent) 0%,
    color-mix(in oklch, var(--color-secondary) 15%, transparent) 40%,
    transparent 70%
  );
}

.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow:
    0 10px 30px -10px var(--pill-shadow),
    inset 0 1px 1px var(--pill-highlight),
    inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow:
    0 20px 40px -10px var(--pill-shadow-hover),
    inset 0 1px 1px var(--pill-highlight-hover);
  color: var(--color-foreground);
}

.footer-giant-bg-text {
  font-size: 26vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in oklch, var(--color-foreground) 5%, transparent);
  background: linear-gradient(180deg, color-mix(in oklch, var(--color-foreground) 10%, transparent) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}

.footer-text-glow {
  background: linear-gradient(180deg, var(--color-foreground) 0%, color-mix(in oklch, var(--color-foreground) 40%, transparent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 20px color-mix(in oklch, var(--color-foreground) 15%, transparent));
}
`;

// Magnetic Button Primitive (GSAP-based)
type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

// eslint-disable-next-line react-refresh/only-export-components
const MagneticButton = ({
  className,
  children,
  as: Component = "button",
  ...props
}: MagneticButtonProps) => {
  const localRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = localRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const h = rect.width / 2;
        const w = rect.height / 2;
        const x = e.clientX - rect.left - h;
        const y = e.clientY - rect.top - w;
        gsap.to(element, {
          x: x * 0.4,
          y: y * 0.4,
          rotationX: -y * 0.15,
          rotationY: x * 0.15,
          scale: 1.05,
          ease: "power2.out",
          duration: 0.4,
        });
      };
      const handleMouseLeave = () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          ease: "elastic.out(1, 0.3)",
          duration: 1.2,
        });
      };
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mousemove", handleMouseMove);
      };
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <Component ref={localRef} className={cn("cursor-pointer", className)} {...props}>
      {children}
    </Component>
  );
};

// Marquee content
const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>Available for Freelance</span>{" "}
    <span className="text-primary/60">✦</span>
    <span>React Specialist</span>{" "}
    <span className="text-secondary-foreground/60">✦</span>
    <span>Remote Worldwide</span>{" "}
    <span className="text-primary/60">✦</span>
    <span>Let's Talk</span>{" "}
    <span className="text-secondary-foreground/60">✦</span>
    <span>Based in Jakarta</span>{" "}
    <span className="text-primary/60">✦</span>
  </div>
);

export function Footer() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 40%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* Curtain Reveal wrapper (clip-path keeps fixed footer "inside") */}
      <div
        id="contact"
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-background text-foreground cinematic-footer-wrapper">
          {/* Aurora & grid background */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background text (replace with your name/brand) */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            PORTFOLIO
          </div>

          {/* Diagonal marquee */}
          <div className="absolute top-12 left-0 w-full overflow-hidden border-y border-border/50 bg-background/60 backdrop-blur-md py-4 z-10 -rotate-2 scale-110 shadow-2xl">
            <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">
            <h2
              ref={headingRef}
              className="text-5xl md:text-8xl font-black footer-text-glow tracking-tighter mb-12 text-center"
            >
              Let's build something.
            </h2>

            <div ref={linksRef} className="flex flex-col items-center gap-6 w-full">
              {/* Primary CTAs */}
              <div className="flex flex-wrap justify-center gap-4 w-full">
                <MagneticButton
                  as="a"
                  href="mailto:hello@example.com"
                  className="footer-glass-pill px-10 py-5 rounded-full text-foreground font-bold text-sm md:text-base flex items-center gap-3 group"
                >
                  <svg
                    className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 5L2 7" />
                  </svg>
                  Send Email
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="#"
                  className="footer-glass-pill px-10 py-5 rounded-full text-foreground font-bold text-sm md:text-base flex items-center gap-3 group"
                >
                  <svg
                    className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Book a Call
                </MagneticButton>
              </div>

              {/* Secondary links */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 w-full mt-2">
                <MagneticButton
                  as="a"
                  href="#"
                  className="footer-glass-pill px-6 py-3 rounded-full text-muted-foreground font-medium text-xs md:text-sm hover:text-foreground"
                >
                  GitHub
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="#"
                  className="footer-glass-pill px-6 py-3 rounded-full text-muted-foreground font-medium text-xs md:text-sm hover:text-foreground"
                >
                  LinkedIn
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="#"
                  className="footer-glass-pill px-6 py-3 rounded-full text-muted-foreground font-medium text-xs md:text-sm hover:text-foreground"
                >
                  Twitter
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-muted-foreground text-[10px] md:text-xs font-semibold tracking-widest uppercase order-2 md:order-1">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </div>

            <div className="footer-glass-pill px-6 py-3 rounded-full flex items-center gap-2 order-1 md:order-2 cursor-default border-border/50">
              <span className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Built with
              </span>
              <span className="animate-footer-heartbeat text-sm md:text-base text-destructive">
                ❤
              </span>
              <span className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest">
                &amp; lots of
              </span>
              <span className="text-foreground font-black text-xs md:text-sm tracking-normal ml-1">
                ☕
              </span>
            </div>

            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full footer-glass-pill flex items-center justify-center text-muted-foreground hover:text-foreground group order-3"
            >
              <svg
                className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </MagneticButton>
          </div>
        </footer>
      </div>
    </>
  );
}
```

---

## 🎬 Entry Points

### `src/App.tsx`

```tsx
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Services } from "@/components/Services";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <Header />
      <main className="grow">
        <Hero />
        <Story />
        <Services />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

### `src/main.tsx`

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/providers/theme-provider";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
```

---

## 📝 Important Notes

### Dark / Light Mode
- Powered by `ThemeProvider` in `src/providers/theme-provider.tsx`.
- Preference is saved in `localStorage` and respects system preference on first load.
- A `ThemeToggle` button appears in the Header (sun/moon icon).
- All components use Tailwind v4 CSS tokens (`bg-background`, `text-foreground`, etc.), so they swap themes automatically.

### GSAP Plugins
- `ScrollTrigger` and `SplitText` are bundled with the **free `gsap` package** (as of May 2024 GreenSock plugins are fully free).
- Do **not** install `@gsap/shockingly` or any Club plugin — you don't need it.
- The plugins are registered at module load inside `text-block-animation.tsx` and `Footer.tsx`.

### Testimonials Fallback
Open `src/components/TestimonialsSection.tsx` and change the `testimonials` array:
```ts
const testimonials: Testimonial[] = [];  // 👈 triggers EmptyTestimonial
```
When the array is empty, the animated folder fallback renders instead of the 3-column marquee.

### Tech-stack logos (Hero)
Logos are served from `cdn.simpleicons.org`. Edit the `techLogos` array in `Hero.tsx` to swap them out.

### Wordmark
The header wordmark is a plain SVG `<text>` in `Header.tsx`. Replace the contents of the `<Wordmark />` function with your own SVG / logo.

### Names & Copy to Replace
- Header wordmark `portfolio.` → your name
- Giant footer text `PORTFOLIO` → your name / brand
- Copyright `Your Name` → your name
- `hello@example.com` → your real email
- GitHub / LinkedIn / Twitter links in footer

### Motion vs Framer-Motion
This project uses the modern `motion` package (successor to `framer-motion` from v11+). All imports are from `motion/react`.

### Known Gotchas
- The `Footer` uses `clipPath` + a fixed inner `<footer>` to achieve the curtain-reveal effect. It requires `h-screen` on the wrapper — do **not** wrap it in something smaller.
- `SplitText` in `text-block-animation.tsx` mutates DOM. If you hot-reload during development, occasionally duplicate lines may appear until you refresh — this is a dev-mode artifact only.
- `Services` modal uses `position: fixed` so its coordinates match the viewport. Drive it with `clientX/clientY` (NOT `pageX/pageY`) — using page coords breaks the hover image once the section scrolls past the parent's height, because the modal then "flies" off-screen.

---

## 🛠 Build & Deploy

```bash
npm run build      # produces dist/
npm run preview    # serves the built app locally
```

Deploy the `dist/` folder to Vercel, Netlify, Cloudflare Pages, or any static host.

---

Happy shipping! 🚀
