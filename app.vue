<template>
  <div class="flex flex-col min-h-screen">
    <ClientOnly>
      <SiteHeader />
      <main
        class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full"
      >
        <NuxtPage />
      </main>
      <SiteFooter />
    </ClientOnly>
  </div>
</template>
