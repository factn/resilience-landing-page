import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutUsPagePreview from './preview-templates/AboutUsPagePreview';
import StoriesPostPreview from './preview-templates/StoriesPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about-us', AboutUsPagePreview);
CMS.registerPreviewTemplate('stories', StoriesPostPreview);
