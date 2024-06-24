export default function decorate(block) {

   const [youtubeWrapper] = block.children;
   const link = youtubeWrapper.getElementsByTagName('a')[0].getAttribute('href');

   const iframe ='<div><iframe width="100%" height="315" src="'+link+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>';

   youtubeWrapper.replaceChildren(iframe);

   console.log(link);


}