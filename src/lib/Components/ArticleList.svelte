<script lang="ts">
  import { Grid } from '@kahi-ui/framework';
  import ArticlePreview from '$lib/Components/ArticlePreview.svelte';
  import { ArticlePreview as IArticlePreview } from '$lib/interfaces';

  export let articles: IArticlePreview[];
</script>

<Grid.Container spacing="medium" points={['3', 'mobile:1', 'tablet:2']}>
  {#each articles as article}
    <ArticlePreview  preview={article} />
  {/each}
</Grid.Container>