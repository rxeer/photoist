import 'firebase/database';
import smoothscroll from 'smoothscroll-polyfill';

import './src/styles/_global.scss';

smoothscroll.polyfill();
export const onServiceWorkerUpdateReady = () => window.location.reload();
