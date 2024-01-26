import 'i18next';

import page from '../../public/locales/en/page.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      page: typeof page;
    };
  }
}
