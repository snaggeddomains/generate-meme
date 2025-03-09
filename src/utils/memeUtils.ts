
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

// Add font families for the meme text
export const fontFamilies = [
  { value: "Impact", label: "Impact" },
  { value: "Arial", label: "Arial" },
  { value: "Helvetica", label: "Helvetica" },
  { value: "Comic Sans MS", label: "Comic Sans MS" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Courier New", label: "Courier New" },
  { value: "Verdana", label: "Verdana" },
  { value: "Georgia", label: "Georgia" }
];

// Add text colors for the meme text
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
  "#800080", // Purple
  "#008000", // Dark Green
  "#FFC0CB", // Pink
  "#A52A2A", // Brown
  "#808080"  // Gray
];

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

  // Apply additional styles to ensure clean rendering
  const canvasElement = canvasRef.current;
  const previousBgColor = canvasElement.style.backgroundColor;
  
  // Set explicit background color for the capture
  canvasElement.style.backgroundColor = "white";
  
  // Find all text containers and ensure they're properly styled
  const textContainers = canvasElement.querySelectorAll('.meme-text-container');
  const textElements = canvasElement.querySelectorAll('.meme-text');
  
  // Store original styles to restore later
  const originalStyles: {el: HTMLElement, bg: string, boxShadow: string}[] = [];
  
  // Apply transparent styles to text elements
  textContainers.forEach((container) => {
    if (container instanceof HTMLElement) {
      originalStyles.push({
        el: container,
        bg: container.style.backgroundColor,
        boxShadow: container.style.boxShadow
      });
      container.style.backgroundColor = 'transparent';
      container.style.boxShadow = 'none';
    }
  });
  
  textElements.forEach((el) => {
    if (el instanceof HTMLElement) {
      originalStyles.push({
        el: el,
        bg: el.style.backgroundColor,
        boxShadow: el.style.boxShadow
      });
      el.style.backgroundColor = 'transparent';
      el.style.boxShadow = 'none';
    }
  });

  html2canvas(canvasRef.current, {
    allowTaint: true,
    useCORS: true,
    logging: false,
    backgroundColor: "white", // Use white background for the entire canvas
    onclone: (document, clone) => {
      // Find all text elements in the cloned document and ensure they have transparent backgrounds
      const textContainers = clone.querySelectorAll('.meme-text-container');
      const textElements = clone.querySelectorAll('.meme-text');
      
      textContainers.forEach((container) => {
        if (container instanceof HTMLElement) {
          container.style.backgroundColor = 'transparent';
          container.style.background = 'transparent';
          container.style.boxShadow = 'none';
        }
      });
      
      textElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.backgroundColor = 'transparent';
          el.style.background = 'transparent';
          el.style.boxShadow = 'none';
        }
      });
    }
  })
    .then((canvas) => {
      const link = document.createElement("a");
      link.download = `meme-${new Date().getTime()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      
      // Restore original styles
      originalStyles.forEach(({el, bg, boxShadow}) => {
        el.style.backgroundColor = bg;
        el.style.boxShadow = boxShadow;
      });
      
      // Restore previous background color
      canvasElement.style.backgroundColor = previousBgColor;
      onSuccess?.();
    })
    .catch((error) => {
      console.error("Error generating image:", error);
      
      // Restore original styles
      originalStyles.forEach(({el, bg, boxShadow}) => {
        el.style.backgroundColor = bg;
        el.style.boxShadow = boxShadow;
      });
      
      // Restore previous background color
      canvasElement.style.backgroundColor = previousBgColor;
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
