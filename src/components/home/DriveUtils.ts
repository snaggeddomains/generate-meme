
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
      }
    ];
  } catch (error) {
    console.error("Error fetching template contents:", error);
    return [];
  }
};
