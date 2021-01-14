export default function CommaQualityFromString(value) {
    const splits = value.split(',').map(value => {
        const parts = value.split(';', 2);
        let quality;
        if (parts[1]) {
            let temp = parts[1];
            let value = temp.split('=', 2).pop();
            quality = parseFloat(value.trim());
        }
        else {
            quality = 1;
        }
        return [parts[0].trim(), quality];
    });
    const sorted = splits.sort(([, v1], [, v2]) => v1 - v2);
    return new Map(sorted);
}
//# sourceMappingURL=comma-quality-from-string.js.map