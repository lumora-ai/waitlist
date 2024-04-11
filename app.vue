<template>
  <UContainer>
    <div class="w-full h-screen flex items-center justify-between">
      <div class="md:w-[40%] space-y-4 my-auto">
        <img src="./assets/images/lumora.svg" class="z-50 mb-10 w-52" />
    
        <UBadge variant="soft" label="COMING SOON" size="lg" class="rounded-full font-bold" />
        <h1 class="text-3xl font-semibold">Never loose a great idea again.</h1>
        <span class="text-lg font-light mt-4">Record thoughts right when they happen. <br /> Lumora organizes all of your thoughts into a searchable knowledge base, with an AI assistant to help connect ideas.</span>
    
        <form action="https://submit-form.com/sSwsq1yUB"  class="flex gap-2 w-full">
          <UInput name="email" placeholder="Enter your Email" size="xl" class="flex-1" /> 
          <UButton type="submit" label="Join Waitlist" size="xl" />
        </form>
        <div class="flex">
          <span class="pr-3.5 py-2.5 font-light ">Connect with us: </span>
          <UButton variant="ghost" square to="https://twitter.com/LumoraAI" icon="i-mdi-twitter" target="_blank" size="lg" />
          <UButton variant="ghost" square to="https://www.instagram.com/lumora.ai/" icon="i-mdi-instagram" target="_blank" size="lg" />
          <UButton variant="ghost" square to="https://www.linkedin.com/company/lumora-ai" icon="i-mdi-linkedin" target="_blank" size="lg" />
        </div>
      </div>
      <img class="hidden md:block w-[45%]" src="./assets/images/pattern.png" alt="Cute Pattern" />
    </div>
  </UContainer>
</template>