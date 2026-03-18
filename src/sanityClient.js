import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "wlhjrl6",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true, // ✅ BACK TO TRUE
});