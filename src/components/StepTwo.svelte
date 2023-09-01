<script lang="ts">
  import { isYearly, totalPrice,formDataStore } from "../lib/stores"



  let activeIndex = -1

  const plans = [
    { icon: "./images/icon-arcade.svg", name: "Arcade", yearlyPrice: 90, monthlyPrice: 9 },
    { icon: "./images/icon-advanced.svg", name: "Advanced", yearlyPrice: 120, monthlyPrice: 12 },
    { icon: "./images/icon-pro.svg", name: "Pro", yearlyPrice: 150, monthlyPrice: 15 },
  ]
  $: {
    if (activeIndex >= 0 && activeIndex < plans.length) {
      totalPrice.set(0)
      const selected = plans[activeIndex]
      totalPrice.update((value) => value + ($isYearly ? selected.yearlyPrice : selected.monthlyPrice))
    }
  }
</script>

<header>
  <h2 class="mb-[16px] text-2xl font-bold text-marine-blue md:text-[2rem]">Select your plan</h2>
  <p class="max-w-[240px] text-[14px] text-cool-gray md:mb-[46px] md:max-w-none md:text-[1rem]">You have the option of monthly or yearly billing.</p>
</header>
<div class="flex flex-col gap-3 md:flex-row md:gap-[18px]">
  {#each plans as plan, index}
    <label
    for={plan.name.toLowerCase()}
      class="flex w-full cursor-pointer items-start gap-3 rounded-[10px] border border-light-gray p-4 focus:border-purplish-blue focus:bg-alabaster md:flex-col
      {$formDataStore.plan === plan.name ? 'border-purplish-blue bg-pastel-blue/10' : ''}"
    >
    <input id={plan.name.toLowerCase()} type="radio" name={plan.name} value={plan.name} bind:group={$formDataStore.plan}  >
      <img src={plan.icon} alt={plan.name} />
      <div class="text-left md:mt-[30px] md:space-y-2">
        <h3 class="font-medium text-marine-blue">{plan.name}</h3>
        {#if $isYearly}
          <p class="text-[14px] text-cool-gray">${plan.yearlyPrice}/yr</p>
          <p class="text-[12px] font-medium text-marine-blue">2 months free</p>
        {:else}
          <p class="text-[14px] text-cool-gray">${plan.monthlyPrice}/mo</p>
        {/if}
      </div>
    </label>
  {/each}
</div>
<div class="flex items-center justify-center gap-5 rounded-[10px] bg-alabaster p-3 md:!mt-[32px]">
  <span class="text-[14px] font-bold text-marine-blue">Monthly</span>
  <button type="button" on:click={()=> isYearly.update(prev => !prev)}  class="h-[20px] w-[40px] rounded-full bg-marine-blue p-[4px]">
    <span class="block h-[12px] w-[12px] rounded-full bg-white transition-transform duration-300 {$isYearly ? 'translate-x-[20px]' : ''}">
      <span class="sr-only">Switcher</span>
    </span>
  </button>
  <span class="text-[14px] font-bold text-cool-gray">Yearly</span>
</div>
