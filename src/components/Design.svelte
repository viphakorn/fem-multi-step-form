<script lang>
  import DesktopStep1 from "../../design/desktop-design-step-1.jpg"
  import DesktopStep2 from "../../design/desktop-design-step-2-monthly.jpg"
  import DesktopStep3 from "../../design/desktop-design-step-3-monthly.jpg"
  import DesktopStep4 from "../../design/desktop-design-step-4-monthly.jpg"
  import DesktopStep5 from "../../design/desktop-design-step-5.jpg"
  import { stepStore } from "../lib/stores"

  let isShow = true
  let isOpacity = false
</script>

<button on:click={() => (isShow = !isShow)} class="group-hover: absolute right-4 top-4 z-50">Show</button>
<button on:click={() => (isOpacity = !isOpacity)} class="group-hover: absolute right-20 top-4 z-50">Opacity</button>
{#if $stepStore === 1}
  <img
    src={DesktopStep1}
    alt=""
    class="absolute left-[50%] top-0 z-40 h-[810px] w-[1440px] -translate-x-[50%] select-none {isShow ? 'hidden' : ''}{isOpacity ? 'opacity-50' : ''}"
    draggable="false"
  />{/if}
{#if $stepStore === 2}
  <img
    src={DesktopStep2}
    alt=""
    class="absolute left-[50%] top-0 z-40 h-[810px] w-[1440px] -translate-x-[50%] select-none {isShow ? 'hidden' : ''}{isOpacity ? 'opacity-50' : ''}"
    draggable="false"
  />{/if}
{#if $stepStore === 3}
  <img
    src={DesktopStep3}
    alt=""
    class="absolute left-[50%] top-0 z-40 h-[810px] w-[1440px] -translate-x-[50%] select-none {isShow ? 'hidden' : ''}{isOpacity ? 'opacity-50' : ''}"
    draggable="false"
  />{/if}
{#if $stepStore === 4}
  <img
    src={DesktopStep4}
    alt=""
    class="absolute left-[50%] top-0 z-40 h-[810px] w-[1440px] -translate-x-[50%] select-none {isShow ? 'hidden' : ''}{isOpacity ? 'opacity-50' : ''}"
    draggable="false"
  />{/if}
{#if $stepStore === 5}
  <img
    src={DesktopStep5}
    alt=""
    class="absolute left-[50%] top-0 z-40 h-[810px] w-[1440px] -translate-x-[50%] select-none {isShow ? 'hidden' : ''}{isOpacity ? 'opacity-50' : ''}"
    draggable="false"
  />{/if}
