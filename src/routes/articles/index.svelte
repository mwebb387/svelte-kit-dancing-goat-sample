<script lang="ts">
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import ArticlePreview from '$lib/Components/ArticlePreview.svelte';
  import { ArticlePreview as IArticlePreview } from '$lib/interfaces';

  export let articles: IArticlePreview[];
</script>

<h1>All Articles</h1>

<LayoutGrid>
  {#each articles as article}
    <Cell>
      <ArticlePreview  preview={article} />
    </Cell>
  {/each}
</LayoutGrid>

<style>
  h1 {
    margin-left: var(--mdc-layout-grid-margin-phone, 16px);
  }

  @media (min-width: 840px) {
    h1 {
      padding: var(--mdc-layout-grid-margin-desktop, 24px);
    }
  }
</style>