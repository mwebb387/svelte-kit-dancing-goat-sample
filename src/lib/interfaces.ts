export interface Image {
  name: string;
  type: string;
  size: number;
  description: string | null;
  url: string;
  width: number | null;
  height: number | null;
}

export interface Metadata {
  metaKeywords: string,
  metaDescription: string,
  metadataMetaTitle: string,
  metadataMetaDescription: string,
  metadataOgTitle: string,
  metadataOgDescription: string,
  metadataOgImage: Image,
  metadataTwitterSite: string,
  metadataTwitterCreator: string,
  metadataTwitterTitle: string,
  metadataTwitterDescription: string,
  metadataTwitterImage: Image,
}

export interface ArticlePreview {
  title: string,
  postDate: Date,
  summary: string,
  teaserImage: Image,
  slug: string,
}

export interface ArticleDetail extends ArticlePreview {
  codename: string,
  // personas: Elements.TaxonomyElement,
  bodyCopy: string, // Rich Text
  // relatedArticles: Elements.LinkedItemsElement<IContentItem>,
  metadata: Metadata
}

export interface Hero {
  title: string;
  image: Image;
  marketingMessage: string;
}

export interface Homepage {
  codename: string,
  heroUnit: Hero;
  articles: ArticlePreview[];
  metadata: Metadata
}

export interface ICmsService {
  getArticles(): Promise<ArticlePreview[]>,
  getHomepage(): Promise<Homepage>,
}
