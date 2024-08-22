import { createTheme } from "./types";

const globalHue = 10;

const HuePurple = globalHue - 21;
const HueShade = globalHue + 10;
const HueAsh = globalHue - 9;
const HueBlue = globalHue - 8;

const tokens = {
  purple: {
    c50: `hsl(${HuePurple + 2}, 70%, 80%)`,
  c100: `hsl(${HuePurple + 2}, 70%, 70%)`,
  c200: `hsl(${HuePurple + 2}, 70%, 50%)`,
  c300: `hsl(${HuePurple + 2}, 70%, 40%)`,
  c400: `hsl(${HuePurple - 2}, 90%, 40%)`,
  c500: `hsl(${HuePurple - 2}, 80%, 30%)`,
  c600: `hsl(${HuePurple - 2}, 70%, 20%)`,
  c700: `hsl(${HuePurple - 2}, 70%, 15%)`,
  c800: `hsl(${HuePurple - 2}, 60%, 10%)`,
  c900: `hsl(${HuePurple - 2}, 60%, 5%)`
  },
  shade: {
    c25: `hsl(${HueShade - 20}, 25%, 55%)`,
    c50: `hsl(${HueShade + 4}, 20%, 50%)`,
    c100: `hsl(${HueShade + 3}, 20%, 40%)`,
    c200: `hsl(${HueShade + 1}, 20%, 30%)`,
    c300: `hsl(${HueShade + 0}, 20%, 25%)`,
    c400: `hsl(${HueShade - 1}, 20%, 20%)`,
    c500: `hsl(${HueShade - 2}, 20%, 15%)`,
    c600: `hsl(${HueShade - 3}, 15%, 10%)`,
    c700: `hsl(${HueShade - 4}, 15%, 5%)`,
    c800: `hsl(${HueShade - 5}, 10%, 5%)`,
    c900: `hsl(${HueShade - 6}, 10%, 5%)`
  },
  ash: {
    c50: `hsl(${HueAsh - 5}, 20%, 60%)`,
    c100: `hsl(${HueAsh - 3}, 20%, 50%)`,
    c200: `hsl(${HueAsh - 2}, 20%, 40%)`,
    c300: `hsl(${HueAsh - 1}, 25%, 30%)`,
    c400: `hsl(${HueAsh + 0}, 25%, 25%)`,
    c500: `hsl(${HueAsh + 1}, 25%, 20%)`,
    c600: `hsl(${HueAsh + 2}, 20%, 15%)`,
    c700: `hsl(${HueAsh + 3}, 20%, 10%)`,
    c800: `hsl(${HueAsh + 4}, 15%, 5%)`,
    c900: `hsl(${HueAsh + 5}, 15%, 5%)`
  },
  blue: {
    c50: `hsl(${HueBlue}, 60%, 80%)`,
    c100: `hsl(${HueBlue}, 40%, 60%)`,
    c200: `hsl(${HueBlue}, 40%, 50%)`,
    c300: `hsl(${HueBlue}, 40%, 40%)`,
    c400: `hsl(${HueBlue}, 40%, 30%)`,
    c500: `hsl(${HueBlue}, 40%, 25%)`,
    c600: `hsl(${HueBlue}, 30%, 20%)`,
    c700: `hsl(${HueBlue}, 30%, 15%)`,
    c800: `hsl(${HueBlue}, 20%, 10%)`,
    c900: `hsl(${HueBlue}, 20%, 5%)`
  }
};

