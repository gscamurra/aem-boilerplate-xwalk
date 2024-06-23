export default function decorate(block) {

   const [youtubeWrapper] = block.children;

   link = youtubeWrapper.getElementsByTagName('a')[0].getAttribute('href');


   console.log(link);


}