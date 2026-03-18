import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "wlhljrl6",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});