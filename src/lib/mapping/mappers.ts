import { morphism } from 'morphism';
import * as Schemas from '$lib/mapping/schemas';

export const articlePreviewMapper = morphism(Schemas.articlePreviewSchema);

export const homepageMapper = morphism(Schemas.homepageSchema);