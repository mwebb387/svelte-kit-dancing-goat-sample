import { homepageMapper } from './../mapping/mappers';
import { singleton, inject } from 'tsyringe';
import { DeliveryClient, IDeliveryClient } from '@kentico/kontent-delivery';

import { ICmsService } from '$lib/interfaces';
import { projectModel } from '$lib/models/_project';
import { Article } from '$lib/models/article';
import { Home } from '$lib/models/home';
import { articlePreviewMapper } from '$lib/mapping/mappers';

@singleton()
export class CmsService implements ICmsService {
  constructor(
    @inject(DeliveryClient)
    private client: IDeliveryClient
  ) { }

  async getArticles() {
    const articleType = projectModel.contentTypes.article;
    const elements = [
      articleType.elements.title,
      articleType.elements.post_date,
      articleType.elements.summary,
      articleType.elements.teaser_image,
      articleType.elements.url_pattern
    ].map(el => el.codename);

    const articles = await this.client
      .items<Article>()
      .type(articleType.codename)
      .elementsParameter(elements)
      .toPromise();

    return articlePreviewMapper(articles.data.items);
  }

  async getHomepage() {
    const homeType = projectModel.contentTypes.home;
    const homepage = await this.client
      .items<Home>()
      .type(homeType.codename)
      .toPromise();

    return homepageMapper(homepage.data.items.shift());
  }
}
