
export const convertGoogleDriveUrl = (url: string) => {
  const fileIdMatch = url.match(/\/d\/(.*?)\/view/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
  }
  return url;
};

export const extractGoogleDriveFolderContents = async () => {
  try {
    return [
      {
        id: "local-1",
        name: "Roll Safe Meme",
        url: "/lovable-uploads/02d162d5-0051-4e01-9453-f84dac7b779b.png"
      },
      {
        id: "local-2",
        name: "Blinking Guy Meme",
        url: "/lovable-uploads/98151edf-a71a-498e-bead-59b67030ea29.png"
      },
      {
        id: "local-3",
        name: "Epic Handshake",
        url: "/lovable-uploads/83f2a199-b47b-4fee-ad80-1e1579f43bc1.png"
      },
      {
        id: "local-4",
        name: "Change My Mind",
        url: "/lovable-uploads/90de871d-b892-4cc1-a2ef-45cb71a5af6d.png"
      },
      {
        id: "distracted-bf",
        name: "Distracted Boyfriend",
        url: "/lovable-uploads/33899fa4-54a0-4a2e-b9bd-b9d1637efab8.png"
      },
      {
        id: "two-buttons",
        name: "Two Buttons",
        url: "/lovable-uploads/3d7c1eab-db2a-425d-abee-5d1d48d90f4e.png"
      },
      {
        id: "expanding-brain",
        name: "Expanding Brain",
        url: "/lovable-uploads/9f0f411b-dbae-4537-a742-cfac0f1c4b75.png"
      },
      {
        id: "drake",
        name: "Drake Hotline Bling",
        url: "/lovable-uploads/0bc20a0c-cc2e-45f7-a256-64a156fb3d04.png"
      },
      {
        id: "doge-vs-cheems",
        name: "Buff Doge vs Cheems",
        url: "/lovable-uploads/b730e20c-f36c-4a2d-a1f6-dc78a6232fc2.png"
      },
      {
        id: "always-has-been",
        name: "Always Has Been",
        url: "/lovable-uploads/f6961b06-0572-4d3c-a647-d7fdacb9a5df.png"
      },
      {
        id: "gru-plan",
        name: "Gru Plan",
        url: "/lovable-uploads/dca06f66-5f29-43ed-9e68-1ce3e382ac56.png"
      },
      {
        id: "will-smith-slap",
        name: "Will Smith Slap",
        url: "/lovable-uploads/slap.png"
      },
      {
        id: "zac-efron",
        name: "Zac Efron Shrugging",
        url: "/lovable-uploads/zac-efron.png"
      },
      {
        id: "office-handshake",
        name: "Office Handshake",
        url: "/lovable-uploads/office-handshake.png"
      },
      {
        id: "crying-man",
        name: "Crying Man",
        url: "/lovable-uploads/crying-man.png"
      },
      {
        id: "shocked-shaq",
        name: "Shocked Shaq",
        url: "/lovable-uploads/shaq.png"
      },
      {
        id: "spiderman-pointing",
        name: "Spiderman Pointing",
        url: "/lovable-uploads/spiderman-pointing.png"
      },
      {
        id: "matt-damon-aging",
        name: "Matt Damon Aging",
        url: "/lovable-uploads/matt-damon-aging.png"
      }
    ];
  } catch (error) {
    console.error("Error fetching template contents:", error);
    return [];
  }
};
