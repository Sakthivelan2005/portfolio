
export const getThemeLogo = (
  logo: { light: string; dark: string },
  theme: "light" | "dark"
) => (theme === "dark" ? logo.dark : logo.light);
