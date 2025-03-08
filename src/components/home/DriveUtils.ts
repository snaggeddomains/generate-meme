
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
        id: "1pFKi6tTj_YP_6Izn5Vp_eE6b4t15YZUQ",
        name: "Drake Meme"
      },
      {
        id: "14JA_2aGRKUCM5Zg4F8Wzep_B-xvTmPj9",
        name: "Distracted Boyfriend"
      },
      {
        id: "1gIL-ajAbBS12K_9fToVqQJd33XNNQxwF",
        name: "Change My Mind"
      },
      {
        id: "10BPp-P2ZTvZH5r8GWbCXnHuUPr8RJAke",
        name: "Two Buttons"
      }
    ];
  } catch (error) {
    console.error("Error fetching Google Drive folder contents:", error);
    return [];
  }
};
