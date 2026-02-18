export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  const host = url.hostname;

  const isProduction = host === "dos.tylermorgan.co";
  const isPreviewDeployment =
    host.endsWith(".dos-8sv.pages.dev") &&
    host !== "dos-8sv.pages.dev";

  if (!isProduction && !isPreviewDeployment) {
    return new Response("Forbidden", { status: 403 });
  }

  return next();
}