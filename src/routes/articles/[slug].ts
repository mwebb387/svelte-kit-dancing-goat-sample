import type { RequestEvent } from "@sveltejs/kit/types/internal";

export async function get({ locals, params }: RequestEvent) {
  const article = await locals.cms.getArticle(params.slug);
 
  if (article) {
    return {
      body: { article }
    };
  }
 
  return {
    status: 404
  };
}