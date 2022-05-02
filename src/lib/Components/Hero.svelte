<script lang="ts">
  import { Hero } from '@kahi-ui/framework';

  export let title : string;
  export let subtitle: string = '';
  export let imageSrc: string;

  $: inlineStyle = `
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)),
      url(${imageSrc});
    background-repeat: no-repeat;
    background-size: cover;
  `
</script>

<Hero.Container style={inlineStyle}>
  <Hero.Header>{title}</Hero.Header>
  <Hero.Section>{@html subtitle}</Hero.Section>
</Hero.Container>