import objectFit from 'object-fit';

objectFit.polyfill({
  selector: '.hero__image', // this can be any CSS selector
  fittype: 'cover', // either contain, cover, fill or none
});
