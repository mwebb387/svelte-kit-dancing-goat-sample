<script lang="ts">
  import { Container, Stack } from '@kahi-ui/framework';
  import { ArticleDetail } from '$lib/interfaces';
  import Hero from '$lib/Components/Hero.svelte';

  export let article: ArticleDetail;
</script>

<svelte:head>
	<title>{article.title}</title>
</svelte:head>

<Container>
  <Stack.Container spacing="huge">
    <Hero
      title={article.title}
      imageSrc={article.teaserImage.url}>
    </Hero>

    {@html article.bodyCopy}
  </Stack.Container>
</Container>