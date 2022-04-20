<script lang="ts">
  import type { ArticlePreview } from '$lib/interfaces';
  import Card, { Content, Media, MediaContent } from '@smui/card';

  export let preview: ArticlePreview;
</script>

<Card>
    <Content>
      <h2 class="mdc-typography--subtitle2">{preview.title}</h2>
    </Content>
    <Media class="card-media-16x9" aspectRatio="16x9">
      <MediaContent>
        <img src="{preview.teaserImage.url}" alt={preview.teaserImage.name} />
      </MediaContent>
    </Media>
</Card>

<style>
  h2 {
    font-size: 18px;
  }

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
</style>