import { WebsiteData } from "../data"

let isLocalNetwork = false
let checked = false

function ping(ip: string, timeout: number): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    var img = new Image()
    img.onload = function () {
      resolve(true)
    }
    img.onerror = function (e: any) {
      resolve(true)
    }
    img.src = "https://" + ip
    setTimeout(function () {
      img.src = ""
      resolve(false)
    }, timeout)
  })
}

export const IsLocal = async (): Promise<boolean> => {
  if (!checked) {
    if (await ping(WebsiteData.localPingUrl, WebsiteData.localPingTimeout)) {
      isLocalNetwork = true
    }
    checked = true
  }
  return isLocalNetwork
}
