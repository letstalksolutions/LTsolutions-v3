/**
 * Glow Sync - Synchronizes animated glow rotation across all pages
 *
 * Uses a negative animation-delay calculated from the current timestamp
 * so all glows rotate in sync based on actual clock time. When navigating
 * between pages, the glows will be at the same rotation position.
 */

(function() {
  'use strict';

  // Animation cycle duration in milliseconds (matches CSS: 30s for primary, 45s for undertone)
  const PRIMARY_CYCLE_MS = 30000;
  const UNDERTONE_CYCLE_MS = 45000;

  /**
   * Calculate the animation delay needed to sync with clock time
   * A negative delay causes the animation to start partway through
   */
  function calculateSyncDelay(cycleMs) {
    const now = Date.now();
    // How far into the current cycle are we?
    const elapsed = now % cycleMs;
    // Return negative delay to "skip ahead" to the correct position
    return -elapsed;
  }

  /**
   * Apply synchronized animation delays to all glow elements
   */
  function syncGlows() {
    const primaryDelay = calculateSyncDelay(PRIMARY_CYCLE_MS);
    const undertoneDelay = calculateSyncDelay(UNDERTONE_CYCLE_MS);

    // Set CSS custom properties on root for use in animations
    document.documentElement.style.setProperty('--glow-sync-delay', primaryDelay + 'ms');
    document.documentElement.style.setProperty('--glow-undertone-sync-delay', undertoneDelay + 'ms');

    // Apply to all glow pseudo-elements via their parent elements
    const glowContainers = document.querySelectorAll('.hero, .page-hero, .article-hero-glow');

    glowContainers.forEach(function(el) {
      // Apply sync delay as a CSS variable the element can use
      el.style.setProperty('--glow-sync-delay', primaryDelay + 'ms');
      el.style.setProperty('--glow-undertone-sync-delay', undertoneDelay + 'ms');
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncGlows);
  } else {
    syncGlows();
  }

  // Also run on page show (for back/forward cache)
  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      syncGlows();
    }
  });
})();
