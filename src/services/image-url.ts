const getCroppedImageUrl = (url: string) => {
    const target = "media/";
    const index = url.indexOf(target);
    if (index === -1) return url;
    return url.slice(0, index) + "media/crop/600/400/" + url.slice(index + target.length);
}

export default getCroppedImageUrl;