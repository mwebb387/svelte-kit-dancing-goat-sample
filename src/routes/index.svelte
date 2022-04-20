<script lang="ts">
  import LayoutGrid, { Cell } from '@smui/layout-grid';

  import ArticlePreview from '$lib/Components/ArticlePreview.svelte';
  import Hero from '$lib/Components/Hero.svelte';

  import { ArticlePreview as IArticlePreview, Homepage } from '$lib/interfaces';

  export let homepage: Homepage;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Hero
  title={homepage.heroUnit.title}
  subtitle={homepage.heroUnit.marketingMessage}
  imageSrc={homepage.heroUnit.image.url}>
</Hero>

<h2>Recent Articles</h2>

<LayoutGrid>
  {#each homepage.articles as article}
    <Cell>
      <ArticlePreview  preview={article} />
    </Cell>
  {/each}
</LayoutGrid>

<style>
  h2 {
    margin-left: var(--mdc-layout-grid-margin-phone, 16px);
    text-decoration: underline;
  }

  @media (min-width: 840px) {
    h2 {
      padding: var(--mdc-layout-grid-margin-desktop, 24px);
    }
  }
</style>