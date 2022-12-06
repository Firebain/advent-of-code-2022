export const sum = (array: number[]) => array.reduce((a, b) => a + b, 0);
export const chunk = <T>(array: T[], size: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        
        chunks.push(chunk)
    }

    return chunks;
}