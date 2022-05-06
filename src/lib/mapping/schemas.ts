
import { ElementModels } from "@kentico/kontent-delivery";
import { morphism, Schema } from "morphism";
import { ArticleDetail, ArticlePreview, Hero, Homepage, Image } from "$lib/interfaces";

import { Article } from "../models/article";
import { HeroUnit } from '../models/hero_unit';
import { Home } from '../models/home';

export const imageSchema: Schema<Image, ElementModels.AssetModel> = {
  name: 'name',
  type: 'type',
  size: 'size',
  description: 'description',
  url: 'url',
  width: 'width',
  height: 'height',
}

export const articlePreviewSchema: Schema<ArticlePreview, Article> = {
  title: 'elements.title.value',
  postDate: 'elements.postDate.value',
  summary: 'elements.summary.value',
  teaserImage: (article: Article) => morphism(imageSchema, article.elements.teaserImage?.value?.[0]),
  slug: 'elements.urlPattern.value',
}

export const articleSchema: Schema<ArticleDetail, Article> = {
  title: 'elements.title.value',
  postDate: 'elements.postDate.value',
  summary: 'elements.summary.value',
  teaserImage: (article: Article) => morphism(imageSchema, article.elements.teaserImage?.value?.[0]),
  slug: 'elements.urlPattern.value',
  bodyCopy: 'elements.bodyCopy.value',
  // metadata: Metadata
}

export const heroSchema: Schema<Hero, HeroUnit> = {
  title: 'elements.title.value',
  image: (hero: HeroUnit) => morphism(imageSchema, hero.elements.image?.value?.[0]),
  marketingMessage: 'elements.marketingMessage.value'
}

export const homepageSchema: Schema<Homepage, Home> = {
  codename: 'system.codename',
  heroUnit: (home: Home) => morphism(heroSchema, home.elements.heroUnit?.linkedItems?.[0] as HeroUnit),
  articles: (home: Home) => morphism(articlePreviewSchema, home.elements.articles?.linkedItems as Article[]),
  // metadata: Metadata
}