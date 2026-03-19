# Scroll Animation and Sticky Video Plan

## Proposed Changes

### 1. Sticky Video Background
Currently, the video is part of the `Hero` section and scrolls away. 
- I will move the `<video>` element out of the `Hero` section and make it `fixed` to the viewport (`fixed inset-0 z-[-1]`).
- I will use Framer Motion's `useScroll` and `useTransform` to track the page scroll.
- The video's opacity will start at `50%` (`0.5`) at the top of the page, and fade out to `10%` (`0.1`) as the user scrolls down into the `Services` section.
- I will remove the opaque `bg-black` classes from the root container and the `Services` section so the video can be seen underneath them.

### 2. Services Section Tying Text to Scroll
The `Services` section has a description and title. The user requested text animation tied to the scroll position.
- I will create a new `<ScrollText>` component inside [App.tsx](file:///c:/Users/nikit/Desktop/anti/bulky-bikes-agency/src/App.tsx).
- This component will wrap the target text (like the "We are a collective..." text or the "Our Services" intro text).
- It will break the text down into individual characters or words.
- It will track its own `useScroll({ target: containerRef, offset: ["start end", "end center"] })`.
- Each character's opacity will be mapped to a specific fraction of the `scrollYProgress`, creating a satisfying "typing as you scroll" effect.

## Verification Plan
1. Start the React app using `npm run dev`.
2. Open localhost:3000 to verify the background video is sticky and fades out when scrolling.
3. Validate that the text in the Services section appears letter-by-letter as you scroll down towards it.
