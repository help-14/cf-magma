import { WebData } from "./types/data"

export const WebsiteData: WebData = {
  localPingUrl: "10.0.0.1",
  localPingTimeout: 300,
  longitude: 105.808534,
  latitude: 21.042698,
  showSearchBox: false,
  groups: [
    {
      title: "Applications",
      data: [
        {
          title: "Servers",
          data: [
            {
              title: "Router OS",
              icon: "fa-solid fa-ethernet",
              url: "http://10.0.0.1/",
            },
            {
              title: "UniFi",
              icon: "fa-solid fa-u",
              url: "http://192.168.1.1/network",
            },
            {
              title: "iHost",
              icon: "https://help-14.github.io/files/icons/matter.svg",
              url: "http://ihost.local/",
            },
            {
              title: "Zimaboard",
              icon: "fa-solid fa-server",
              url: "http://zima.local:8888",
            },
          ],
        },
        {
          title: "Nas",
          data: [
            {
              title: "jDownloader",
              icon: "fa-solid fa-cloud-arrow-down",
              url: "http://zima.local:5800",
            },
            {
              title: "Torrent",
              icon: "https://help-14.github.io/files/icons/utorrent.svg",
              url: "http://zima.local:8181",
            },
            {
              title: "Jellyfin",
              icon: "https://help-14.github.io/files/icons/jellyfin.svg",
              url: "https://phim.nhan.pt",
              urlLocal: "http://zima.local:8097",
            },
          ],
        },
        {
          title: "Service",
          data: [
            {
              title: "Cloudflare",
              icon: "https://help-14.github.io/files/icons/cloudflare.svg",
              url: "https://dash.cloudflare.com",
            },
            {
              title: "Github",
              icon: "fa-brands fa-github-alt",
              url: "https://github.com",
            },
            {
              title: "Maps",
              icon: "fa-solid fa-location-dot",
              url: "https://www.google.com/maps",
            },
          ],
        },
        {
          title: "Tools",
          data: [
            {
              title: "Color",
              icon: "fa-solid fa-palette",
              url: "https://htmlcolorcodes.com",
            },
            {
              title: "SVG viewer",
              icon: "https://help-14.github.io/files/icons/svg-viewer.svg",
              url: "https://www.svgviewer.dev",
            },
          ],
        },
      ],
    },
    {
      title: "Bookmarks",
      data: [
        {
          title: "Social Media",
          data: [
            {
              title: "Facebook",
              icon: "fa-brands fa-facebook",
              url: "https://www.facebook.com",
            },
            {
              title: "Reddit",
              icon: "fa-brands fa-reddit",
              url: "https://www.reddit.com",
            },
            {
              title: "Voz",
              icon: "https://help-14.github.io/files/icons/voz.svg",
              url: "https://voz.vn",
            },
            {
              title: "Youtube",
              icon: "fa-brands fa-youtube",
              url: "https://www.youtube.com",
            },
          ],
        },
        {
          title: "Shopping",
          data: [
            {
              title: "Shopee",
              icon: "fa-solid fa-bag-shopping",
              url: "https://shopee.vn",
            },
            {
              title: "Lazada",
              icon: "fa-solid fa-heart",
              url: "https://www.lazada.vn/",
            },
            {
              title: "Giang Huy",
              icon: "https://help-14.github.io/files/icons/taobao.svg",
              url: "https://hethong.gianghuy.com/danh-sach-don-hang?t=3",
            },
          ],
        },
        {
          title: "Games",
          data: [
            {
              title: "Steam",
              icon: "fa-brands fa-steam",
              url: "https://store.steampowered.com",
            },
            {
              title: "Epic Games",
              icon: "https://help-14.github.io/files/icons/epic.svg",
              url: "https://store.epicgames.com",
            },
          ],
        },
      ],
    },
  ],
  youtube: {
    live: [
      "https://www.youtube.com/@ThangLongTv",
      "https://www.youtube.com/@thanglongtvcong1800",
    ],
  },
}
