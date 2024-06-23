export default function decorate(block) {

   const [youtubeWrapper] = block.children;
   const link = youtubeWrapper.getElementsByTagName('a')[0].getAttribute('href');

   youtubeWrapper.replaceChildren(link);

   console.log(link);


}