import { writable, get } from "svelte/store"

export const isYearly = writable(false)
export const totalPrice = writable(0)

function createStepStore() {
  const { set, update, subscribe } = writable(1)

  const goToStep = (step: number) => {
    set(step)
  }

  const goNextStep = () => {
    update((n) => n + 1)
  }

  const goBackStep = () => {
    update((n) => n - 1)
  }

  return {
    subscribe,
    goToStep,
    goNextStep,
    goBackStep,
  }
}

export const stepStore = createStepStore()

interface FormData {
  name: string
  email: string
  phoneNumber: string
  plan: "Arcade" | "Advance" | "Pro"
  planLength: "monthly" | "yearly"
  isOnlineService: boolean
  isLargeStorage: boolean
  isCustomizableProfile: boolean
}

export const formDataStore = writable<FormData>({
  name: "",
  email: "",
  phoneNumber: "",
  plan: "Arcade",
  planLength: "monthly",
  isOnlineService: false,
  isLargeStorage: false,
  isCustomizableProfile: false,
})

// Validation function for each field
export const validateName = (value: string) => value !== ""
export const validateEmail = (value: string) => /\S+@\S+\.\S+/.test(value) // Basic email validation
export const validatePhoneNumber = (value: string) => /^[+]?\d{10}$/.test(value) // 10-digit number validation

// Store validation results
export const validations = writable({
  name: false,
  email: false,
  phoneNumber: false,
})

// // Subscribe to formData changes and update validation status
// formDataStore.subscribe((data) => {
//   validations.update((validations) => ({
//     name: validateName(data.name),
//     email: validateEmail(data.email),
//     phoneNumber: validatePhoneNumber(data.phoneNumber),
//   }))
// })
