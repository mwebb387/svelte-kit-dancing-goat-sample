<script lang="ts">
  import { Container, Stack } from '@kahi-ui/framework';
  import { ArticlePreview as IArticlePreview } from '$lib/interfaces';
  import ArticleList from '$lib/Components/ArticleList.svelte';

  export let articles: IArticlePreview[];
</script>

<Container>
  <Stack.Container spacing="medium">
    <h1>All Articles</h1>

    <ArticleList articles={articles}></ArticleList>
  </Stack.Container>
</Container>