export default createTheme({
  name: "custom",
  extend: {
    colors: {
      themePreview: {
        primary: tokens.blue.c200,
        secondary: tokens.shade.c50
      },

      pill: {
        background: tokens.shade.c300,
        backgroundHover: tokens.shade.c200,
        highlight: tokens.blue.c200,

        activeBackground: tokens.shade.c300,
      },

      global: {
        accentA: tokens.blue.c200,
        accentB: tokens.blue.c300
      },

      lightBar: {
        light: tokens.blue.c400
      },

      buttons: {
        toggle: tokens.purple.c300,
        toggleDisabled: tokens.ash.c500,

        secondary: tokens.ash.c700,
        secondaryHover: tokens.ash.c700,
        purple: tokens.purple.c500,
        purpleHover: tokens.purple.c400,
        cancel: tokens.ash.c500,
        cancelHover: tokens.ash.c300
      },

      background: {
        main: tokens.shade.c900,
        secondary: tokens.shade.c600,
        secondaryHover: tokens.shade.c400,
        accentA: tokens.purple.c500,
        accentB: tokens.blue.c500
      },

      modal: {
        background: tokens.shade.c800,
      },

      type: {
        logo: tokens.purple.c100,
        text: tokens.shade.c50,
        dimmed: tokens.shade.c50,
        divider: tokens.ash.c500,
        secondary: tokens.ash.c100,
        link: tokens.purple.c100,
        linkHover: tokens.purple.c50
      },

      search: {
        background: tokens.shade.c500,
        hoverBackground: tokens.shade.c600,
        focused: tokens.shade.c400,
        placeholder: tokens.shade.c100,
        icon: tokens.shade.c100
      },

      mediaCard: {
        hoverBackground: tokens.shade.c600,
        hoverAccent: tokens.shade.c25,
        hoverShadow: tokens.shade.c900,
        shadow: tokens.shade.c700,
        barColor: tokens.ash.c200,
        barFillColor: tokens.purple.c100,
        badge: tokens.shade.c700,
        badgeText: tokens.ash.c100
      },

      largeCard: {
        background: tokens.shade.c600,
        icon: tokens.purple.c400
      },

      dropdown: {
        background: tokens.shade.c600,
        altBackground: tokens.shade.c700,
        hoverBackground: tokens.shade.c500,
        text: tokens.shade.c50,
        secondary: tokens.shade.c100,
        border: tokens.shade.c400,
        contentBackground: tokens.shade.c500
      },

      authentication: {
        border: tokens.shade.c300,
        inputBg: tokens.shade.c600,
        inputBgHover: tokens.shade.c500,
        wordBackground: tokens.shade.c500,
        copyText: tokens.shade.c100,
        copyTextHover: tokens.ash.c50
      },

      settings: {
        sidebar: {
          activeLink: tokens.shade.c600,
          badge: tokens.shade.c900,

          type: {
            secondary: tokens.shade.c200,
            inactive: tokens.shade.c50,
            icon: tokens.shade.c50,
            iconActivated: tokens.purple.c200,
            activated: tokens.purple.c50
          }
        },

        card: {
          border: tokens.shade.c400,
          background: tokens.shade.c400,
          altBackground: tokens.shade.c400
        },

        saveBar: {
          background: tokens.shade.c800
        }
      },

      utils: {
        divider: tokens.ash.c300
      },

      errors: {
        card: tokens.shade.c800,
        border: tokens.ash.c500,

        type: {
          secondary: tokens.ash.c100
        }
      },

      about: {
        circle: tokens.ash.c500,
        circleText: tokens.ash.c50
      },

      editBadge: {
        bg: tokens.ash.c500,
        bgHover: tokens.ash.c400,
        text: tokens.ash.c50
      },

      progress: {
        background: tokens.ash.c50,
        preloaded: tokens.ash.c50,
        filled: tokens.purple.c200
      },

      video: {
        buttonBackground: tokens.ash.c200,

        autoPlay: {
          background: tokens.ash.c700,
          hover: tokens.ash.c500
        },

        scraping: {
          card: tokens.shade.c700,
          loading: tokens.purple.c200,
          noresult: tokens.ash.c100
        },

        audio: {
          set: tokens.purple.c200
        },

        context: {
          background: tokens.ash.c900,
          light: tokens.shade.c50,
          border: tokens.ash.c600,
          hoverColor: tokens.ash.c600,
          buttonFocus: tokens.ash.c500,
          flagBg: tokens.ash.c500,
          inputBg: tokens.ash.c600,
          buttonOverInputHover: tokens.ash.c500,
          inputPlaceholder: tokens.ash.c200,
          cardBorder: tokens.ash.c700,
          slider: tokens.ash.c50,
          sliderFilled: tokens.purple.c200,

          buttons: {
            list: tokens.ash.c700,
            active: tokens.ash.c900
          },

          closeHover: tokens.ash.c800,

          type: {
            secondary: tokens.ash.c200,
            accent: tokens.purple.c200
          }
        }
      }
    }
  }
});
