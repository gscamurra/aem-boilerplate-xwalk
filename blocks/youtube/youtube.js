export default function decorate(block) {
    const [youtubeWrapper] = block.children;
    const blockyoutube = document.createElement("blockyoutube");
    
    blockyoutube.textContent = youtubeWrapper.textContent.trim();
    
    youtubeWrapper = "Ironman";
}