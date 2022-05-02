<script lang="ts">
  import type { ArticlePreview } from '$lib/interfaces';
  import { Card, Clickable } from '@kahi-ui/framework';

  export let preview: ArticlePreview;

  $: href = `/articles/${preview.slug}`;
</script>

<Clickable.Container>
  <Card.Container>

    <Card.Figure height="100" fit="cover">
        <img src="{preview.teaserImage.url}" alt={preview.teaserImage.name} />
    </Card.Figure>

    <Card.Header>
      <Clickable.Anchor href={href}>
        {preview.title}
      </Clickable.Anchor>
    </Card.Header>

  </Card.Container>
</Clickable.Container>

<style>
  img {
    height: 100%;
    width: auto;
  }
</style>