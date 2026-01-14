const base = "https://loremflickr.com";

export const media = {
  hero: `${base}/2000/1300/arabic,coffee,ceremony?lock=21`,
  interior: `${base}/1800/1200/cafe,interior,arabic?lock=32`,
  menu: {
    qahwa1: `${base}/1600/1200/arabic,coffee?lock=22`,
    qahwa2: `${base}/1600/1200/cardamom,coffee?lock=23`,
    espresso1: `${base}/1600/1200/espresso?lock=24`,
    espresso2: `${base}/1600/1200/latte?lock=25`,
    coldbrew1: `${base}/1600/1200/cold,brew,coffee?lock=26`,
    coldbrew2: `${base}/1600/1200/iced,coffee?lock=27`,
    dessert1: `${base}/1600/1200/dessert,pastry?lock=28`,
    dessert2: `${base}/1600/1200/dates,dessert?lock=29`,
    breakfast1: `${base}/1600/1200/breakfast?lock=30`,
    breakfast2: `${base}/1600/1200/brunch?lock=31`,
  },
  gallery: {
    one: `${base}/1600/1200/coffee,beans?lock=33`,
    two: `${base}/1600/1200/dates,fruit?lock=34`,
    three: `${base}/1600/1200/coffee,cups?lock=35`,
    four: `${base}/1600/1200/coffee,ritual?lock=36`,
    five: `${base}/1600/1200/arabic,interior?lock=40`,
    six: `${base}/1600/1200/coffee,brew?lock=41`,
    seven: `${base}/1600/1200/latte,art?lock=42`,
    eight: `${base}/1600/1200/saudi,coffee?lock=43`,
  },
  team: {
    one: `${base}/1200/1200/barista,portrait?lock=37`,
    two: `${base}/1200/1200/coffee,roaster,portrait?lock=38`,
    three: `${base}/1200/1200/hospitality,portrait?lock=39`,
  },
  about: `${base}/1600/1200/arabic,coffee,interior?lock=44`,
} as const;
