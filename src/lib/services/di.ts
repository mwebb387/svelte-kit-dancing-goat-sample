import { container } from 'tsyringe';
import {
	camelCasePropertyNameResolver,
	createDeliveryClient,
	DeliveryClient
} from '@kentico/kontent-delivery';

import { ICmsService } from '$lib/interfaces';
import { CmsService } from './cms';

export function registerServices() {
	container.register('ProjectId', { useValue: import.meta.env.VITE_KONTENT_PROJECT_ID });

	container.register<DeliveryClient>(DeliveryClient, {
		useFactory: (container) =>
			createDeliveryClient({
				projectId: container.resolve('ProjectId'),
				propertyNameResolver: camelCasePropertyNameResolver
			})
	});
}

export function getCmsService(): ICmsService {
	return container.resolve<ICmsService>(CmsService);
}
