<script>
  import FancyDappFeature from "@/components/FancyDappFeature.svelte";
  import { fade } from "svelte/transition";
</script>

<main transition:fade>
  <FancyDappFeature />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
