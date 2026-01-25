# Research: Modern Service Card Design Patterns

## Summary of Patterns

Modern SaaS service/pricing cards are clean, user-centric, and built for clarity. They act as a critical conversion tool, guiding users to the right plan for them.

- **Structure:** Most cards follow a clear `Header > Features > CTA` structure. A grid layout (2-4 cards) is standard. One card is often highlighted as "Most Popular" with a badge and a slightly different visual treatment (larger size, stronger border).
- **Headers:** Typically contain the plan name (e.g., "Starter," "Pro"), the price, and often a brief tagline for the target user (e.g., "For individuals and small teams"). The use of an icon alongside the plan name is common to add visual interest and reinforce the plan's purpose.
- **Feature Lists:** Clarity is key. Short, scannable lists using checkmarks are the dominant pattern. Tooltips or expandable sections provide detail without cluttering the main view.
- **CTAs:** A prominent, full-width button at the bottom of the card is the standard. The text is action-oriented ("Get Started," "Sign Up," "Contact Sales"). Gradients and subtle hover effects are common.
- **Dark Mode:** Separation is achieved not with harsh borders or strong shadows, but with subtle shifts in background luminosity. Cards are a slightly lighter shade of grey than the main background, creating a sense of elevation.

---

## 1. Modern SaaS Card Examples

#### 1. Stripe (https://stripe.com/pricing)
- **Pattern:** Extremely clean, 2-card layout for their primary offerings. They abstract complex details into a secondary "Compare features" section.
- **Icon + Text Header:** They don't use icons in the primary card header, opting for a clean typographic approach. The focus is on the plan name and a clear description.
- **Takeaway:** Simplicity and clarity convert. Don't overwhelm the user on the first view. Guide them to deeper information.

#### 2. Linear (https://linear.app/pricing)
- **Pattern:** Classic 4-card layout in a dark UI. They highlight the "Plus" plan. The structure is exceptionally clear and scannable.
- **Icon + Text Header:** No icons in the header. They use a simple, bold plan name.
- **Dark on Dark:** Linear uses a slightly lighter background for the cards (`#1A1A1A`) compared to the main page background (`#0F0F0F`), creating separation. There is no border or strong shadow, just elevation through color.
- **Takeaway:** In dark mode, subtle background color difference is more effective than borders or shadows for separation.

#### 3. Vercel (https://vercel.com/pricing)
- **Pattern:** A 3-card layout ("Hobby", "Pro", "Enterprise"). The "Pro" plan is highlighted. They effectively use a combination of a feature list and a "usage" calculator.
- **Icon + Text Header:** Vercel places a subtle, stylized icon *above* the plan name, which is a common and effective pattern.
- **Takeaway:** Combining a feature list with interactive elements like a usage calculator can be very effective for usage-based pricing models.

#### 4. Notion (https://www.notion.so/pricing)
- **Pattern:** 4-card layout that feels friendly and approachable. They use toggles for "Billed monthly/annually" effectively.
- **Icon + Text Header:** Like Vercel, Notion places a distinct icon above each plan name, reinforcing the plan's identity.
- **Takeaway:** Well-designed toggles and clear iconography make the page feel interactive and easy to understand.

---

## 2. Gradient Button Styles

- **Direction:** Diagonal (e.g., `to right top`) or simple left-to-right (`to right`) gradients are most common. They provide a dynamic feel without being distracting. Radial gradients are rare for buttons.
- **Hover Effects:**
    - **Gradient Shift:** A popular effect is to shift the `background-position` of a larger gradient on hover, creating a smooth slide or shimmer.
    - **Glow/Shadow:** Applying a soft, colored `box-shadow` on hover that matches the gradient's colors can create a "glow" effect.
    - **Lift:** Using `transform: translateY(-2px);` on hover gives the button a subtle "lift."
- **Accessibility:** This is a major concern. The contrast ratio between the button text and *all parts* of the gradient background must be at least 4.5:1 (WCAG AA). This can be tricky. It's often safer to use a solid color on one end of the gradient that meets contrast requirements and ensure the text sits there, or to place a subtle text-shadow on the text to ensure legibility.

---

## 3. Benefits/Feature Lists

- **Style:** Checkmarks are the dominant and most easily understood pattern for indicating an included feature. Simple bullets are a fallback, but less visually affirming. Using custom icons for each feature can be effective if the icons are universally understood, but can also create cognitive load.
- **Spacing & Typography:** Generous line spacing (e.g., `1.5` or more) is crucial for scannability. Feature text is typically normal font-weight, not bold. The focus is on the list as a whole.
- **Clutter:** Lists start to feel cluttered after 5-7 items. For longer lists, it's better to group them under subheadings or show the top 5 and have a "Show all features" link that expands the card or links to a details page.

---

## 4. Dark Card on Dark Background

- **Separation:** The best practice is to use varying levels of background luminosity. The main background is the darkest (e.g., a dark grey like `#121212`), and the card surface is a step lighter.
- **Techniques:**
    - **Background Shift:** Card background is a lighter grey than the page background. (e.g., Linear). This is the most modern and effective technique.
    - **Border:** A subtle, 1px border in a semi-transparent white (`rgba(255, 255, 255, 0.1)`) can work well to define the card's edge without being harsh.
    - **Shadow:** Traditional black shadows are invisible on dark backgrounds. A very subtle, diffuse glow (using a light-colored shadow) can work but is difficult to get right and can look dated if not done well.

---

## "So What" Recommendations

1.  **Adopt a 3-Card Model:** Use "Strategy," "Implementation," and "Transformation" cards. Highlight "Implementation" as the most popular choice.
2.  **Header:** Use the `lab/card-mockup.png` as a guide. The `Icon + Badge` header is a strong, modern pattern.
3.  **Gradient CTA:** Use a subtle diagonal gradient for the CTA button. On hover, use a combination of "lift" (`transform: translateY`) and a slight gradient shift or brightening. **Crucially, ensure the text has sufficient contrast against all parts of the gradient.**
4.  **Feature List:** Use checkmarks. Keep the list to a maximum of 5 key benefits per card. For more detail, link to a dedicated service page.
5.  **Dark Mode:** If we implement a dark theme, the cards should be a lighter shade of the background color for separation. Avoid strong borders or shadows.

## Anti-Patterns to Avoid

- **Long Feature Lists:** Don't list every single detail. It creates analysis paralysis.
- **Vague Plan Names:** Names should clearly signal the service's purpose.
- **Inconsistent Highlighting:** Don't visually emphasize more than one card. It defeats the purpose of guiding the user.
- **Poor Gradient Contrast:** Do not sacrifice readability for a flashy gradient. Test contrast ratios rigorously.
- **Harsh Borders/Shadows in Dark Mode:** Avoid strong `border: 1px solid white` or heavy `box-shadow` on dark backgrounds. It looks dated and creates visual noise.
