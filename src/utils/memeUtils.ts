import html2canvas from "html2canvas";
import { toast } from "sonner";

export interface MemeText {
  id: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
  fontFamily: string;
}

export const downloadMeme = (
  canvasRef: React.RefObject<HTMLDivElement>,
  onSuccess?: () => void,
  onError?: () => void
) => {
  if (!canvasRef.current) {
    toast.error("Canvas element not found");
    onError?.();
    return;
  }

  html2canvas(canvasRef.current, {
    allowTaint: true,
    useCORS: true,
    logging: false,
  })
    .then((canvas) => {
      const link = document.createElement("a");
      link.download = `meme-${new Date().getTime()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      onSuccess?.();
    })
    .catch((error) => {
      console.error("Error generating image:", error);
      onError?.();
    });
};

export const convertGoogleDriveUrl = (url: string) => {
  const fileIdMatch = url.match(/\/d\/(.*?)\/view/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
  }
  return url;
};

// Helper function to ensure public paths work both in development and production
export const getPublicPath = (url: string) => {
  // If it's already a full URL or data URL, return as is
  if (url.startsWith('http') || url.startsWith('data:') || url.startsWith('blob:')) {
    return url;
  }
  
  // If it starts with "/lovable-uploads/", ensure it has the correct leading slash
  if (url.includes('/lovable-uploads/')) {
    // Normalize the path to ensure it has exactly one leading slash
    return url.replace(/^\/*/, '/');
  }
  
  // Otherwise, ensure paths work with the base URL
  return url.startsWith('/') ? url : `/${url}`;
};

// Template images
export const templateImages = [
  {
    url: '/lovable-uploads/0bc20a0c-cc2e-45f7-a256-64a156fb3d04.png',
    name: 'Drake Hotline Bling',
    fallback: '/lovable-uploads/9581f077-87c7-4013-bd4b-72f8abb319a2.png'
  },
  {
    url: '/lovable-uploads/33899fa4-54a0-4a2e-b9bd-b9d1637efab8.png',
    name: 'Distracted Boyfriend',
    fallback: '/lovable-uploads/ded0621f-61a3-4ac9-b29f-f589867034e1.png'
  },
  {
    url: '/lovable-uploads/3d7c1eab-db2a-425d-abee-5d1d48d90f4e.png',
    name: 'Two Buttons',
    fallback: '/lovable-uploads/e6ba6807-fcd5-44bb-8943-06408a69c18f.png'
  },
  {
    url: '/lovable-uploads/98151edf-a71a-498e-bead-59b67030ea29.png',
    name: 'Blinking Guy',
    fallback: '/lovable-uploads/98151edf-a71a-498e-bead-59b67030ea29.png'
  },
  {
    url: '/lovable-uploads/83f2a199-b47b-4fee-ad80-1e1579f43bc1.png',
    name: 'Epic Handshake',
    fallback: '/lovable-uploads/83f2a199-b47b-4fee-ad80-1e1579f43bc1.png'
  },
  {
    url: '/lovable-uploads/90de871d-b892-4cc1-a2ef-45cb71a5af6d.png',
    name: 'Change My Mind',
    fallback: '/lovable-uploads/90de871d-b892-4cc1-a2ef-45cb71a5af6d.png'
  },
  {
    url: '/lovable-uploads/9f0f411b-dbae-4537-a742-cfac0f1c4b75.png',
    name: 'Expanding Brain',
    fallback: '/lovable-uploads/9f0f411b-dbae-4537-a742-cfac0f1c4b75.png'
  },
  {
    url: '/lovable-uploads/b730e20c-f36c-4a2d-a1f6-dc78a6232fc2.png',
    name: 'Buff Doge vs Cheems',
    fallback: '/lovable-uploads/b730e20c-f36c-4a2d-a1f6-dc78a6232fc2.png'
  },
  {
    url: '/lovable-uploads/dca06f66-5f29-43ed-9e68-1ce3e382ac56.png',
    name: 'Gru Plan',
    fallback: '/lovable-uploads/dca06f66-5f29-43ed-9e68-1ce3e382ac56.png'
  },
  {
    url: '/lovable-uploads/f6961b06-0572-4d3c-a647-d7fdacb9a5df.png',
    name: 'Always Has Been',
    fallback: '/lovable-uploads/f6961b06-0572-4d3c-a647-d7fdacb9a5df.png'
  }
];
