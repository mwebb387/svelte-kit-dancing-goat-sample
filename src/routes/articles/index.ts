import type { RequestEvent } from "@sveltejs/kit/types/internal";

export async function get({ locals }: RequestEvent) {
  const articles = await locals.cms.getArticles();
 
  if (articles) {
    return {
      body: { articles }
    };
  }
 
  return {
    status: 404
  };
}