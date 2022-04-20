import type { RequestEvent } from "@sveltejs/kit/types/internal";

export async function get({ locals }: RequestEvent) {
  const homepage = await locals.cms.getHomepage();
 
  if (homepage) {
    return {
      body: { homepage }
    };
  }
 
  return {
    status: 404
  };
}