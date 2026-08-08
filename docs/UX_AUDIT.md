# UX Audit

## Priority Findings
- The header had too many icon-only actions competing with search and global controls.
- Export actions were visually mixed with secondary preview/save/share actions.
- Empty roster messaging explained the state but did not offer a clear next action.
- The visual style leaned heavily on cyan gradients, large rounded pills, and soft shadows, making dense tool workflows feel busier than necessary.
- Mobile layout needs compact, predictable touch targets and fewer competing toolbar buttons.

## Implemented Direction
- Keep the global header focused on navigation/search/status/help/language/theme.
- Move roster actions into the roster panel and export actions into the export footer.
- Make `Empaquetar ZIP` the primary CTA.
- Group export options as advanced/supporting controls.
- Use calmer panels, smaller radii, clearer hierarchy, and restrained accent use.

## Future Improvements
- Add a compact command menu for less frequent actions.
- Add Playwright-based visual smoke tests if the project adopts dev dependencies.
- Consider modularizing CSS into sections or files only if a build/deploy workflow is introduced.
