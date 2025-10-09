export const generatePlaceholderSrc = (src: string): string | undefined => {
    if (src && src.includes('picsum.photos/seed/')) {
        // Example: https://picsum.photos/seed/prompt-chaining/800/400
        const parts = src.split('/');
        // Expected format: [..., 'seed', 'some-seed', 'width', 'height']
        if (parts.length > 2) {
            const widthIndex = parts.length - 2;
            const heightIndex = parts.length - 1;
            
            const width = parseInt(parts[widthIndex], 10);
            const height = parseInt(parts[heightIndex], 10);
            
            if (!isNaN(width) && !isNaN(height) && width > 0 && height > 0) {
                // Reduce quality significantly by using much smaller dimensions
                const placeholderWidth = Math.max(20, Math.round(width / 40));
                const placeholderHeight = Math.max(20, Math.round(height / 40));
                
                parts[widthIndex] = placeholderWidth.toString();
                parts[heightIndex] = placeholderHeight.toString();
                
                return parts.join('/');
            }
        }
    }
    // For other image sources, we can't generate a placeholder this way.
    return undefined;
};

export const generateSrcSet = (src: string, widths: number[] = [320, 480, 800, 1200]): string | undefined => {
    if (src && src.includes('picsum.photos/seed/')) {
        const parts = src.split('/');
        if (parts.length > 2) {
            const widthIndex = parts.length - 2;
            const heightIndex = parts.length - 1;
            
            const originalWidth = parseInt(parts[widthIndex], 10);
            const originalHeight = parseInt(parts[heightIndex], 10);
            
            if (!isNaN(originalWidth) && !isNaN(originalHeight) && originalWidth > 0 && originalHeight > 0) {
                const aspectRatio = originalHeight / originalWidth;
                return widths
                    .filter(w => w <= originalWidth) // Only generate smaller or equal sizes
                    .map(w => {
                        const h = Math.round(w * aspectRatio);
                        const newParts = [...parts];
                        newParts[widthIndex] = w.toString();
                        newParts[heightIndex] = h.toString();
                        return `${newParts.join('/')} ${w}w`;
                    })
                    .join(', ');
            }
        }
    }
    return undefined;
};