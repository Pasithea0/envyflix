import { useCallback, useEffect, useRef, useState } from "react";
import Sticky from "react-sticky-el";
import { useWindowSize } from "react-use";

import { SearchBarInput } from "@/components/form/SearchBar";
import { ThinContainer } from "@/components/layout/ThinContainer";
import { useSlashFocus } from "@/components/player/hooks/useSlashFocus";
import { HeroTitle } from "@/components/text/HeroTitle";
import { useRandomTranslation } from "@/hooks/useRandomTranslation";
import { useSearchQuery } from "@/hooks/useSearchQuery";
import { useBannerSize } from "@/stores/banner";

export interface HeroPartProps {
  setIsSticky: (val: boolean) => void;
  searchParams: ReturnType<typeof useSearchQuery>;
}

function getTimeOfDay(date: Date): "night" | "morning" | "day" | "420" | "69" {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  if (month === 4 && day === 20) return "420";
  if (month === 6 && day === 9) return "69";
  const hour = date.getHours();
  if (hour < 5) return "night";
  if (hour < 12) return "morning";
  if (hour < 19) return "day";
  return "night";
}

export function HeroPart({ setIsSticky, searchParams }: HeroPartProps) {
  const { t: randomT } = useRandomTranslation();
  const [search, setSearch, setSearchUnFocus] = searchParams;
  const [, setShowBg] = useState(false);
  const bannerSize = useBannerSize();
  const stickStateChanged = useCallback(
    (isFixed: boolean) => {
      setShowBg(isFixed);
      setIsSticky(isFixed);
    },
    [setShowBg, setIsSticky],
  );
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  // Detect if running as a PWA on iOS
  const isIOSPWA =
    /iPad|iPhone|iPod/i.test(navigator.userAgent) &&
    window.matchMedia("(display-mode: standalone)").matches;

  const topSpacing = isIOSPWA ? 60 : 16;
  const [stickyOffset, setStickyOffset] = useState(topSpacing);

  const isLandscape = windowHeight < windowWidth && isIOSPWA;
  const adjustedOffset = isLandscape
    ? -40 // landscape
    : 0; // portrait

  useEffect(() => {
    if (windowWidth > 1280) {
      // On large screens the bar goes inline with the nav elements
      setStickyOffset(topSpacing);
    } else {
      // On smaller screens the bar goes below the nav elements
      setStickyOffset(topSpacing + 60 + adjustedOffset);
    }
  }, [adjustedOffset, topSpacing, windowWidth]);

  const time = getTimeOfDay(new Date());
  const title = randomT(`home.titles.${time}`);
  const placeholder = randomT(`home.search.placeholder`);
  const inputRef = useRef<HTMLInputElement>(null);
  useSlashFocus(inputRef);

  return (
    <ThinContainer>
      <div className="mt-44 space-y-16 text-center">
        <div className="relative z-10 mb-16">
          <div
            className="mx-auto max-w-md p-4 rounded-xl bg-background-main bg-opacity-50"
            role="alert"
          >
            <div className="pb-4">
              <span className="text-4xl text-white text-center">⚠️</span>
            </div>
            <div>
              <span className="text-sm font-bold text-white">
                Beta Notice: This is the beta version of EnvyFlix
              </span>
            </div>
            <span className="text-xs text-gray-300">
              Please report any bugs/issues to the{" "}
              <a
                href="https://discord.gg/7z6znYgrTG"
                target="_blank"
                rel="noreferrer"
              >
                <u>EnvyFlix Discord.</u>
              </a>
            </span>
            <div>
              <span className="text-xs text-gray">
                Not here to test? Go back to{" "}
                <a href="https://envyflix.xyz" target="_blank" rel="noreferrer">
                  <u>envyflix.xyz</u>
                </a>
              </span>
            </div>
            <div>
              <button
                type="button"
                className="text-xs text-blue-500 hover:text-blue-700 focus:outline-none"
                onClick={() =>
                  // eslint-disable-next-line no-alert
                  alert(
                    "Welcome to the EnvyFlix beta! Currently there are no beta features. However, please report any issues and bugs to the Discord and join to stay up to date on beta changes.",
                  )
                }
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="relative h-20 z-30">
          <Sticky
            topOffset={stickyOffset * -1 + bannerSize}
            stickyStyle={{
              paddingTop: `${stickyOffset + bannerSize}px`,
            }}
            onFixedToggle={stickStateChanged}
          >
            <SearchBarInput
              ref={inputRef}
              onChange={setSearch}
              value={search}
              onUnFocus={setSearchUnFocus}
              placeholder={placeholder ?? ""}
            />
          </Sticky>
        </div>
      </div>
    </ThinContainer>
  );
}
