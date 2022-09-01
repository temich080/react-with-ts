export function tempParser (temp: number): string {
    temp = Math.round(temp);
    return temp > 0 ? `+${temp}°` : `${temp}°`
}