<script lang="ts">
  import Design from "./components/Design.svelte"
  import StepFour from "./components/StepFour.svelte"
  import StepOne from "./components/StepOne.svelte"
  import StepThree from "./components/StepThree.svelte"
  import StepTwo from "./components/StepTwo.svelte"
  import ThankYou from "./components/ThankYou.svelte"
  import { totalPrice, stepStore, validations, formDataStore, validateName, validateEmail, validatePhoneNumber } from "./lib/stores"

  const steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"] as const
  function formValidation() {
    formDataStore.subscribe((data) => {
      validations.update((validations) => ({
        name: validateName(data.name),
        email: validateEmail(data.email),
        phoneNumber: validatePhoneNumber(data.phoneNumber),
      }))
    })
  }

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault()
    if ($stepStore !== steps.length) return stepStore.goNextStep()
    alert(`Form Submitted:
  Name: ${$formDataStore.name}
  Email: ${$formDataStore.email}
  Phone Number: ${$formDataStore.phoneNumber}
    `)
  }
</script>

<main class="relative flex min-h-screen flex-col">
  <!-- <Design /> -->
  <h1 class="sr-only">Multi-step Form</h1>
  <div class="flex grow flex-col items-center justify-center md:p-[18px]">
    <div class="flex w-full grow flex-col rounded-xl md:max-h-[600px] md:max-w-[940px] md:flex-row md:gap-4 md:bg-white md:p-4 md:shadow-lg md:shadow-light-gray">
      <nav class="relative h-[170px] w-full overflow-hidden md:h-[565px] md:max-w-[275px] md:rounded-[10px]">
        <picture class="absolute inset-0">
          <source srcset="./images/bg-sidebar-desktop.svg" media="(min-width: 768px)" />
          <img src="./images/bg-sidebar-mobile.svg" alt="" role="presentation" class="h-full w-full select-none object-cover" draggable="false" />
        </picture>
        <ol class="relative z-10 mt-8 flex justify-center gap-4 md:mt-0 md:flex-col md:gap-8 md:px-8 md:py-[38px]">
          {#each steps as step, index}
            <li class="flex items-center gap-4">
              <div
                class="inline-flex h-8 w-8 items-center justify-center rounded-full border font-bold
                {$stepStore === index + 1 ? 'border-light-blue bg-light-blue text-marine-blue' : 'border-white text-white '}"
              >
                {index + 1}
              </div>
              <div class="sr-only space-y-1 md:not-sr-only">
                <p class="text-[12px] uppercase text-cool-gray">Step {index + 1}</p>
                <p class="font-medium uppercase text-alabaster">{step}</p>
              </div>
            </li>
          {/each}
        </ol>
      </nav>
      <form class="flex grow flex-col" on:submit={handleSubmit}>
        <div class="relative z-10 mx-4 mb-6 mt-[-72px] space-y-4 rounded-[10px] bg-white p-6 md:m-0 md:space-y-6 md:p-0 md:px-[84px] md:py-[42px]">
          {#if $stepStore === 1}<StepOne />{/if}
          {#if $stepStore === 2}<StepTwo />{/if}
          {#if $stepStore === 3}<StepThree />{/if}
          {#if $stepStore === 4}<StepFour />{/if}
          {#if $stepStore === 5}<ThankYou />{/if}
        </div>
        <div class="mt-auto flex min-h-[70px] w-full items-center justify-between gap-4 bg-white p-4 mb-safe {$stepStore === 5 ? 'hidden' : ''} md:px-[84px]">
          {#if $stepStore !== 1}
            <button on:click={stepStore.goBackStep} type="button" class="text-[14px] font-medium text-cool-gray hover:text-marine-blue md:text-[1rem]">Go Back</button>
          {/if}

         <p class="text-strawberry-red"> {$formDataStore.plan}</p>
          <p class="text-purplish-blue">{$formDataStore.planLength}</p>
          <button
            type="submit"
            disabled={$validations.name || $validations.email || $validations.phoneNumber}
            class="ml-auto inline-flex h-[40px] w-[96px] items-center justify-center rounded-[8px] text-[14px] font-medium text-magnolia md:h-[48px] md:w-[124px] md:text-[1rem]
            {$stepStore === steps.length ? 'bg-purplish-blue hover:bg-purplish-blue/80' : 'bg-marine-blue hover:bg-marine-blue/80'}"
          >
            {$stepStore === steps.length ? "Confirm" : "Next Step"}
          </button>
        </div>
      </form>
    </div>
  </div>
</main>
