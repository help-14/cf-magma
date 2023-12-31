import { Show, type Component, Suspense } from "solid-js"
import { WebsiteData } from "./data"
import Groups from "./components/Groups"
import Timer from "./components/Timer"
import Weather from "./components/Weather"
import SearchBox from "./components/SearchBox"
import "flowbite"

const App: Component = () => {
  return (
    <div id="main" class="container px-5 mx-auto flex flex-col max-w-5xl">
      <div class="mt-10">
        <Show when={WebsiteData.showSearchBox}>
          <SearchBox />
        </Show>
      </div>
      <div id="header" class="flex flex-row pt-10 pb-2">
        <div class="grow">
          <Timer />
        </div>
        <div id="header-right" class="my-auto pl-5 pr-5">
          <Suspense>
            <Weather />
          </Suspense>
        </div>
      </div>
      <div class="">
        <Groups data={WebsiteData.groups} />
      </div>
      <div id="footer" class="row"></div>
    </div>
  )
}

export default App
