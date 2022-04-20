<script lang="ts">
  export let title : string;
  export let subtitle: string = '';
  export let imageSrc: string;
</script>

<div class="hero">
  <div class="hero-copy">
    <h1>{title}</h1>
    {#if subtitle}
        {@html subtitle}
    {/if}
  </div>
  <img src={imageSrc} alt={title}>
</div>

<style>
  .hero {
    position: relative;
  }

  .hero-copy {
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    left: 0;
    padding: var(--mdc-layout-grid-margin-phone, 16px);
    position: absolute;
    right: 0;
    text-shadow: 2px 2px 4px black;
    top: 0;
  }

  img {
    display: block;
    width: 100%;
  }

  @media (min-width: 840px) {
    .hero-copy {
      padding: var(--mdc-layout-grid-margin-desktop, 24px);
    }
  }
</style>