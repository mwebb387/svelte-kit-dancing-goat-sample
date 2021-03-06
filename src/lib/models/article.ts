import { IContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@4.0.0'
 */
export type Article = IContentItem<{
  personas: Elements.TaxonomyElement;
  title: Elements.TextElement;
  teaserImage: Elements.AssetsElement;
  postDate: Elements.DateTimeElement;
  summary: Elements.TextElement;
  bodyCopy: Elements.RichTextElement;
  relatedArticles: Elements.LinkedItemsElement<IContentItem>;
  metaKeywords: Elements.TextElement;
  metaDescription: Elements.TextElement;
  urlPattern: Elements.UrlSlugElement;
  metadataMetaTitle: Elements.TextElement;
  metadataMetaDescription: Elements.TextElement;
  metadataOgTitle: Elements.TextElement;
  metadataOgDescription: Elements.TextElement;
  metadataOgImage: Elements.AssetsElement;
  metadataTwitterSite: Elements.TextElement;
  metadataTwitterCreator: Elements.TextElement;
  metadataTwitterTitle: Elements.TextElement;
  metadataTwitterDescription: Elements.TextElement;
  metadataTwitterImage: Elements.AssetsElement;
}>;
