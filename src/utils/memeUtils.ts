
// Google Drive public ID format: Convert the sharing URL to a direct image URL
export const convertGoogleDriveUrl = (url: string) => {
  // Extract the file ID from the Google Drive sharing URL
  const fileIdMatch = url.match(/\/d\/(.*?)\/view/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
  }
  return url;
};

// Template images for quick selection
export const templateImages = [
  {
    url: '/lovable-uploads/e6ba6807-fcd5-44bb-8943-06408a69c18f.png',
    name: 'Highway Exit Meme'
  },
  {
    url: '/lovable-uploads/24d9e8e6-996a-49b6-8b8e-4318cd5910a9.png',
    name: 'Kermit Meme'
  },
  {
    url: '/lovable-uploads/ec952d3a-5d11-4172-a488-ea4792c5a0dc.png',
    name: 'Will Smith Slap'
  },
  {
    url: '/lovable-uploads/02d162d5-0051-4e01-9453-f84dac7b779b.png',
    name: 'Roll Safe Meme'
  },
  {
    url: '/lovable-uploads/98151edf-a71a-498e-bead-59b67030ea29.png',
    name: 'Blinking Guy Meme'
  },
  {
    url: '/lovable-uploads/83f2a199-b47b-4fee-ad80-1e1579f43bc1.png',
    name: 'Epic Handshake'
  },
  {
    url: '/lovable-uploads/90de871d-b892-4cc1-a2ef-45cb71a5af6d.png',
    name: 'Change My Mind'
  },
  {
    url: convertGoogleDriveUrl('https://drive.google.com/file/d/1pFKi6tTj_YP_6Izn5Vp_eE6b4t15YZUQ/view?usp=drive_link'),
    name: 'Drake Meme'
  }
];

// Font families available for meme text
export const fontFamilies = [
  { value: "Impact", label: "Impact" },
  { value: "Arial", label: "Arial" },
  { value: "Comic Sans MS", label: "Comic Sans" },
  { value: "Pacifico", label: "Pacifico" },
  { value: "Oswald", label: "Oswald" },
];

// Text colors available for meme text
export const textColors = [
  "#FFFFFF", // White
  "#000000", // Black
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FF00FF", // Magenta
  "#00FFFF", // Cyan
  "#FFA500", // Orange
  "#8B5CF6", // Purple
  "#D946EF", // Pink
  "#F97316", // Orange
];

// Downloader utility for memes
export const downloadMeme = (canvasRef: React.RefObject<HTMLDivElement>, onSuccess: () => void, onError: (err: any) => void) => {
  if (!canvasRef.current) return;
  
  import('html2canvas').then(({ default: html2canvas }) => {
    html2canvas(canvasRef.current!).then(canvas => {
      const link = document.createElement('a');
      link.download = 'generated-meme.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
      onSuccess();
    });
  }).catch(err => {
    console.error("Error downloading meme:", err);
    onError(err);
  });
};

// Common meme text types and interfaces
export interface MemeText {
  id: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
  fontFamily: string;
}
