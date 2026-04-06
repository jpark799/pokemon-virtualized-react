export const idFromUrl = (url: string) => {
  const parts = url.replace(/\/$/, "").split("/")
  return Number(parts[parts.length - 1])
}
