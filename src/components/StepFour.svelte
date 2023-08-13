<script>
  import { isYearly, stepStore } from "../lib/stores"
</script>

<header>
  <h2 class="mb-[16px] text-2xl font-bold text-marine-blue md:text-[2rem]">Finishing up</h2>
  <p class="max-w-[240px] text-[14px] text-cool-gray md:mb-[46px] md:max-w-none md:text-[1rem]">Double-check everything looks OK before confirming.</p>
</header>
<div class="space-y-4 rounded-[10px] bg-alabaster px-4 py-5 md:space-y-6 md:p-6">
  <div class="flex items-center justify-between">
    <div class="space-y-2">
      <h3 class="text-[14px] font-bold leading-none text-marine-blue md:text-[1rem]">Arcade ({$isYearly ? "Yearly" : "Monthly"})</h3>
      <button on:click={() => stepStore.goToStep(2)} class="text-[14px] font-medium text-cool-gray underline decoration-2 hover:text-purplish-blue">Change</button>
    </div>
    <p class="text-[14px] font-bold leading-none text-marine-blue md:text-[1rem]">+$9/mo</p>
  </div>
  <hr class="border-light-gray" />
  <div class="flex justify-between">
    <h4 class="text-[14px] font-medium text-cool-gray">Online service</h4>
    <p class="text-[14px] font-medium text-marine-blue">+$1/mo</p>
  </div>
  <div class="flex justify-between">
    <h4 class="text-[14px] font-medium text-cool-gray">Larger storage</h4>
    <p class="text-[14px] font-medium text-marine-blue">+$2/mo</p>
  </div>
</div>
<div class="flex justify-between px-4 md:px-6">
  <h4 class="text-[14px] font-medium text-cool-gray">Total (per {$isYearly ? "year" : "month"})</h4>
  <p class="font-bold text-purplish-blue md:text-[20px]">+$12/mo</p>
</div>
