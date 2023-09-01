<script lang="ts">
  import { formDataStore, validateEmail, validateName, validatePhoneNumber, validations } from "../lib/stores"
</script>

<header>
  <h2 class="mb-[16px] text-2xl font-bold text-marine-blue md:text-[2rem]">Personal info</h2>
  <p class="max-w-[240px] text-[14px] text-cool-gray md:mb-[46px] md:max-w-none md:text-[1rem]">Please provide your name, email address, and phone number.</p>
</header>
<div class="flex flex-col">
  <div class="mb-[8px] flex justify-between">
    <label for="name" class=" text-[12px] font-medium text-marine-blue md:text-[14px]">Name</label>
    <p class="text-[12px] font-bold text-strawberry-red md:text-[14px] {$validations.name ? '' : 'hidden'}">This field is required</p>
  </div>
  <input
    class="h-[40px] rounded-[8px] border-light-gray text-[14px] font-medium placeholder:text-cool-gray focus:ring-1 md:h-[46px] md:text-[1rem]
   {$validations.name ? 'border border-strawberry-red focus:ring-strawberry-red' : 'focus:ring-purplish-blue'}
    "
    id="name"
    name="name"
    bind:value={$formDataStore.name}
    type="text"
    placeholder="e.g. Stephen King"
    required

  />
</div>
<div class="flex flex-col">
  <div class="mb-[8px] flex justify-between">
    <label for="email" class=" text-[12px] font-medium text-marine-blue md:text-[14px]">Email Address</label>
    <p class=" text-[12px] font-bold text-strawberry-red md:text-[14px] {$validations.email ? '' : 'hidden'}">This field is required</p>
  </div>
  <input
    class="h-[40px] rounded-[8px] border-light-gray text-[14px] font-medium placeholder:text-cool-gray focus:ring-1 md:h-[46px] md:text-[1rem]
   {$validations.email ? 'border border-strawberry-red focus:ring-strawberry-red' : 'focus:ring-purplish-blue'}
    "
    id="email"
    name="email"
    bind:value={$formDataStore.email}
    type="email"
    placeholder="e.g.stephenking@lorem.com"
    required
  />
</div>
<div class="flex flex-col">
  <div class="mb-[8px] flex justify-between">
    <label for="phone-number" class=" text-[12px] font-medium text-marine-blue md:text-[14px]">Phone Number</label>
    <p class=" text-[12px] font-bold text-strawberry-red md:text-[14px] {$validations.phoneNumber ? '' : 'hidden'}">This field is required</p>
  </div>
  <input
    class="h-[40px] rounded-[8px] border-light-gray text-[14px] font-medium placeholder:text-cool-gray focus:ring-1 md:h-[46px] md:text-[1rem]
   {$validations.phoneNumber ? 'border border-strawberry-red focus:ring-strawberry-red' : 'focus:ring-purplish-blue'}
    "
    id="phone-number"
    name="phone number"
    type="tel"
    placeholder="e.g. +1 234 567 890"
    bind:value={$formDataStore.phoneNumber}
    required

  />
</div>
