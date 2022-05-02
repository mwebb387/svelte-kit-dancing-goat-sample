<script lang="ts">
  import { Container, Stack } from '@kahi-ui/framework';
  import Hero from '$lib/Components/Hero.svelte';
  import { Homepage } from '$lib/interfaces';
  import ArticleList from '$lib/Components/ArticleList.svelte';

  export let homepage: Homepage;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Stack.Container spacing="medium">
  <Hero
    title={homepage.heroUnit.title}
    subtitle={homepage.heroUnit.marketingMessage}
    imageSrc={homepage.heroUnit.image.url}>
  </Hero>

  <Container>
    <h2>Recent Articles</h2>
  </Container>

  <Container>
    <ArticleList articles={homepage.articles}></ArticleList>
  </Container>
</Stack.Container>