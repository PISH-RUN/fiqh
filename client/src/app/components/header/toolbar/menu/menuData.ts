export const menuData: Array<MenuItemType> = [
  {
    key: "blog",
    text: "اخبار و گزارش ها",
    route: "/blog",
    subMenu: [
      { key: "economical", route: "/blog/economical", text: "اقتصادی" },
      { key: "nature", route: "/blog/nature", text: "طبیعت" },
      { key: "health", route: "/blog/health", text: "سلامت" },
      { key: "Political", route: "/blog/Political", text: "سیاسی" },
      { key: "technology", route: "/blog/technology", text: "تکنولوژی" },
      { key: "media", route: "/blog/media", text: "رسانه ها" },
      { key: "international", route: "/blog/international", text: "بین الملل" },
      { key: "sporty", route: "/blog/sporty", text: "ورزشی" },
    ],
  },
  {
    key: "socialNetword",
    text: "نظریه",
    route: "",
    subMenu: [],
  },
  {
    key: "matches",
    text: "مسابقات",
    route: "",
    subMenu: [],
  },
  {
    key: "library",
    text: "کتابخانه",
    route: "",
    subMenu: [],
  },
]
