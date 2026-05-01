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
              title: "UniFi",
              icon: "fa-solid fa-u",
              url: "https://10.0.0.1/",
            },
            {
              title: "Truenas",
              icon: "fa-solid fa-server",
              url: "http://truenas.local",
            },
            {
              title: "Dockhand",
              icon: "fa-brands fa-docker",
              url: "http://truenas.local:30328/",
            },
          ],
        },
        {
          title: "Nas",
          data: [
            {
              title: "Photos",
              icon: "fa-brands fa-pix",
              url: "https://photos.nhan.pt",
            },
            {
              title: "Jellyfin",
              icon: "https://help-14.github.io/files/icons/jellyfin.svg",
              url: "https://phim.nhan.pt",
            },
            {
              title: "Radarr",
              icon: "fa-solid fa-clapperboard",
              url: "https://radarr.nhan.pt",
              urlLocal: "http://truenas.local:17878",
            },
            {
              title: "Sonarr",
              icon: "fa-solid fa-tv",
              url: "https://radarr.nhan.pt",
              urlLocal: "http://truenas.local:17979",
            },
          ],
        },
        {
          title: "Tools",
          data: [
            {
              title: "Torrent",
              icon: "https://help-14.github.io/files/icons/utorrent.svg",
              url: "http://truenas.local:30038",
            },
            {
              title: "Downloader",
              icon: "fa-solid fa-cloud-arrow-down",
              url: "http://truenas.local:35800",
            },
            // {
            //   title: "Explorer",
            //   icon: "fa-regular fa-folder-open",
            //   url: "http://truenas.local:33000",
            // },
            {
              title: "Termix",
              icon: "fa-solid fa-terminal",
              url: "https://termix.nhan.pt",
            },
          ],
        },
        {
          title: "Cloud",
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
              url: "https://facebook.com",
            },
            {
              title: "Instagram",
              icon: "fa-brands fa-instagram",
              url: "https://instagram.com",
            },
            {
              title: "Reddit",
              icon: "fa-brands fa-reddit",
              url: "https://reddit.com",
            },
            // {
            //   title: "Voz",
            //   icon: "https://help-14.github.io/files/icons/voz.svg",
            //   url: "https://voz.vn",
            // },
            {
              title: "Youtube",
              icon: "fa-brands fa-youtube",
              url: "https://youtube.com",
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
              url: "https://lazada.vn",
            },
            {
              title: "Giang Huy",
              icon: "https://help-14.github.io/files/icons/taobao.svg",
              url: "https://nhaphang.gianghuy.com/user",
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

        {
          title: "Service",
          data: [
            {
              title: "Maps",
              icon: "fa-solid fa-location-dot",
              url: "https://www.google.com/maps",
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
