import { morphism } from 'morphism';
import * as Schemas from '$lib/mapping/schemas';

export const articleMapper = morphism(Schemas.articleSchema);

export const articlePreviewMapper = morphism(Schemas.articlePreviewSchema);

export const homepageMapper = morphism(Schemas.homepageSchema);