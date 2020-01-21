import { Post } from './Post';
import json from './assets/json';
import xml from './assets/data.xml';
import WebpackLogo from './assets/webpack-logo.png';
import './styles/styles.css';

const post = new Post('Webpack Post Title', WebpackLogo);

console.log('Post to String', post.toString());

console.log('JSON', json);
console.log('XML', xml);
