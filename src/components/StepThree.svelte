<script lang="ts">
  import { isYearly } from "../lib/stores"

  const addons = [
    { label: "Online Service", description: "Access to multiplayer games", yearlyPrice: "+$10/yr", monthlyPrice: "+$1/mo" },
    { label: "Larger storage", description: "Extra 1TB of cloud save", yearlyPrice: "+$20/yr", monthlyPrice: "+$2/mo" },
    { label: "Customizable profile", description: "Custom theme on your profile", yearlyPrice: "+$20/yr", monthlyPrice: "+$2/mo" },
  ]
</script>

<header>
  <h2 class="mb-[16px] text-2xl font-bold text-marine-blue md:text-[2rem]">Pick add-ons</h2>
  <p class="max-w-[240px] text-[14px] text-cool-gray md:mb-[46px] md:max-w-none md:text-[1rem]">Add-ons help enhance your gaming experience.</p>
</header>
<div class="space-y-3">
  {#each addons as addon (addon.label)}
    <label
      for={addon.label.toLowerCase().replace(/\s+/g, "-")}
      class="checkbox-label flex min-h-[62px] cursor-pointer items-center gap-4 rounded-[10px] border border-light-gray p-4 md:h-[80px] md:gap-[22px] md:p-[22px]"
    >
      <input
        class="h-[20px] w-[20px] cursor-pointer rounded border-light-gray checked:bg-purplish-blue focus:ring-0"
        type="checkbox"
        name={addon.label.toLowerCase().replace(/\s+/g, "-")}
        id={addon.label.toLowerCase().replace(/\s+/g, "-")}
      />
      <span class="space-y-1 md:space-y-2">
        <h3 class="text-[15px] font-medium leading-none tracking-tighter text-marine-blue md:text-[1rem]">{addon.label}</h3>
        <p class="text-[13px] leading-none tracking-tighter text-cool-gray md:text-[15px]">{addon.description}</p>
      </span>
      {#if $isYearly}
        <p class="ml-auto text-[13px] text-purplish-blue md:text-[14px]">{addon.yearlyPrice}</p>
      {:else}
        <p class="ml-auto text-[13px] text-purplish-blue md:text-[14px]">{addon.monthlyPrice}</p>
      {/if}
    </label>
  {/each}
</div>
