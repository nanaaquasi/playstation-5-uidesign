import user1 from "./assets/images/user-1.jpg";
import user2 from "./assets/images/user-2.jpg";

import gtaPreview from "./assets/images/gta/preview.jpg";
import gtaLarge from "./assets/images/gta/preview-large.jpeg";
import gtaLogo from "./assets/images/gta/logo.png";

import spidermanPreview from "./assets/images/spiderman/preview.jpg";
import spidermanLarge from "./assets/images/spiderman/preview-lg.jpeg";
import spidermanLogo from "./assets/images/spiderman/logo.png";

import astroLarge from "./assets/images/astro/preview-large.png";
import astroLogo from "./assets/images/astro/logo.png";

import rachetPreview from "./assets/images/rachet/preview.png";
import rachetLarge from "./assets/images/rachet/preview-lg.png";
import rachetLogo from "./assets/images/rachet/logo.png";

import horizonLarge from "./assets/images/horizon/preview-lg.jpeg";

import codPreview from "./assets/images/cod/preview.jpeg";
import codLarge from "./assets/images/cod/preview-lg.png";
import codLogo from "./assets/images/cod/logo.png";

import mambaPreview from "./assets/images/nba/preview.jpg";
import mambaLarge from "./assets/images/nba/mamba.jpeg";
import nbaLogo from "./assets/images/nba/logo.png";

export const userAccounts = [
  {
    id: 1,
    name: "Nana Aquasi",
    image: user1,
    defaultUser: true,
  },
  {
    id: 2,
    name: "Kweku Kilu",
    image: user2,
    defaultUser: false,
  },
];

export const userGames = [
  {
    id: "1",
    title: "Astro's Playroom",
    previewImg:
      "https://image.api.playstation.com/vulcan/ap/rnd/202010/2012/T3h5aafdjR8k7GJAG82832De.png",
    mainImg: astroLarge,
    logo: astroLogo,
    tagline:
      "Discover the future of play with intergalactic platforming hero  - ASTRO",
  },
  {
    id: "2",
    title: "Marvel's Spiderman: Miles Morales",
    previewImg: spidermanPreview,
    mainImg: spidermanLarge,
    logo: spidermanLogo,
    tagline: "Be Greater. Be Yourself.",
  },
  {
    id: "3",
    title: "Grand Theft Auto V",
    previewImg: gtaPreview,
    mainImg: gtaLarge,
    logo: gtaLogo,
    tagline: "Welcome to Los Santos.",
  },
  {
    id: "4",
    title: "Ratchet & Clank: Rift Apart",
    previewImg: rachetPreview,
    mainImg: rachetLarge,
    logo: rachetLogo,
    tagline: "Blast your way through an interdimensional adventure",
  },
  {
    id: "5",
    title: "Call of Duty®: Black Ops Cold War ",
    previewImg: codPreview,
    mainImg: codLarge,
    logo: codLogo,
    tagline:
      "The iconic Black Ops series is back with Call of Duty: Black Ops Cold War.",
  },
  {
    id: "6",
    title: "NBA 2K21: Mamba Edition ",
    previewImg: mambaPreview,
    mainImg: mambaLarge,
    logo: nbaLogo,
    tagline: "Everything is Game.",
  },
];

export const exploreItems = [
  {
    id: "1",
    title: "Ready to explore a PS5 Adventure?",
    mainImg: astroLarge,
  },
  {
    id: "2",
    title: "New Edition of NBA: Mamba",
    mainImg: mambaLarge,
  },
  {
    id: "3",
    title: "Game Preview",
    mainImg: codLarge,
  },
  {
    id: "4",
    title: "Gameplay Trailer #2",
    mainImg: rachetLarge,
  },
  {
    id: "5",
    title: "Announcement Trailer",
    mainImg: horizonLarge,
  },

  {
    id: "6",
    title: "Game Preview #2",
    mainImg: spidermanLarge,
  },

  {
    id: "7",
    title: "Game Preview #1",
    mainImg: gtaLarge,
  },
];
